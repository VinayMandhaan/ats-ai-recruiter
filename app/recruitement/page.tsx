'use client'
import JobTitle from "../components/Recruitement/JobTitle"
import UploadFile from "../components/Recruitement/UploadFile"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"


const Recruitement = () => {
    const currentStep = useSelector((state: RootState) => state.uiReducer.currentStep)

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <UploadFile />
            case 1:
                return <JobTitle />
                break;
        }
    }


    return (
        <div>
            {renderStep()}
        </div>
    )
}


export default Recruitement