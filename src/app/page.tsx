"use client";
import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { Grid } from "@/components/Grid";
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

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">MSC.Physics</h1>
        <div className="flex items-center gap-2">
          <Input type="search" placeholder="Search notes..." className="max-w-sm" />
          <Button className="flex items-center">
            <Icons.search className="mr-2" />
            Search
          </Button>
        </div>
      </div>
      <Grid>
        {semesters.map((semester) => (
          <Card key={semester.id} className="hover:shadow-md transition-shadow flex flex-col h-80 hover:bg-green-100 transform hover:scale-105 transition-transform duration-200">
            <CardHeader>
              <CardTitle>{semester.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center items-start h-full">
              {semester.subjects.map((subject) => (
                <Link
                  href={`/semester/${subject}`}
                  key={subject}
                  className="m-1 px-4 py-2 rounded-full bg-secondary text-primary hover:bg-accent hover:text-accent-foreground shadow-md transition-colors duration-200 border border-gray-300"
                >
                  {subject}
                </Link>
              ))}
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
