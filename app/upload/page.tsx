'use client'

import axios from "axios"

const Upload = () => {

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const formData = new FormData()
            formData.append('file', file);
            await axios.post('/api/upload-cv', formData)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.error('Error', error)
                })
        }
    }



    return (
        <div>
            <h1>Upload</h1>
            <input type="file" onChange={handleFileChange} />
        </div>
    )
}


export default Upload