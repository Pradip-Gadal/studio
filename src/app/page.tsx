"use client";
import React, {useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Grid} from "@/components/Grid";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/icons";

export default function Home() {
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

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = () => {
    const results: string[] = [];
    semesters.forEach(semester => {
      semester.subjects.forEach(subject => {
        if (subject.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push(subject);
        }
      });
    });
    setSearchResults(results);
  };

  return (
    <div className="container py-10 px-4">
      {/* Search Bar Section */}
      <div className="w-full flex justify-center items-center mb-4">
        <div className="flex items-center gap-2 w-full max-w-md">
          <Input
            type="search"
            placeholder="Search notes..."
            className="flex-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="flex items-center" onClick={handleSearch}>
            <Icons.search className="mr-2"/>
            Search
          </Button>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">MSC.Physics</h1>

      {searchResults.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result} className="text-lg">
                <Link href={`/semester/${result}`}>{result}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Grid>
        {semesters.map((semester) => (
          <Card key={semester.id} className="hover:bg-accent hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-center">{semester.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center gap-2">
                {semester.subjects.map((subject) => (
                  <Link key={subject} href={`/semester/${subject}`} className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm font-medium hover:bg-secondary/80 shadow-md transition-colors duration-200">
                    {subject}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
