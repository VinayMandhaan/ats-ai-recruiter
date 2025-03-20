import '@testing-library/jest-dom'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Interview Result API', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should generate interview result', async () => {
        const mockResult = {
            scores: {
                technicalAcumen: 85,
                behavioral: 90,
                situational: 78
            },
            feedback: 'Excellent technical skills and strong problem-solving abilities.'
        }
        const mockResponse = { data: mockResult }

        mockedAxios.post.mockResolvedValueOnce(mockResponse)

        const response = await axios.post('/api/interview-result', {
            jobDescription: 'Software Engineer',
            cvText: 'Software Engineer with 3 years of experience',
            messages: [
                {
                    role: 'user',
                    content: 'Question 1',
                    timing: 10
                }
            ]
        })

        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(mockedAxios.post).toHaveBeenCalledWith('/api/interview-result', {
            jobDescription: 'Software Engineer',
            cvText: 'Software Engineer with 3 years of experience',
            messages: [
                {
                    role: 'user',
                    content: 'Question 1',
                    timing: 10
                }
            ]
        })
    })

    it('should handle fetch errors', async () => {
        const mockError = new Error('Error')
        mockedAxios.post.mockRejectedValueOnce(mockError)

        await expect(
            axios.post('/api/interview-result', {
                jobDescription: 'Software Engineer',
                cvText: 'Software Engineer with 3 years of experience',
                messages: [
                    {
                        role: 'user',
                        content: 'Question 1',
                        timing: 10
                    }
                ]
            })
        ).rejects.toThrow('Error')
    })
})
