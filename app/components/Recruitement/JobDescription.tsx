'use client'

import { setJobDescription } from "@/app/redux/reducers/candidateSlice"
import { RootState } from "@/app/redux/store"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../Generics/Button"
import Header from "../Generics/Header"   
import { useRouter } from "next/navigation"

const JobDescription = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const jobTitle = useSelector((state: RootState) => state.candidateReducer.jobTitle)
    const jobExperience = useSelector((state: RootState) => state.candidateReducer.jobExperience)
    const jobDescription = useSelector((state: RootState) => state.candidateReducer.jobDescription)
    const candidateSummary = useSelector((state: RootState) => state.candidateReducer.candidateSummary)
    const currentStep = useSelector((state: RootState) => state.uiReducer.currentStep)
    const [jobDescriptions, setJobDescriptions] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchJobDescription()
    }, [])

    const fetchJobDescription = async () => {
        try {
            setIsLoading(true)
            await axios.post('/api/job-descriptions', {
                jobTitle: jobTitle,
                experience: jobExperience,
            }).then(response => {
                setJobDescriptions(response.data.jobDescriptions)
                console.log(response.data)
                setIsLoading(false)
            }).catch(error => {
                console.error('Error', error)
                setIsLoading(false)
            })
        } catch (error) {
            console.error('Error', error)
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return (
            <div className="h-screen w-screen">
                <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-gray-400 text-4xl font-bold">Generating Job Descriptions...</h3>
                </div>
            </div>
        )
    }

    return (
        <div className="h-screen w-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <Header title={`Enter Job Description for ${jobTitle} or Use Our AI To Generate One`} subTitle="Enter the job description for the candidate." />
                <div>
                    <Button onClick={() => {
                        fetchJobDescription()
                    }}>AI Generated Job Description</Button>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6">
                    {
                        jobDescriptions.map((description, index) => (
                            <button key={index} onClick={() => {
                                dispatch(setJobDescription(description))
                            }} className={`${description == jobDescription ? 'bg-white' : 'bg-transparent'} ${description == jobDescription ? 'text-black' : 'text-white'} border-white border-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300`}>
                               {description?.slice(0,36)}
                            </button>
                        ))
                    }
                </div>

                <div className="mt-8 w-[50%]">
                    <textarea value={jobDescription} placeholder="Enter Job Description" className="w-full h-[200px] border-white border-2 text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 focus:outline-none" onChange={(e) => {
                        dispatch(setJobDescription(e.target.value))
                    }} />
                </div>
                {
                    jobTitle && (
                        <Button onClick={() => {
                        }}>Invite Candidate for Interview</Button>
                    )
                }

            </div>

        </div>
    )
}

export default JobDescription