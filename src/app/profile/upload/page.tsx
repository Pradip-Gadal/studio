'use client';

import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Implement your upload logic here
      console.log('Uploading file:', selectedFile);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-4">Upload Files</h1>
      <div className="space-y-4">
        <div>
          <Input type="file" onChange={handleFileChange} />
        </div>
        <Button onClick={handleUpload} disabled={!selectedFile}>
          Upload File
        </Button>
        {selectedFile && (
          <p className="text-sm text-muted-foreground">
            Selected file: {selectedFile.name}
          </p>
        )}
      </div>
    </div>
  );
}
