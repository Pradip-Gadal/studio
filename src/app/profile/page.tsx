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
    
      
        
          
            
              
              {(userDetails.lastName && userDetails.lastName[0].toUpperCase()) || ''}
            
          
          
            
              
            
          
        
        
          
            
            
          
        
      

      {/* Apply conditional margin based on screen size */}
      
        
          
            
            User Details
          
          
        
        
          
            
            Upload Files
          
          
        
        
          
            
            Uploaded Files
          
          
        
        
          
            
            Settings
          
          
        
        Logout
      
    
  );
}
