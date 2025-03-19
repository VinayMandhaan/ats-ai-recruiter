import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { jobDescription, cvText } = await request.json()

    if (!jobDescription || !cvText) {
      return NextResponse.json(
        { error: 'Both job description and CV text are required' },
        { status: 400 }
      )
    }

    const prompt = `As an expert interviewer, generate exactly 15 interview questions based on the following job description and candidate's CV. 
    The questions should be distributed as follows:
    - 6 Technical questions
    - 5 Behavioral questions
    - 4 Situational questions
    
    Job Description:
    ${jobDescription}
    
    Candidate's CV:
    ${cvText}
    
    Generate questions that:
    1. Assess technical skills relevant to the role
    2. Evaluate behavioral competencies
    3. Present situational scenarios
    4. Are tailored to the candidate's specific experience
    
    Format the response as a JSON object with the following structure:
    {
      "technical": ["question1", "question2", ...], // exactly 6 questions
      "behavioral": ["question1", "question2", ...], // exactly 5 questions
      "situational": ["question1", "question2", ...] // exactly 4 questions
    }
    
    Ensure each question is detailed and specific to the role and candidate's background.`

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", 
      messages: [
        {
          role: "system",
          content: "You are an expert interviewer who creates focused, relevant questions."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      response_format: { type: "json_object" }
    })

    const questions = JSON.parse(completion.choices[0].message.content || '{}')

    // Validate and ensure exactly 15 questions
    const technical = questions.technical || []
    const behavioral = questions.behavioral || []
    const situational = questions.situational || []

    if (technical.length !== 6 || behavioral.length !== 5 || situational.length !== 4) {
      // If counts are wrong, trim or pad arrays to match required lengths
      questions.technical = technical.slice(0, 6)
      questions.behavioral = behavioral.slice(0, 5)
      questions.situational = situational.slice(0, 4)
    }

    return NextResponse.json(questions)

  } catch (error) {
    console.error('Error', error)
    return NextResponse.json(
      { error: 'Error generating questions' },
      { status: 500 }
    )
  }
} 