import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: "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",
  })

export async function POST(request: NextRequest) {
    try {
        const { jobTitle, experience } = await request.json()

        const prompt = `Based on the Job Title and Experience Level, suggest 3 most suitable job descriptions for the candidate. Consider their experience, skills, and qualifications:
    Job Title: ${jobTitle}
    Experience Level: ${experience}
    
    Return a JSON array of job descriptions, for example:
    {"jobDescriptions": ["Job Description 1", "Job Description 2", "Job Description 3"]}`

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
            response_format: { type: "json_object" }
        })

        const response = completion.choices[0].message.content
        if (response) {
            const parsedResponse = JSON.parse(response)
            return NextResponse.json(parsedResponse)
        }

        return NextResponse.json({ jobDescriptions: [] })
    } catch (error) {
        console.error('Error fetching job descriptions:', error)
        return NextResponse.json(
            { error: 'Error processing job descriptions request' },
            { status: 500 }
        )
    }
} 