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

    const prompt = `As an expert interviewer, generate a comprehensive set of interview questions based on the following job description and candidate's CV. 
    Please categorize the questions into Technical, Behavioral, and Situational categories.
    
    Job Description:
    ${jobDescription}
    
    Candidate's CV:
    ${cvText}
    
    Generate a structured set of questions that:
    1. Assess technical skills relevant to the role
    2. Evaluate behavioral competencies
    3. Present situational scenarios
    4. Candidate's specific experience
    
    Format the response as a JSON object with the following structure:
    {
      "technical": ["question1", "question2", ...],
      "behavioral": ["question1", "question2", ...],
      "situational": ["question1", "question2", ...]
    }`

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", 
      messages: [
        {
          role: "system",
          content: "You are an expert interviewer"
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

    return NextResponse.json(questions)

  } catch (error) {
    console.error('Error', error)
    return NextResponse.json(
      { error: 'Error' },
      { status: 500 }
    )
  }
} 