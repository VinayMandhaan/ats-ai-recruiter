import { NextRequest, NextResponse } from 'next/server'
import pdfParse from 'pdf-parse'
import mammoth from 'mammoth'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const file = formData.get('file') as File

        if (!file) {
            return NextResponse.json(
                { error: 'No file found' },
                { status: 400 }
            )
        }

        const supportedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
        if (!supportedTypes.includes(file.type)) {
            return NextResponse.json(
                { error: 'File must be a PDF, DOCX, or TXT file' },
                { status: 400 }
            )
        }

        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        let text = ''

        switch (file.type) {
            case 'application/pdf':
                const pdfData = await pdfParse(buffer)
                text = pdfData.text
                break
            
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                const docxResult = await mammoth.extractRawText({ buffer })
                text = docxResult.value
                break
            
            case 'text/plain':
                text = buffer.toString('utf-8')
                break
        }

        return NextResponse.json({
            text,
        })

    } catch (error) {
        console.log('Error', error)
        return NextResponse.json(
            { error: 'Error' },
            { status: 500 }
        )
    }
}
