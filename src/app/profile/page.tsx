"use client";

import React, { useState, useContext, useCallback } from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/icons";
import Link from "next/link";
import { ProfilePictureContext } from '@/app/_app';

export default function ProfilePage() {
  const { profilePicture, userDetails } = useContext(ProfilePictureContext);
  // This would normally be fetched from an API
  const [localUserDetails, setUserDetails] = useState({
    name: "Nisha Chaudhary",
    major: "Engineering Student",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut platea.",
  });

  const fullName = userDetails.firstName ? `${userDetails.firstName} ${userDetails.lastName || ''}` : localUserDetails.name;

  const description = userDetails.university
    ? `${userDetails.course || localUserDetails.major} at ${userDetails.university}`
    : localUserDetails.major;

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center">
        <div className="relative">
          <Avatar className="h-24 w-24">
            <AvatarImage className="aspect-square h-full w-full" alt="Profile" src={profilePicture || "https://picsum.photos/100/100"}/>
            <AvatarFallback>{(userDetails.firstName && userDetails.firstName[0].toUpperCase()) || 'NC'}{(userDetails.lastName && userDetails.lastName[0].toUpperCase()) || ''}</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-2xl font-bold mt-4">{fullName}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-sm text-muted-foreground text-center mt-2">
          {localUserDetails.bio}
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <Link href="/profile/details" className="flex items-center justify-between p-4 rounded-md hover:bg-secondary">
          <div className="flex items-center space-x-3">
            <Icons.user className="h-5 w-5 text-muted-foreground"/>
            <span>Profile Details</span>
          </div>
          <Icons.arrowRight className="h-4 w-4 text-muted-foreground"/>
        </Link>

        <Link href="/profile/upload" className="flex items-center justify-between p-4 rounded-md hover:bg-secondary">
          <div className="flex items-center space-x-3">
            <Icons.file className="h-5 w-5 text-muted-foreground"/>
            <span>Upload Files</span>
          </div>
          <Icons.arrowRight className="h-4 w-4 text-muted-foreground"/>
        </Link>

        <Link href="/profile/uploaded-files" className="flex items-center justify-between p-4 rounded-md hover:bg-secondary">
          <div className="flex items-center space-x-3">
            <Icons.heart className="h-5 w-5 text-muted-foreground"/>
            <span>Uploaded Files</span>
          </div>
          <Icons.arrowRight className="h-4 w-4 text-muted-foreground"/>
        </Link>

        <Link href="/profile/settings" className="flex items-center justify-between p-4 rounded-md hover:bg-secondary">
          <div className="flex items-center space-x-3">
            <Icons.settings className="h-5 w-5 text-muted-foreground"/>
            <span>Settings</span>
          </div>
          <Icons.arrowRight className="h-4 w-4 text-muted-foreground"/>
        </Link>

        <Button className="w-full mt-8">Logout</Button>
      </div>
    </div>
  );
}
