'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Icons} from '@/components/icons';
import Link from 'next/link';
import {useParams} from 'next/navigation';

interface Note {
  id: string;
  title: string;
  fileType: string;
  url: string;
}

// Mock data - replace with actual data fetching later
const mockNotes: { [key: string]: Note[] } = {
  "Book1": [
    {id: '9', title: 'Book1 - Note 1', fileType: 'pdf', url: '#'},
    {id: '10', title: 'Book1 - Note 2', fileType: 'docx', url: '#'},
  ],
  "Book2": [
    {id: '11', title: 'Book2 - Note 1', fileType: 'pdf', url: '#'},
    {id: '12', title: 'Book2 - Note 2', fileType: 'docx', url: '#'},
  ],
  "Book3": [
    {id: '13', title: 'Book3 - Note 1', fileType: 'pdf', url: '#'},
    {id: '14', title: 'Book3 - Note 2', fileType: 'docx', url: '#'},
  ],
  "Book4": [
    {id: '15', title: 'Book4 - Note 1', fileType: 'pdf', url: '#'},
    {id: '16', title: 'Book4 - Note 2', fileType: 'docx', url: '#'},
  ],
  "ExperimentA": [
    {id: '17', title: 'ExperimentA - Note 1', fileType: 'pdf', url: '#'},
    {id: '18', title: 'ExperimentA - Note 2', fileType: 'docx', url: '#'},
  ],
  "ExperimentB": [
    {id: '19', title: 'ExperimentB - Note 1', fileType: 'pdf', url: '#'},
    {id: '20', title: 'ExperimentB - Note 2', fileType: 'docx', url: '#'},
  ],
    "Book5": [
    {id: '21', title: 'Book5 - Note 1', fileType: 'pdf', url: '#'},
    {id: '22', title: 'Book5 - Note 2', fileType: 'docx', url: '#'},
  ],
  "Book6": [
    {id: '23', title: 'Book6 - Note 1', fileType: 'pdf', url: '#'},
    {id: '24', title: 'Book6 - Note 2', fileType: 'docx', url: '#'},
  ],
  "Book7": [
    {id: '25', title: 'Book7 - Note 1', fileType: 'pdf', url: '#'},
    {id: '26', title: 'Book7 - Note 2', fileType: 'docx', url: '#'},
  ],
  "Book8": [
    {id: '27', title: 'Book8 - Note 1', fileType: 'pdf', url: '#'},
    {id: '28', title: 'Book8 - Note 2', fileType: 'docx', url: '#'},
  ],
  "ExperimentC": [
    {id: '29', title: 'ExperimentC - Note 1', fileType: 'pdf', url: '#'},
    {id: '30', title: 'ExperimentC - Note 2', fileType: 'docx', url: '#'},
  ],
  "ExperimentD": [
    {id: '31', title: 'ExperimentD - Note 1', fileType: 'pdf', url: '#'},
    {id: '32', title: 'ExperimentD - Note 2', fileType: 'docx', url: '#'},
  ],
      "Book9": [
    {id: '33', title: 'Book9 - Note 1', fileType: 'pdf', url: '#'},
    {id: '34', title: 'Book9 - Note 2', fileType: 'docx', url: '#'},
  ],
  "Book10": [
    {id: '35', title: 'Book10 - Note 1', fileType: 'pdf', url: '#'},
    {id: '36', title: 'Book10 - Note 2', fileType: 'docx', url: '#'},
  ],
  "Book11": [
    {id: '37', title: 'Book11 - Note 1', fileType: 'pdf', url: '#'},
    {id: '38', title: 'Book11 - Note 2', fileType: 'docx', url: '#'},
  ],
  "Book12": [
    {id: '39', title: 'Book12 - Note 1', fileType: 'pdf', url: '#'},
    {id: '40', title: 'Book12 - Note 2', fileType: 'docx', url: '#'},
  ],
  "ExperimentE": [
    {id: '41', title: 'ExperimentE - Note 1', fileType: 'pdf', url: '#'},
    {id: '42', title: 'ExperimentE - Note 2', fileType: 'docx', url: '#'},
  ],
  "ExperimentF": [
    {id: '43', title: 'ExperimentF - Note 1', fileType: 'pdf', url: '#'},
    {id: '44', title: 'ExperimentF - Note 2', fileType: 'docx', url: '#'},
  ],
        "Book13": [
    {id: '45', title: 'Book13 - Note 1', fileType: 'pdf', url: '#'},
    {id: '46', title: 'Book13 - Note 2', fileType: 'docx', url: '#'},
  ],
  "Book14": [
    {id: '47', title: 'Book14 - Note 1', fileType: 'pdf', url: '#'},
    {id: '48', title: 'Book14 - Note 2', fileType: 'docx', url: '#'},
  ],
  "Book15": [
    {id: '49', title: 'Book15 - Note 1', fileType: 'pdf', url: '#'},
    {id: '50', title: 'Book15 - Note 2', fileType: 'docx', url: '#'},
  ],
  "Book16": [
    {id: '51', title: 'Book16 - Note 1', fileType: 'pdf', url: '#'},
    {id: '52', title: 'Book16 - Note 2', fileType: 'docx', url: '#'},
  ],
  "ExperimentG": [
    {id: '53', title: 'ExperimentG - Note 1', fileType: 'pdf', url: '#'},
    {id: '54', title: 'ExperimentG - Note 2', fileType: 'docx', url: '#'},
  ],
  "ExperimentH": [
    {id: '55', title: 'ExperimentH - Note 1', fileType: 'pdf', url: '#'},
    {id: '56', title: 'ExperimentH - Note 2', fileType: 'docx', url: '#'},
  ],
  "1": [
    {id: '1', title: 'Introduction to Physics - Chapter 1', fileType: 'pdf', url: '#'},
    {id: '2', title: 'Advanced Mechanics - Lecture Notes', fileType: 'docx', url: '#'},
  ],
  "2": [
    {id: '3', title: 'Electromagnetism - Problem Set 1', fileType: 'pdf', url: '#'},
    {id: '4', title: 'Thermodynamics - Summary', fileType: 'docx', url: '#'},
  ],
  "3": [
    {id: '5', title: 'Quantum Mechanics - Principles', fileType: 'pdf', url: '#'},
    {id: '6', title: 'Statistical Physics - Assignments', fileType: 'docx', url: '#'},
  ],
  "4": [
    {id: '7', title: 'Nuclear Physics - Concepts', fileType: 'pdf', url: '#'},
    {id: '8', title: 'Particle Physics - Research', fileType: 'docx', url: '#'},
  ],
};

export default function SemesterPage() {
  const params = useParams();
  const { id } = params;
  const notes = mockNotes[id] || [];

  return (
    <div className="container py-10">
      <div>Notes for {id}</div>
      
        {notes.map((note) => (
          <Card key={note.id} className="mb-4">
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>File Type: {note.fileType.toUpperCase()}</p>
              <div className="flex justify-end">
                <Button variant="outline" className="mr-2">
                  View
                </Button>
                <Button>
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      
    </div>
  );
}
