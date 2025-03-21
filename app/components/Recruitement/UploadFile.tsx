'use client'

import axios from "axios"
import { useRef, useState } from "react"
import Button from "../Generics/Button"
import { setCandidateSummary } from "@/app/redux/reducers/candidateSlice"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentStep } from "@/app/redux/reducers/uiSlice"
import { RootState } from "@/app/redux/store"
import { toast } from "react-toastify"

const UploadFile = () => {
    const dispatch = useDispatch()
    const currentStep = useSelector((state: RootState) => state.uiReducer.currentStep)
    const [isLoading, setIsLoading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true)
        const file = e.target.files?.[0]
        if (file) {
            const formData = new FormData()
            formData.append('file', file);
            await axios.post('/api/upload-cv', formData)
                .then(response => {
                    console.log(response.data)
                    dispatch(setCandidateSummary(response.data.text))
                    dispatch(setCurrentStep(+currentStep + 1))  
                    setIsLoading(false)

                })
                .catch(error => {
                    console.error('Error', error)
                    setIsLoading(false)
                    toast.error('Error uploading file')

                })
        }
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen w-full p-4">
                <div className="flex flex-col items-center justify-center p-16 rounded-lg shadow-md">
                    <h3 className="text-gray-400 text-4xl font-bold">Generating Profile...</h3>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full p-4">
            <div className="flex flex-col items-center justify-center p-16 rounded-lg shadow-md">
                <h3 className="text-white text-4xl font-bold">Upload Resume</h3>
                <div className="w-full flex flex-col items-center justify-center mt-4 rounded-lg text-white">
                    <p className="text-center text-gray-400">Upload your resume to get started. We will use our AI to extract the information and create a profile for you.</p>
                    <div className="w-full flex items-center justify-center">
                        <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileChange} />
                        <Button onClick={() => fileInputRef.current?.click()}>Upload</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UploadFile