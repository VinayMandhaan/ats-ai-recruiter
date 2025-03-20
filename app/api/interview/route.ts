import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: "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",
})

interface InterviewMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
    timestamp?: number;
}

export async function POST(request: NextRequest) {
    try {
        const { messages, question, answer, timing, cvText, questionCounts } = await request.json()

        const currentTopicQuestions = messages?.filter((msg: InterviewMessage) =>
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
      - If the answer is clear and demonstrates understanding, move to the next topic
      
      For Situational Questions:
      - Present situational scenarios
      - Present realistic scenarios that could occur in their role
      - Include specific details like team size, deadlines, and constraints
      - Focus on common challenges in their industry
      - Include interpersonal situations (conflicts, leadership, communication)
      - Add business context (budgets, client demands, market conditions)
      - Make scenarios specific to their experience level
      - Include both positive and challenging situations
      
      Current context:
      - Question asked: ${question}
      - Candidate's answer: ${answer}
      - Time taken: ${timing} seconds
      - Follow-up count for current topic: ${currentTopicQuestions}
      - Should change topic: ${shouldChangeTopic}
      - Current question type: ${questionType}
      - Question counts: Technical (${questionCounts.technical}/4), Behavioral (${questionCounts.behavioral}/4), Situational (${questionCounts.situational}/4)
      - Available topics: ${topics.join(', ')}
      
      ${shouldChangeTopic ? 'Please change the topic and ask a new question from a different area.' : 'Only ask a follow-up question if the answer needs clarification. Otherwise, move to the next topic.'}
      
      ${questionType === 'technical' ? 'Focus on role-specific technical skills and knowledge.' :
                    questionType === 'behavioral' ? 'Focus on past experiences and behavior in work situations.' :
                        'Present a realistic scenario with specific details, constraints, and business context that could occur in their role.'}`
        }

        const conversationHistory = [
            systemMessage,
            ...messages.map((msg: InterviewMessage) => ({
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