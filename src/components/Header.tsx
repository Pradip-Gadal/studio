'use client';

import React, { useContext } from "react";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/icons";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { ProfilePictureContext } from "@/app/_app";

export function Header() {
  const { profilePicture, userDetails } = useContext(ProfilePictureContext);

  return (
    <header className="bg-secondary border-b py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          MSC.Physics
        </Link>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-4">
            <Input type="search" placeholder="Search notes..." className="max-w-sm"/>
            <Button>
              <Icons.search className="mr-2"/>
              Search
            </Button>
          </div>
        </div>
        <Link href="/profile">
          <Avatar>
            <AvatarImage className="aspect-square h-full w-full" alt="Profile" src={profilePicture || "https://picsum.photos/50/50"}/>
            <AvatarFallback>{(userDetails.firstName && userDetails.firstName[0].toUpperCase()) || 'NC'}{(userDetails.lastName && userDetails.lastName[0].toUpperCase()) || ''}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
}

