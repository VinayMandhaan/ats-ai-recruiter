import { NextRequest, NextResponse } from 'next/server';
import pdfParse from 'pdf-parse';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const file = formData.get('file') as File

        if (!file) {
            return NextResponse.json(
                { error: 'No file found' },
                { status: 400 }
            );
        }
        if (!file.type.includes('pdf')) {
            return NextResponse.json(
                { error: 'File must be a PDF' },
                { status: 400 }
            )
        }
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        const data = await pdfParse(buffer)

        return NextResponse.json({
            text: data.text,
            numPages: data.numpages,
            info: data.info,
            metadata: data.metadata
        })

    } catch (error) {
        console.log('Error', error)
        return NextResponse.json(
            { error: 'Error processing PDF file' },
            { status: 500 }
        )
    }
}
