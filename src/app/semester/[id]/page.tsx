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

const mockNotes: Note[] = [
  {id: '1', title: 'Introduction to React', fileType: 'pdf', url: '#'},
  {id: '2', title: 'Advanced JavaScript Concepts', fileType: 'docx', url: '#'},
];

interface Props {
  params: {id: string};
}

export default function SemesterPage({params}: Props) {
  const semesterId = React.use(React.useMemo(() => Promise.resolve(params.id), [params.id]));

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-4">Semester {semesterId} Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockNotes.map(note => (
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
