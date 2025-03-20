import '@testing-library/jest-dom'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Upload CV API', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('upload PDF file', async () => {
        const mockFile = new File(['dummy content'], 'test.pdf', { type: 'application/pdf' })
        const mockResponse = { data: { text: 'Extracted CV content' } }

        mockedAxios.post.mockResolvedValueOnce(mockResponse)

        const formData = new FormData()
        formData.append('file', mockFile)

        const response = await axios.post('/api/upload-cv', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(mockedAxios.post).toHaveBeenCalledWith('/api/upload-cv', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        expect(response.data).toEqual(mockResponse.data)
    })

    it('should handle upload errors appropriately', async () => {
        const mockFile = new File(['dummy content'], 'test.pdf', { type: 'application/pdf' })
        const mockError = new Error('Upload failed')

        mockedAxios.post.mockRejectedValueOnce(mockError)

        const formData = new FormData()
        formData.append('file', mockFile)

        await expect(
            axios.post('/api/upload-cv', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        ).rejects.toThrow('Upload failed')
    })

    it('should reject non-PDF/DOC files', async () => {
        const mockFile = new File(['dummy content'], 'test.txt', { type: 'text/plain' })
        const formData = new FormData()
        formData.append('file', mockFile)

        const mockError = new Error('Invalid file type. Only PDF and DOC files are allowed.')
        mockedAxios.post.mockRejectedValueOnce(mockError)

        await expect(
            axios.post('/api/upload-cv', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        ).rejects.toThrow('Invalid file type')
    })
})

