'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/icons";
import Link from "next/link";

interface Note {
  id: string;
  title: string;
  fileType: string;
  url: string;
}

const mockNotes: Note[] = [
  {id: "1", title: "Deleted Introduction to React", fileType: "pdf", url: "#"},
  {id: "2", title: "Deleted Advanced JavaScript Concepts", fileType: "docx", url: "#"},
];

export default function TrashBinPage() {
  return (
    
       
        
          Back to Settings
        
      
      
        Trash Bin
      
      
        {mockNotes.map((note) => (
          
            
              
            
            
              
                File Type: {note.fileType.toUpperCase()}
                
                  
                    Restore
                  
                
                
                  
                    Delete Permanently
                  
                
              
            
          
        ))}
      
    
  );
}

    
