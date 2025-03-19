import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { messages, jobDescription, cvText } = await request.json()

    const userMessages = messages?.filter((msg: any) => msg.role === 'user')
    const responseTimes = userMessages?.filter((msg: any) => msg.timing).map((msg: any) => msg.timing)
    const averageResponseTime = responseTimes?.length ? responseTimes.reduce((acc: number, time: number) => acc + time, 0) / responseTimes?.length : 0
    const maxResponseTime = Math.max(...userMessages.map((msg: any) => msg.timing || 0))
    const minResponseTime = Math.min(...userMessages.map((msg: any) => msg.timing || 0))

    const prompt = `As an expert interviewer, analyze this technical interview transcript and provide a detailed evaluation.
    
    Job Description:
    ${jobDescription}
    
    Candidate's CV:
    ${cvText}
    
    Interview Transcript:
    ${messages.map((msg: any) => `${msg.role}: ${msg.content}`).join('\n')}
    
    Timing Metrics:
    - Average Response Time: ${averageResponseTime.toFixed(1)} seconds
    - Fastest Response: ${minResponseTime} seconds
    - Slowest Response: ${maxResponseTime} seconds
    
    Evaluation Guidelines:
    1. Technical Acumen: Evaluate depth of technical knowledge
    2. Communication Skills: Assess clarity, structure, and effectiveness of responses
    3. Responsiveness: Consider both speed and quality of responses
    4. Problem-Solving: Evaluate approach to technical challenges
    5. Cultural Fit: Assess alignment with company values and team dynamics`

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert technical interviewer who provides detailed, objective evaluations."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      response_format: { type: "json_object" }
    })

    const evaluation = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json({
      ...evaluation,
      timingMetrics: {
        averageResponseTime,
        maxResponseTime,
        minResponseTime
      }
    })

  } catch (error) {
    console.error('Error', error)
    return NextResponse.json(
      { error: 'Error' },
      { status: 500 }
    )
  }
} 