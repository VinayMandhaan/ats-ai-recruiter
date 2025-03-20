import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import InterviewResult from '../../../app/components/Interview/InterviewResult'
import { Providers } from '@/app/redux/provider';

jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }
  }));

describe('InterviewResult', () => {
    const mockResult = {
        overallScore: 85,
        summary: 'Great performance overall',
        recommendation: 'Recommended for hire',
        scores: {
            technicalAcumen: {
                score: 90,
                explanation: 'Excellent technical skills',
                strengths: ['Strong problem solving', 'Deep technical knowledge'],
                areasForImprovement: ['Could improve system design skills']
            },
            communicationSkills: {
                score: 80,
                explanation: 'Good communication',
                strengths: ['Clear explanations', 'Structured responses'],
                areasForImprovement: ['Could be more concise']
            },
            timingMetrics: {
                averageResponseTime: 10.5,
                minResponseTime: 5.0,
                maxResponseTime: 15.0
            },
            strengths: ['Strong problem solving', 'Deep technical knowledge'],
            areasForImprovement: ['Could improve system design skills']
        }
    }

    it('renders interview result correctly', () => {
        render(
            <Providers>
                <InterviewResult result={mockResult} />
            </Providers>
        )

        expect(screen.getByText('85%')).toBeInTheDocument()
        expect(screen.getByText('Great performance overall')).toBeInTheDocument()
        expect(screen.getByText('Recommended for hire')).toBeInTheDocument()
        expect(screen.getByText('90%')).toBeInTheDocument()
        expect(screen.getByText('80%')).toBeInTheDocument()
        expect(screen.getByText('Strong problem solving')).toBeInTheDocument()
        expect(screen.getByText('Clear explanations')).toBeInTheDocument()
    })
})
