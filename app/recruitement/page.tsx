'use client'
import JobTitle from "../components/Recruitement/JobTitle"
import UploadFile from "../components/Recruitement/UploadFile"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import JobExperience from "../components/Recruitement/JobExperience"    
import JobDescription from "../components/Recruitement/JobDescription"  
const Recruitement = () => {
    const currentStep = useSelector((state: RootState) => state.uiReducer.currentStep)

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <UploadFile />
            case 1:
                return <JobTitle />
            case 2:
                return <JobExperience />
            case 3:
                return <JobDescription />
        }
    }


    return (
        <div>
            {renderStep()}
        </div>
    )
}


export default Recruitement