import { setJobExperience } from "@/app/redux/reducers/candidateSlice"
import { RootState } from "@/app/redux/store"
import { useDispatch, useSelector } from "react-redux"
import Button from "../Generics/Button"
import { setCurrentStep } from "@/app/redux/reducers/uiSlice"
import Header from "../Generics/Header"
import { jobExperienceLevels } from "@/app/utils/filter"

const JobExperience = () => {
    const dispatch = useDispatch()
    const jobTitle = useSelector((state: RootState) => state.candidateReducer.jobTitle)
    const currentStep = useSelector((state: RootState) => state.uiReducer.currentStep)
    const jobExperience = useSelector((state: RootState) => state.candidateReducer.jobExperience)

    return (
        <div className="h-screen w-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <Header title={`Select Candidate Job Experience Level for ${jobTitle}`} subTitle="Job experience level is based on the number of years of experience the candidate has." />
                <div className="grid grid-cols-2 gap-4 m-6">
                    {
                        jobExperienceLevels.map((experience, index) => (
                            <div onClick={() => {
                                dispatch(setJobExperience(experience.years))

                            }} key={index} className={`${experience.years == jobExperience ? 'bg-white' : 'bg-transparent'} ${experience.years == jobExperience ? 'text-black' : 'text-white'} flex flex-col items-center justify-center border-white border-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300`}>
                                <p>{experience.years} years</p>
                                <p>{experience.label}</p>
                            </div>

                        ))
                    }
                </div>
                {
                    jobExperience && (
                        <Button onClick={() => {
                            dispatch(setCurrentStep(+currentStep + 1))
                        }}>Next</Button>
                    )
                }

            </div>

        </div>
    )
}

export default JobExperience;