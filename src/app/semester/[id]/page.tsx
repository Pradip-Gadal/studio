'use client';

import React, {useState, useCallback} from 'react';
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
import {ThumbsDown} from "lucide-react";

interface Note {
  id: string;
  title: string;
  fileType: string;
  url: string;
  upvotes: number;
  downvotes: number;
}

// Mock data - replace with actual data fetching later
const mockNotes: { [key: string]: Note[] } = {
  "Book1": [
    {id: '9', title: 'Book1 - Note 1', fileType: 'pdf', url: '#', upvotes: 5, downvotes: 1},
    {id: '10', title: 'Book1 - Note 2', fileType: 'docx', url: '#', upvotes: 2, downvotes: 3},
  ],
  "Book2": [
    {id: '11', title: 'Book2 - Note 1', fileType: 'pdf', url: '#', upvotes: 3, downvotes: 0},
    {id: '12', title: 'Book2 - Note 2', fileType: 'docx', url: '#', upvotes: 1, downvotes: 2},
  ],
  "Book3": [
    {id: '13', title: 'Book3 - Note 1', fileType: 'pdf', url: '#', upvotes: 4, downvotes: 1},
    {id: '14', title: 'Book3 - Note 2', fileType: 'docx', url: '#', upvotes: 0, downvotes: 0},
  ],
  "Book4": [
    {id: '15', title: 'Book4 - Note 1', fileType: 'pdf', url: '#', upvotes: 2, downvotes: 0},
    {id: '16', title: 'Book4 - Note 2', fileType: 'docx', url: '#', upvotes: 1, downvotes: 1},
  ],
  "ExperimentA": [
    {id: '17', title: 'ExperimentA - Note 1', fileType: 'pdf', url: '#', upvotes: 0, downvotes: 1},
    {id: '18', title: 'ExperimentA - Note 2', fileType: 'docx', url: '#', upvotes: 1, downvotes: 0},
  ],
  "ExperimentB": [
    {id: '19', title: 'ExperimentB - Note 1', fileType: 'pdf', url: '#', upvotes: 5, downvotes: 2},
    {id: '20', title: 'ExperimentB - Note 2', fileType: 'docx', url: '#', upvotes: 2, downvotes: 2},
  ],
    "Book5": [
    {id: '21', title: 'Book5 - Note 1', fileType: 'pdf', url: '#', upvotes: 1, downvotes: 1},
    {id: '22', title: 'Book5 - Note 2', fileType: 'docx', url: '#', upvotes: 0, downvotes: 2},
  ],
  "Book6": [
    {id: '23', title: 'Book6 - Note 1', fileType: 'pdf', url: '#', upvotes: 2, downvotes: 1},
    {id: '24', title: 'Book6 - Note 2', fileType: 'docx', url: '#', upvotes: 3, downvotes: 0},
  ],
  "Book7": [
    {id: '25', title: 'Book7 - Note 1', fileType: 'pdf', url: '#', upvotes: 0, downvotes: 0},
    {id: '26', title: 'Book7 - Note 2', fileType: 'docx', url: '#', upvotes: 1, downvotes: 3},
  ],
  "Book8": [
    {id: '27', title: 'Book8 - Note 1', fileType: 'pdf', url: '#', upvotes: 4, downvotes: 2},
    {id: '28', title: 'Book8 - Note 2', fileType: 'docx', url: '#', upvotes: 2, downvotes: 1},
  ],
  "ExperimentC": [
    {id: '29', title: 'ExperimentC - Note 1', fileType: 'pdf', url: '#', upvotes: 1, downvotes: 0},
    {id: '30', title: 'ExperimentC - Note 2', fileType: 'docx', url: '#', upvotes: 0, downvotes: 0},
  ],
  "ExperimentD": [
    {id: '31', title: 'ExperimentD - Note 1', fileType: 'pdf', url: '#', upvotes: 3, downvotes: 1},
    {id: '32', title: 'ExperimentD - Note 2', fileType: 'docx', url: '#', upvotes: 2, downvotes: 3},
  ],
      "Book9": [
    {id: '33', title: 'Book9 - Note 1', fileType: 'pdf', url: '#', upvotes: 1, downvotes: 2},
    {id: '34', title: 'Book9 - Note 2', fileType: 'docx', url: '#', upvotes: 0, downvotes: 1},
  ],
  "Book10": [
    {id: '35', title: 'Book10 - Note 1', fileType: 'pdf', url: '#', upvotes: 2, downvotes: 0},
    {id: '36', title: 'Book10 - Note 2', fileType: 'docx', url: '#', upvotes: 3, downvotes: 2},
  ],
  "Book11": [
    {id: '37', title: 'Book11 - Note 1', fileType: 'pdf', url: '#', upvotes: 1, downvotes: 1},
    {id: '38', title: 'Book11 - Note 2', fileType: 'docx', url: '#', upvotes: 0, downvotes: 0},
  ],
  "Book12": [
    {id: '39', title: 'Book12 - Note 1', fileType: 'pdf', url: '#', upvotes: 4, downvotes: 1},
    {id: '40', title: 'Book12 - Note 2', fileType: 'docx', url: '#', upvotes: 2, downvotes: 2},
  ],
  "ExperimentE": [
    {id: '41', title: 'ExperimentE - Note 1', fileType: 'pdf', url: '#', upvotes: 0, downvotes: 2},
    {id: '42', title: 'ExperimentE - Note 2', fileType: 'docx', url: '#', upvotes: 1, downvotes: 1},
  ],
  "ExperimentF": [
    {id: '43', title: 'ExperimentF - Note 1', fileType: 'pdf', url: '#', upvotes: 2, downvotes: 0},
    {id: '44', title: 'ExperimentF - Note 2', fileType: 'docx', url: '#', upvotes: 3, downvotes: 1},
  ],
        "Book13": [
    {id: '45', title: 'Book13 - Note 1', fileType: 'pdf', url: '#', upvotes: 1, downvotes: 0},
    {id: '46', title: 'Book13 - Note 2', fileType: 'docx', url: '#', upvotes: 0, downvotes: 0},
  ],
  "Book14": [
    {id: '47', title: 'Book14 - Note 1', fileType: 'pdf', url: '#', upvotes: 2, downvotes: 1},
    {id: '48', title: 'Book14 - Note 2', fileType: 'docx', url: '#', upvotes: 3, downvotes: 2},
  ],
  "Book15": [
    {id: '49', title: 'Book15 - Note 1', fileType: 'pdf', url: '#', upvotes: 0, downvotes: 1},
    {id: '50', title: 'Book15 - Note 2', fileType: 'docx', url: '#', upvotes: 1, downvotes: 0},
  ],
  "Book16": [
    {id: '51', title: 'Book16 - Note 1', fileType: 'pdf', url: '#', upvotes: 5, downvotes: 2},
    {id: '52', title: 'Book16 - Note 2', fileType: 'docx', url: '#', upvotes: 2, downvotes: 2},
  ],
  "ExperimentG": [
    {id: '53', title: 'ExperimentG - Note 1', fileType: 'pdf', url: '#', upvotes: 3, downvotes: 0},
    {id: '54', title: 'ExperimentG - Note 2', fileType: 'docx', url: '#', upvotes: 1, downvotes: 3},
  ],
  "ExperimentH": [
    {id: '55', title: 'ExperimentH - Note 1', fileType: 'pdf', url: '#', upvotes: 2, downvotes: 1},
    {id: '56', title: 'ExperimentH - Note 2', fileType: 'docx', url: '#', upvotes: 0, downvotes: 0},
  ],
  "1": [
    {id: '1', title: 'Introduction to Physics - Chapter 1', fileType: 'pdf', url: '#', upvotes: 10, downvotes: 2},
    {id: '2', title: 'Advanced Mechanics - Lecture Notes', fileType: 'docx', url: '#', upvotes: 5, downvotes: 1},
  ],
  "2": [
    {id: '3', title: 'Electromagnetism - Problem Set 1', fileType: 'pdf', url: '#', upvotes: 7, downvotes: 3},
    {id: '4', title: 'Thermodynamics - Summary', fileType: 'docx', url: '#', upvotes: 3, downvotes: 0},
  ],
  "3": [
    {id: '5', title: 'Quantum Mechanics - Principles', fileType: 'pdf', url: '#', upvotes: 8, downvotes: 1},
    {id: '6', title: 'Statistical Physics - Assignments', fileType: 'docx', url: '#', upvotes: 4, downvotes: 2},
  ],
  "4": [
    {id: '7', title: 'Nuclear Physics - Concepts', fileType: 'pdf', url: '#', upvotes: 6, downvotes: 0},
    {id: '8', title: 'Particle Physics - Research', fileType: 'docx', url: '#', upvotes: 2, downvotes: 4},
  ],
};

