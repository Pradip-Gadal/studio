import React from "react";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/icons";

export function Header() {
  return (
    <header className="bg-secondary border-b py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          CourseNotes
        </Link>
        <div className="flex items-center gap-4">
          <Input type="search" placeholder="Search notes..." className="max-w-sm"/>
          <Button>
            <Icons.search className="mr-2"/>
            Search
          </Button>
        </div>
      </div>
    </header>
  );
}

