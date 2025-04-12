'use client';

import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Button} from '@/components/ui/button';
import {Icons} from '@/components/icons';
import {Input} from '@/components/ui/input';
import {cn} from '@/lib/utils';

export default function ProfileDetailsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center">
        {/* Avatar with Edit Button */}
        <div className="relative">
          <Avatar className="h-24 w-24">
            <AvatarImage
              className="aspect-square h-full w-full"
              alt="Profile"
              src="https://picsum.photos/100/100"
            />
            <AvatarFallback>NC</AvatarFallback>
          </Avatar>
          <Button size="icon" className="absolute bottom-0 right-0 rounded-full shadow-md">
            <Icons.edit className="h-4 w-4" />
          </Button>
        </div>

        {/* Form Inputs */}
        <div className="w-full max-w-md mt-8 space-y-4">
          <div>
            <Input type="text" placeholder="University/College" />
          </div>
          <div>
            <Input type="text" placeholder="Course" />
          </div>
          <div>
            <Input type="text" placeholder="Year/Semester" />
          </div>
          <div>
            <Input type="file" placeholder="Upload College ID" className="file:border-0 file:bg-muted file:text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Upload College ID</span>
                <Icons.settings className="h-4 w-4 text-muted-foreground" />
              </div>
            </Input>
          </div>

          {/* Update Button */}
          <Button className="w-full">Update</Button>
        </div>
      </div>
    </div>
  );
}
