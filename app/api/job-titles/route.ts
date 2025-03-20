import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: "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",
})

export async function POST(request: NextRequest) {
    try {
        const { cvText } = await request.json()

        const prompt = `Based on this CV, suggest 6 most suitable job titles for the candidate. Consider their experience, skills, and qualifications:
${cvText}
    
    Return a JSON array of job titles, for example:
    {"jobTitles": ["Job Title 1", "Job Title 2", "Job Title 3", "Job Title 4", "Job Title 5", "Job Title 6"]}`

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

        return NextResponse.json({ jobTitles: [] })
    } catch (error) {
        console.error('Error', error)
        return NextResponse.json(
            { error: 'Error' },
            { status: 500 }
        )
    }
} 