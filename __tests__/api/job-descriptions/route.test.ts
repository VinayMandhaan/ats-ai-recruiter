import '@testing-library/jest-dom'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Job Descriptions API', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should fetch job descriptions', async () => {
        const mockJobDescriptions = ['Software Engineer', 'Product Manager', 'Data Analyst']
        const mockResponse = { data: mockJobDescriptions }

        mockedAxios.post.mockResolvedValueOnce(mockResponse)

        const response = await axios.post('/api/job-descriptions', {
            jobTitle: 'Software Engineer'
        })

        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(mockedAxios.post).toHaveBeenCalledWith('/api/job-descriptions', {
            jobTitle: 'Software Engineer'
        })
        expect(response.data).toEqual(mockJobDescriptions)
    })

    it('should handle fetch errors', async () => {
        const mockError = new Error('Error')
        mockedAxios.post.mockRejectedValueOnce(mockError)

        await expect(
            axios.post('/api/job-descriptions', {
                jobTitle: 'Software Engineer'
            })
        ).rejects.toThrow('Error')
    })
})
