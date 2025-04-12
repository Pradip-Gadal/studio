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
    <div className="container py-10">
       <Link href="/profile/settings" className="flex items-center space-x-2 mb-4">
        <Icons.arrowRight className="h-5 w-5 rotate-180 text-muted-foreground" />
        <span className="text-sm font-medium">Back to Settings</span>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Trash Bin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockNotes.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span>File Type: {note.fileType.toUpperCase()}</span>
              <div>
                <Link href={note.url}>
                  <Button variant="outline" size="sm">
                    Restore
                  </Button>
                </Link>
                <Link href={note.url}>
                  <Button size="sm" className="ml-2">
                    Delete Permanently
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

    