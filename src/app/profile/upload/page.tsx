'use client';

import React, { useState, useMemo, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {ProfilePictureContext} from "@/app/_app";

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<string>('');
  const [selectedBook, setSelectedBook] = useState<string>('');

  const { userDetails } = useContext(ProfilePictureContext);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUpload = () => {
    if (selectedFile && selectedSemester && selectedBook) {
      // Implement your upload logic here, including the selected semester and book
      console.log('Uploading file:', selectedFile, 'to semester:', selectedSemester, 'for book:', selectedBook);
    } else {
      alert('Please select a file, a semester, and a book to upload.');
    }
  };

    // Extract subjects from userDetails or default to empty array if userDetails is undefined
    const semesters = [
      {
        id: 1,
        name: "Semester 1",
        subjects: ["Book1", "Book2", "Book3", "Book4", "ExperimentA", "ExperimentB"],
      },
      {
        id: 2,
        name: "Semester 2",
        subjects: ["Book5", "Book6", "Book7", "Book8", "ExperimentC", "ExperimentD"],
      },
      {
        id: 3,
        name: "Semester 3",
        subjects: ["Book9", "Book10", "Book11", "Book12", "ExperimentE", "ExperimentF"],
      },
      {
        id: 4,
        name: "Semester 4",
        subjects: ["Book13", "Book14", "Book15", "Book16", "ExperimentG", "ExperimentH"],
      },
    ];

  const courseMaps = {
    "1": ["Book1", "Book2", "Book3", "Book4", "ExperimentA", "ExperimentB"],
    "2": ["Book5", "Book6", "Book7", "Book8", "ExperimentC", "ExperimentD"],
    "3": ["Book9", "Book10", "Book11", "Book12", "ExperimentE", "ExperimentF"],
    "4": ["Book13", "Book14", "Book15", "Book16", "ExperimentG", "ExperimentH"],
  };

  const bookOptions = useMemo(() => {
    return courseMaps[selectedSemester] || [];
  }, [selectedSemester]);

  return (
    
      
        Upload Files
      
      
        
          
            
              Select Semester
            
            
              {semesters.map((semester) => (
                
                  {semester.name}
                
              ))}
            
          
        

        {selectedSemester && (
          
            
              
                Select Book
              
              
                {bookOptions.map((book) => (
                  
                    {book}
                  
                ))}
              
            
          
        )}

        
          
        
        
          Upload File
        
        {selectedFile && (
          
            Selected file: {selectedFile.name}
          
        )}
      
    
  );
}
