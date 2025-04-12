'use client';

import React, { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { ProfilePictureContext } from '@/app/_app';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile"; // Import the hook
import { cn } from "@/lib/utils"; // Import cn utility

export default function ProfilePage() {
  const { profilePicture, setProfilePicture, userDetails } = useContext(ProfilePictureContext);
  const isMobile = useIsMobile(); // Use the hook

  const fullName = userDetails.firstName ? `${userDetails.firstName} ${userDetails.lastName || ""}` : "No Name";

  const description = userDetails.university
    ? `${userDetails.course || "No Course"} at ${userDetails.university}`
    : "No University Details";

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
      // TODO: Save the imageUrl to local storage or backend here if desired
    }
  };

  // TODO: Add useEffect hook here to load profile picture from local storage or backend on initial render

  // Determine the source for the AvatarImage
  const avatarSrc = profilePicture || userDetails.profilePicture || "https://via.placeholder.com/100";

  return (
    // Apply conditional padding based on screen size
    <div className={cn("container", isMobile ? "py-4" : "py-10")}>
      <div className="flex flex-col items-center">
        <div className="relative">
          <Avatar className={cn("", isMobile ? "h-16 w-16" : "h-24 w-24")}>
            <AvatarImage className="aspect-square h-full w-full" alt="Profile" src={avatarSrc}/>
            <AvatarFallback>{(userDetails.firstName && userDetails.firstName[0].toUpperCase()) || 'N'}{(userDetails.lastName && userDetails.lastName[0].toUpperCase()) || ''}</AvatarFallback>
          </Avatar>
          <label htmlFor="image-upload">
            <Button size="icon" className={cn("absolute bottom-0 right-0 rounded-full shadow-md", isMobile ? "h-6 w-6" :"h-4 w-4")} >
              <Icons.edit className={cn("", isMobile ? "h-3 w-3" : "h-4 w-4")} />
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
          <h1 className={cn("text-2xl font-bold mt-4", isMobile ? "text-xl" : "")}>{fullName}</h1>
          <p className={cn("text-sm text-muted-foreground", isMobile ? "text-xs" : "")}>{description}</p>
        </Link>
      </div>

      {/* Apply conditional margin based on screen size */}
      <div className={cn("space-y-4", isMobile ? "mt-6" : "mt-8")}>
        <Link href="/profile/details" className="flex items-center justify-between p-4 rounded-md hover:bg-secondary">
          <div className="flex items-center space-x-3">
            <Icons.user className="h-5 w-5 text-muted-foreground"/> 
            <span>User Details</span>
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

        <Link href="/" className={cn("w-full flex items-center justify-center p-4 rounded-md hover:bg-secondary", isMobile ? "mt-6" : "mt-8")}>Logout</Link>
      </div>
    </div>
  );
}
