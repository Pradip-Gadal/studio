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

interface Note {
  id: string;
  title: string;
  fileType: string;
  url: string;
}

// Mock data - replace with actual data fetching later
const mockNotes: { [key: string]: Note[] } = {
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
};

interface Props {
  params: { id: string; };
}

export default function SemesterPage({ params }: Props) {
  const { id } = params;
  const notes = mockNotes[id] || [];

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-4">Notes for {id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span>File Type: {note.fileType.toUpperCase()}</span>
              <div>
                <Link href={note.url}>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </Link>
                <Link href={note.url}>
                  <Button size="sm" className="ml-2">
                    Download
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
