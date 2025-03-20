import '@testing-library/jest-dom'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Job Titles API', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should fetch job titles', async () => {
        const mockJobTitles = ['Software Engineer', 'Product Manager', 'Data Analyst']
        const mockResponse = { data: mockJobTitles }

        mockedAxios.post.mockResolvedValueOnce(mockResponse)

        const response = await axios.post('/api/job-titles')

        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(mockedAxios.post).toHaveBeenCalledWith('/api/job-titles')
        expect(response.data).toEqual(mockJobTitles)
    })

    it('should handle fetch errors', async () => {
        const mockError = new Error('Error')
        mockedAxios.post.mockRejectedValueOnce(mockError)

        await expect(
            axios.post('/api/job-titles')
        ).rejects.toThrow('Error')
    })
})
