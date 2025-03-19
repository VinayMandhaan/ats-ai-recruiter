'use client'

import { useState } from "react"
import Button from "../components/Generics/Button"
import Header from "../components/Generics/Header"
import { RootState } from "../redux/store"
import { useSelector } from "react-redux"
import axios from "axios"


const Interview = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState('')
    const [messages, setMessages] = useState<{ role: string; content: string; timestamp: number }[]>([])
    const [startTime, setStartTime] = useState<number | null>(null);
    const jobDescription = useSelector((state: RootState) => state.candidateReducer.jobDescription)
    const candidateSummary = useSelector((state: RootState) => state.candidateReducer.candidateSummary)

    const startInterview = async () => {
        setIsLoading(true)
        try {
            await axios.post('/api/generate-questions', {
                jobDescription: jobDescription,
                cvText: candidateSummary
            }).then((response) => {
                const data = response.data
                const firstQuestion = data.technical[0]
                setCurrentQuestion(firstQuestion)
                setMessages([{
                    role: 'assistant' as const,
                    content: firstQuestion,
                    timestamp: Date.now()
                }])
                setStartTime(Date.now())
            }).catch((error) => {
                console.error('Error', error)
                setIsLoading(false)
            })
        } catch (error) {
            console.error('Error', error)
        }
    }

    return (
        <div className="h-screen w-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
                    <div className="text-center py-8">
                        <Header title="Welcome to the Interview" subTitle="This interview will be conducted by AI. You will be asked a series of questions to assess your skills and suitability for the role. You can start the interview by clicking the button below." />

                        <Button
                            onClick={() => {
                                startInterview()
                            }}
                        >
                            {isLoading ? "Starting Interview..." : "Start Interview"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Interview
