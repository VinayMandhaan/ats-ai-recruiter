'use client'

import Button from "../components/Generics/Button";
import Header from "../components/Generics/Header";


const Interview = () => {
    return (
        <div className="h-screen w-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
                    <div className="text-center py-8">
                        <Header title="Welcome to the Interview" subTitle="This interview will be conducted by AI. You will be asked a series of questions to assess your skills and suitability for the role. You can start the interview by clicking the button below." />

                        <Button
                            onClick={() => {

                            }}
                        >
                            Start Interview
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Interview
