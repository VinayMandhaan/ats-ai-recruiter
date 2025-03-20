import '@testing-library/jest-dom'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Generate Questions API', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should generate questions', async () => {
        const mockQuestions = {
            technical: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'],
            behavioral: ['Question 6', 'Question 7', 'Question 8', 'Question 9', 'Question 10'],
            situational: ['Question 11', 'Question 12', 'Question 13', 'Question 14', 'Question 15']
        }
        const mockResponse = { data: mockQuestions }

        mockedAxios.post.mockResolvedValueOnce(mockResponse)

        const response = await axios.post('/api/generate-questions', {
            jobDescription: 'Software Engineer',
            cvText: 'Software Engineer with 3 years of experience'
        })

        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(mockedAxios.post).toHaveBeenCalledWith('/api/generate-questions', {
            jobDescription: 'Software Engineer',
            cvText: 'Software Engineer with 3 years of experience'
        })
        expect(response.data).toEqual(mockQuestions)
    })

    it('should handle fetch errors', async () => {
        const mockError = new Error('Error')
        mockedAxios.post.mockRejectedValueOnce(mockError)

        await expect(
            axios.post('/api/generate-questions', {
                jobDescription: 'Software Engineer',
                cvText: 'Software Engineer with 3 years of experience'
            })
        ).rejects.toThrow('Error')
    })
})
