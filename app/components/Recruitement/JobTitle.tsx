'use client'
import { setJobTitle } from "@/app/redux/reducers/candidateSlice"
import { RootState } from "@/app/redux/store"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../Generics/Button"
import Header from "../Generics/Header"
import { setCurrentStep } from "@/app/redux/reducers/uiSlice"

const JobTitle = () => {
    const dispatch = useDispatch()
    const jobTitle = useSelector((state: RootState) => state.candidateReducer.jobTitle)
    const currentStep = useSelector((state: RootState) => state.uiReducer.currentStep)
    const candidateSummary = useSelector((state: RootState) => state.candidateReducer.candidateSummary)
    const [displayCustomJobTitle, setDisplayCustomJobTitle] = useState(false)
    const [jobTitles, setJobTitles] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchJobTitles()
    }, [])

    const fetchJobTitles = async () => {
        try {
            setIsLoading(true)
            await axios.post('/api/job-titles', { cvText: candidateSummary }).then(response => {
                setJobTitles(response.data.jobTitles)
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
                    <h3 className="text-gray-400 text-4xl font-bold">Generating Job Titles...</h3>
                </div>
            </div>
        )
    }

    return (
        <div className="h-screen w-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <Header title="Select Candidate Job Title" subTitle="These job titles are fetched from our state of the art AI model." />
                <div className="grid grid-cols-2 gap-4 m-6">
                    {
                        jobTitles.map((title, index) => (
                            <button onClick={() => {
                                dispatch(setJobTitle(title))
                            }} key={index} className={`${title == jobTitle ? 'bg-white' : 'bg-transparent'} ${title == jobTitle ? 'text-black' : 'text-white'} border-white border-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300`}>{title}</button>
                        ))
                    }
                    <button onClick={() => {
                        setDisplayCustomJobTitle(!displayCustomJobTitle)
                        dispatch(setJobTitle(''))
                    }} className="border-white border-2 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300">Custom Job Title </button>
                    {displayCustomJobTitle && (
                        <input type="text" placeholder="Enter Job Title" className="border-white border-2 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 focus:outline-none" onChange={(e) => {
                            dispatch(setJobTitle(e.target.value))
                        }} />
                    )}
                </div>
                {
                    jobTitle && (
                        <Button onClick={() => {
                            dispatch(setCurrentStep(+currentStep + 1))
                        }}>Next</Button>
                    )
                }

            </div>

        </div>
    )
}

export default JobTitle