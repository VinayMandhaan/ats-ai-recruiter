import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
    try {
        const { messages, question, answer, timing, cvText, questionCounts } = await request.json()

        const currentTopicQuestions = messages?.filter((msg: any) =>
            msg?.role === 'assistant' && msg?.content.includes(question)
        ).length

        const shouldChangeTopic = currentTopicQuestions >= 2

        const isInterviewComplete =
            questionCounts.technical >= 4 &&
            questionCounts.behavioral >= 4 &&
            questionCounts.situational >= 4

        if (isInterviewComplete) {
            return NextResponse.json({
                interviewComplete: true,
                message: "Interview completed successfully"
            })
        }

        const topicsPrompt = `Based on this CV, identify the main topics and skills to assess. Extract these directly from the candidate's experience and qualifications:
    ${cvText}
    
    Return a JSON array of topics that are explicitly mentioned in their CV. Focus on their actual experience, skills, and areas of expertise.
    Example format: {"topics": ["Topic 1", "Topic 2", "Topic 3"]}`

        let topics: string[] = []
        try {
            const topicsCompletion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: topicsPrompt }],
                temperature: 0.7,
                response_format: { type: "json_object" }
            })

            const topicsResponse = topicsCompletion.choices[0].message.content
            if (topicsResponse) {
                const parsedTopics = JSON.parse(topicsResponse)
                topics = Array.isArray(parsedTopics.topics) ? parsedTopics.topics : []
            }
        } catch (error) {
            console.error('Error', error)
            topics = ['Professional Experience', 'Problem Solving', 'Communication', 'Industry Knowledge', 'Leadership']
        }

        let questionType: 'technical' | 'behavioral' | 'situational'
        if (questionCounts.technical < 4) {
            questionType = 'technical'
        } else if (questionCounts.behavioral < 4) {
            questionType = 'behavioral'
        } else {
            questionType = 'situational'
        }

        const systemMessage = {
            role: 'system',
            content: `You are an expert interviewer conducting a professional interview. Your role is to:
      1. Evaluate the candidate's responses thoroughly
      2. Only ask follow-up questions if the answer is unclear or incomplete
      3. Move to the next topic if the answer demonstrates understanding
      4. Maintain a professional and engaging conversation
      5. Keep track of time and maintain interview pace
      
      Guidelines:
      - Ask one question at a time
      - Provide clear, concise questions
      - Adapt your questions based on the candidate's experience level and role
      - Only ask follow-up questions if the answer needs clarification
    
      Current context:
      - Question asked: ${question}
      - Candidate's answer: ${answer}
      - Time taken: ${timing} seconds`
        }

        // Prepare the conversation history
        const conversationHistory = [
            systemMessage,
            ...messages.map((msg) => ({
                role: msg?.role,
                content: msg?.content
            }))
        ]

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: conversationHistory,
            temperature: 0.7,
            max_tokens: 500
        })

        const nextQuestion = completion.choices[0].message.content

        return NextResponse.json({
            question: nextQuestion,
            timestamp: Date.now(),
            currentTopics: topics,
            questionType,
            questionCounts: {
                ...questionCounts,
                [questionType]: questionCounts[questionType] + 1
            }
        })

    } catch (error) {
        console.log('Error', error)
        return NextResponse.json(
            { error: 'Error' },
            { status: 500 }
        )
    }
} 