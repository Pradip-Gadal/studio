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
    <div className="container py-10 px-4"> {/* Add px-4 for left and right padding */}
      {/* Search Bar Section */}
      <div className="w-full flex justify-center items-center mb-4">
        <div className="flex items-center gap-2 w-full max-w-md">
          <Input type="search" placeholder="Search notes..." className="flex-1" />
          <Button className="flex items-center">
            <Icons.search className="mr-2" />
            Search
          </Button>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">MSC.Physics</h1>

      <Grid>
        {semesters.map((semester) => (
            
              
                
                  {semester.name}
                
                
                  {semester.subjects.map((subject) => (
                      
                        {subject}
                      
                  ))}
                
              
            
        ))}
      </Grid>
    </div>
  );
}

