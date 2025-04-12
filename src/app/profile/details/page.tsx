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
    <div className="container py-10">
      <div className="flex flex-col items-center">
        {/* Avatar with Edit Button */}
        <div className="relative">
          <Avatar className="h-24 w-24">
            {/* Updated src logic: profilePicture > userDetails.profilePicture > placeholder */}
            <AvatarImage
              className="aspect-square h-full w-full"
              alt="Profile"
              src={avatarSrc}
            />
            <AvatarFallback>{(firstName && firstName[0].toUpperCase()) || 'N'}{(lastName && lastName[0].toUpperCase()) || ''}</AvatarFallback>
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

        {/* Form Inputs */}
        <div className="w-full max-w-md mt-8 space-y-4">
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="University/College"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Year/Semester"
              value={yearSemester}
              onChange={(e) => setYearSemester(e.target.value)}
            />
          </div>

          {/* Update Button */}
          <Button className="w-full" onClick={handleUpdate}>Update</Button>
        </div>
      </div>
    </div>
  );
}
