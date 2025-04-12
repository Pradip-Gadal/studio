'use client';

import React, { useState, useContext } from 'react';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Button} from '@/components/ui/button';
import {Icons} from '@/components/icons';
import {Input} from '@/components/ui/input';
import {cn} from '@/lib/utils';
import { ProfilePictureContext } from '@/app/_app';
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation';
import {Textarea} from "@/components/ui/textarea";

export default function ProfileDetailsPage() {
  const { profilePicture, setProfilePicture, userDetails, setUserDetails } = useContext(ProfilePictureContext);
  const [firstName, setFirstName] = useState(userDetails.firstName || '');
  const [lastName, setLastName] = useState(userDetails.lastName || '');
  const [university, setUniversity] = useState(userDetails.university || '');
  const [course, setCourse] = useState(userDetails.course || '');
  const [yearSemester, setYearSemester] = useState(userDetails.yearSemester || '');
  const { toast } = useToast();
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
      // TODO: Save the imageUrl to local storage or backend here if desired
    }
  };

  const handleUpdate = () => {
    setUserDetails({
      ...userDetails, // Preserve existing details like profilePicture
      firstName: firstName,
      lastName: lastName,
      university: university,
      course: course,
      yearSemester: yearSemester,
    });

    // TODO: Persist updated userDetails (including potentially profilePicture from context state) to backend/local storage

    toast({
      title: "Profile Updated!",
      description: "Your profile has been updated successfully.",
    });
    router.push('/profile');
  };

  // Determine the source for the AvatarImage
  const avatarSrc = profilePicture || userDetails.profilePicture || "https://via.placeholder.com/100";

  return (
    
      
        {/* Avatar with Edit Button */}
        
          
            {/* Updated src logic: profilePicture &gt; userDetails.profilePicture &gt; placeholder */}
            
              {(firstName && firstName[0].toUpperCase()) || 'N'}{(lastName && lastName[0].toUpperCase()) || ''}
            
          
          
            
          
          
            
              
            
          
        

        {/* Form Inputs */}
        
          
            
              
              
            
          
          
            
          
          
            
          
          
            
          

          {/* Update Button */}
          Update
        
      
    
  );
}
