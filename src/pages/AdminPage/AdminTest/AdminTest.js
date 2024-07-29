import React, { useState } from 'react';
import { createClient } from '@vercel/blob';

const AdminTest = () => {
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        const vercelToken = process.env.REACT_APP_VERCEL_TOKEN;
        const client = createClient({ token: vercelToken });

        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = async () => {
            const fileData = reader.result;

            const blob = {
                data: fileData,
                contentType: file.type,
                name: file.name,
            };

            try {
                const response = await client.create(blob);
                setUrl(response.url);
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        };
    };

    return (
        <div>
            <h1>Upload File to Vercel Blob</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {url && (
                <div>
                    <p>File uploaded successfully. URL:</p>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {url}
                    </a>
                </div>
            )}
        </div>
    );
};

export default AdminTest;
