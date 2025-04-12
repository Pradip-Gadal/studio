'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUpload = () => {
    if (selectedFile && selectedSemester) {
      // Implement your upload logic here, including the selected semester
      console.log('Uploading file:', selectedFile, 'to semester:', selectedSemester);
    } else {
      alert('Please select a file and a semester to upload.');
    }
  };

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-4">Upload Files</h1>
      <div className="space-y-4">
        <div>
          <Select onValueChange={setSelectedSemester}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Semester 1</SelectItem>
              <SelectItem value="2">Semester 2</SelectItem>
              <SelectItem value="3">Semester 3</SelectItem>
              <SelectItem value="4">Semester 4</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Input type="file" onChange={handleFileChange} />
        </div>
        <Button onClick={handleUpload} disabled={!selectedFile || !selectedSemester}>
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