interface Props {
  params: { id: string };
}

export default function SemesterPage({ params }: Props) {
  const id = useParams().id;
  const [notes, setNotes] = useState<Note[]>([...mockNotes[id] || []]);

  const handleUpvote = useCallback((noteId: string) => {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if (note.id === noteId) {
          return {...note, upvotes: note.upvotes + 1};
        }
        return note;
      });
    });
  }, []);

  const handleDownvote = useCallback((noteId: string) => {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if (note.id === noteId) {
          return {...note, downvotes: note.downvotes + 1};
        }
        return note;
      });
    });
  }, []);

  const sortedNotes = React.useMemo(() => {
    return [...notes].sort((a, b) => b.upvotes - a.upvotes);
  }, [notes]);

  return (
    <div className="container py-10">
      <div>Notes for {id}</div>
      
        {sortedNotes.map((note) => (
          <Card key={note.id} className="mb-4">
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>File Type: {note.fileType.toUpperCase()}</p>
              <div className="flex justify-between items-center">
                <div>
                  <Button variant="outline" className="mr-2">
                    View
                  </Button>
                  <Button>
                    Download
                  </Button>
                </div>
                <div className="flex items-center">
                  <Button variant="ghost" size="icon" onClick={() => handleUpvote(note.id)}>
                    <Icons.heart className="h-4 w-4 mr-1" />
                    {note.upvotes}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDownvote(note.id)}>
                    <ThumbsDown className="h-4 w-4 mr-1" />
                    {note.downvotes}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      
    </div>
  );
}
