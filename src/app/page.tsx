"use client";
import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { Grid } from "@/components/Grid";
import Link from "next/link";

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
      <h1 className="text-3xl font-bold mb-6">MSC.Physics</h1>
      <Grid>
        {semesters.map((semester) => (
          <Card key={semester.id} className="hover:shadow-md transition-shadow flex flex-col h-64 hover:bg-green-100 transform hover:scale-105 transition-transform duration-200">
            <CardHeader>
              <CardTitle>{semester.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-start h-full">
              {semester.subjects.map((subject) => (
                <Link
                  href={`/semester/${semester.id}/${subject.toLowerCase().replace(/ /g, "-")}`}
                  key={subject}
                  className="text-blue-500 hover:underline"
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
