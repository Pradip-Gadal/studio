"use client";
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Grid} from "@/components/Grid";
import Link from "next/link";

export default function Home() {
  const semesters = [
    {id: 1, name: "Semester 1", description: "Notes from the first semester."},
    {id: 2, name: "Semester 2", description: "Notes from the second semester."},
    {id: 3, name: "Semester 3", description: "Notes from the third semester."},
    {id: 4, name: "Semester 4", description: "Notes from the fourth semester."},
  ];

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Course Notes</h1>
      <Grid>
        {semesters.map((semester) => (
          <Link href={`/semester/${semester.id}`} key={semester.id}>
            <Card className="hover:shadow-md transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>{semester.name}</CardTitle>
                <CardDescription>{semester.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>Click to view notes.</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Grid>
    </div>
  );
}
