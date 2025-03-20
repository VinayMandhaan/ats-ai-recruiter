'use client'
import { resetCurrentStep } from "@/app/redux/reducers/uiSlice"
import Button from "../Generics/Button"
import Header from "../Generics/Header"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { reset } from "@/app/redux/reducers/candidateSlice"
interface Result {
    overallScore: number
    summary: string
    recommendation: string
    scores: {
        [key: string]: {
            score: number
            explanation: string
            strengths: string[]
            areasForImprovement: string[]
        }
    }
    timingMetrics: {
        averageResponseTime: number
        minResponseTime: number
        maxResponseTime: number
    }
}
const InterviewResult = ({ result }: { result: Result }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const getScoreColor = (score: number) => {
        if (score >= 80) {
            return 'text-green-600'
        }
        if (score >= 50) {
            return 'text-yellow-600'
        }
        return 'text-red-600'
    }


    return (
        <div className="m-4 mt-6">
            <div className="absolute top-0 left-6">
                <Button onClick={() => {
                    dispatch(resetCurrentStep())
                    dispatch(reset())
                    router.push('/')
                }}>
                    Home
                </Button>
            </div>
            <div className="text-center">
                <Header title="Interview Score" subTitle="Your score is based on your response time, problem solving skills, technical knowledge, and cultural fit." />
                <div className={`text-5xl font-bold mt-4`}>
                    <p className={getScoreColor(result?.overallScore)}>{result?.overallScore}%</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Summary</h3>
                    <p className="text-gray-700">{result?.summary}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommendation</h3>
                    <p className="text-gray-700">{result?.recommendation}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {Object.entries(result.scores).map(([category, data]) => (
                    <div key={category} className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                            {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <div className={`text-3xl font-bold mb-4 ${getScoreColor(data.score)}`}>
                            {data.score}%
                        </div>
                        <p className="text-gray-700 mb-4">{data.explanation}</p>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Strengths</h4>
                                <ul className="list-disc list-inside text-gray-700">
                                    {data?.strengths?.map((strength, index) => (
                                        <li key={index}>{strength}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Areas for Improvement</h4>
                                <ul className="list-disc list-inside text-gray-700">
                                    {data?.areasForImprovement?.map((area, index) => (
                                        <li key={index}>{area}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Response Timing Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                            {result?.timingMetrics?.averageResponseTime?.toFixed(1)}s
                        </div>
                        <div className="text-gray-600">Average Response Time</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                            {result?.timingMetrics?.minResponseTime}s
                        </div>
                        <div className="text-gray-600">Fastest Response</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                            {result?.timingMetrics?.maxResponseTime}s
                        </div>
                        <div className="text-gray-600">Slowest Response</div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default InterviewResult