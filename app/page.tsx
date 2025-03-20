'use client'
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <div className="bg-black bg-[radial-gradient(circle,_rgba(0,0,0,1)_0%,_rgba(0,0,0,1)_52%,_rgba(47,47,47,1)_98%)] h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 relative h-full w-full flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold text-center">
          Welcome to AI Recruiter
        </h1>
        <p className="text-white text-center text-lg">
          The AI-powered platform for finding the perfect candidate for your
          job.
        </p>
        <div className="flex flex-col gap-4">
          <button onClick={() => router.push("/recruitement")} className="bg-white text-black px-4 py-2 rounded-md font-semibold cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
