'use client'

import { useEffect, useRef, useState } from "react"
import Button from "../components/Generics/Button"
import Header from "../components/Generics/Header"
import { RootState } from "../redux/store"
import { useSelector } from "react-redux"
import axios from "axios"
import InterviewResult from "../components/Interview/InterviewResult"


interface Message {
    role: 'assistant' | 'user';
    content: string;
    timestamp: number;
    timing?: number;
}

const Interview = () => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const jobDescription = useSelector((state: RootState) => state.candidateReducer.jobDescription)
    const candidateSummary = useSelector((state: RootState) => state.candidateReducer.candidateSummary)
    const [isLoading, setIsLoading] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState('')
    const [messages, setMessages] = useState<Message[]>([])
    const [startTime, setStartTime] = useState<number | null>(null)
    const [answer, setAnswer] = useState<string>('')
    const [showResults, setShowResults] = useState(false)
    const [results, setResults] = useState<any>(null)
    const [questionCounts, setQuestionCounts] = useState({
        technical: 0,
        behavioral: 0,
        situational: 0
    })
    const [totalQuestions, setTotalQuestions] = useState(0)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    useEffect(() => {
        scrollToBottom();
    }, [messages]);


    const startInterview = async () => {
        setIsLoading(true)
        try {
            await axios.post('/api/generate-questions', {
                jobDescription: jobDescription,
                cvText: candidateSummary
            }).then((response) => {
                const data = response.data
                const firstQuestion = data.technical[0]
                //@ts-ignore
                const totalQues = Object.values(data).reduce((sum, category) => sum + category?.length, 0);
                console.log('totalQues', totalQues)
                console.log('data', data)
                setCurrentQuestion(firstQuestion)
                setMessages([{
                    role: 'assistant',
                    content: firstQuestion,
                    timestamp: Date.now()
                }])
                setStartTime(Date.now())
                setIsLoading(false)
                //@ts-ignore
                setTotalQuestions(totalQues)
            }).catch((error) => {
                console.log('Error', error)
                setIsLoading(false)
            })
        } catch (error) {
            console.log('Error', error)
        }
    }

    const handleSubmitAnswer = async () => {
        if (!answer?.trim() || !currentQuestion) return;

        const timing = startTime ? Math.round((Date.now() - startTime) / 1000) : 0

        const newMessages = [
            ...messages,
            {
                role: 'user' as const,
                content: answer,
                timestamp: Date.now(),
                timing
            }
        ];
        setMessages(newMessages)
        setAnswer('')
        setIsLoading(true)

        try {
            await axios.post('/api/interview', {
                messages: newMessages,
                question: currentQuestion,
                answer,
                timing,
                cvText: candidateSummary,
                questionCounts
            }).then((response) => {
                const data = response.data
                if (data.interviewComplete) {
                    endInterview()
                    return
                }
                setMessages([...newMessages, {
                    role: 'assistant' as const,
                    content: data.question,
                    timestamp: data.timestamp
                }])
                setCurrentQuestion(data.question)
                setStartTime(Date.now())

                if (data.questionCounts) {
                    setQuestionCounts(data.questionCounts)
                }
                setIsLoading(false)

            }).catch((error) => {
                console.log('Error', error)
                setIsLoading(false)
            })

        } catch (error) {
            console.log('Error', error)
        }
    }

    const endInterview = async () => {
        setIsLoading(true)
        try {
            await axios.post('/api/interview-result', {
                messages,
                jobDescription,
                cvText: candidateSummary
            }).then((response) => {
                const data = response.data
                setResults(data)
                setShowResults(true)
                setIsLoading(false)
            }).catch((error) => {
                console.log('Error', error)
                setIsLoading(false)
            })
        } catch (error) {
            console.log('Error', error)
        }
    }

    if (showResults && results) {
        return (
          <div className='h-screen w-screen'>
            <InterviewResult result={results} />
          </div>
        )
    }

    return (
        <div className="h-screen w-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
                    {
                        messages?.length == 0 ? (
                            <div className="text-center py-8">
                                <Header title="Welcome to the Interview" subTitle="This interview will be conducted by AI. You will be asked a series of questions to assess your skills and suitability for the role. You can start the interview by clicking the button below." />

                                <Button
                                    disabled={isLoading}
                                    onClick={() => {
                                        startInterview()
                                    }}
                                >
                                    {isLoading ? "Starting Interview..." : "Start Interview"}
                                </Button>
                            </div>
                        ) : (
                            <div className=" space-y-6 bg-white rounded-lg p-6 max-w-[80%]">
                                <div className="h-[500px] overflow-y-auto space-y-4">
                                    <p>Question {Math.floor(messages.length / 2) + 1} of {totalQuestions}</p>
                                    {messages.map((message, index) => (
                                        <div
                                            key={index}
                                            className={`flex ${message?.role === 'assistant' ? 'justify-start' : 'justify-end'
                                                }`}
                                        >
                                            <div
                                                className={`max-w-[80%] rounded-lg p-4 ${message?.role === 'assistant'
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'bg-blue-600 text-white'
                                                    }`}
                                            >
                                                <p className="whitespace-pre-wrap">{message?.content}</p>
                                                {message?.timing && (
                                                    <p className="text-xs mt-2 opacity-70">
                                                        Time taken: {message?.timing} seconds
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    <div ref={messagesEndRef} />
                                </div>
                                <div className="flex gap-4">
                                    <textarea
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                        placeholder="Type your answer here..."
                                        className="flex-1 p-3 border-black border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                                        rows={3}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <button
                                            onClick={handleSubmitAnswer}
                                            disabled={isLoading || !answer?.trim()}
                                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                                        >
                                            {isLoading ? 'Processing...' : 'Submit Answer'}
                                        </button>
                                        <button
                                            onClick={endInterview}
                                            disabled={isLoading || messages.length < 2}
                                            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 disabled:opacity-50"
                                        >
                                            End Interview
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Interview
