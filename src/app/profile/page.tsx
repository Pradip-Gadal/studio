'use client';

import React, { useContext } from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Icons} from "@/components/icons";
import Link from "next/link";
import { ProfilePictureContext } from '@/app/_app';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function ProfilePage() {
  const { profilePicture, setProfilePicture, userDetails } = useContext(ProfilePictureContext);

  const fullName = userDetails.firstName ? `${userDetails.firstName} ${userDetails.lastName || ""}` : "No Name";

  const description = userDetails.university
    ? `${userDetails.course || "No Course"} at ${userDetails.university}`
    : "No University Details";

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    }
  };

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center">
        <div className="relative">
          <Avatar className="h-24 w-24">
            <AvatarImage className="aspect-square h-full w-full" alt="Profile" src={profilePicture || "https://picsum.photos/100/100"}/>
            <AvatarFallback>{(userDetails.firstName && userDetails.firstName[0].toUpperCase()) || 'NC'}{(userDetails.lastName && userDetails.lastName[0].toUpperCase()) || ''}</AvatarFallback>
          </Avatar>
          <label htmlFor="image-upload">
            <Button size="icon" className="absolute bottom-0 right-0 rounded-full shadow-md" >
              <Icons.edit className="h-4 w-4" />
            </Button>
          </label>
          <Input
              type="file"
              id="image-upload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
          />
        </div>
            <Link href="/profile/details" className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mt-4">{fullName}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
            </Link>
      </div>

      <div className="mt-8 space-y-4">
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

        <Link href="/" className="w-full mt-8 flex items-center justify-center p-4 rounded-md hover:bg-secondary">Logout</Link>
      </div>
    </div>
  );
}
