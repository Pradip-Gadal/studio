'use client';
import React, { useContext } from 'react';
import { Icons } from '@/components/icons';
import Link from 'next/link';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {ProfilePictureContext} from "@/app/_app";

const SettingOptions = [
  {
    name: 'Trash Bin',
    icon: Icons.trash,
    href: '/profile/settings/trash-bin'
  },
  {
    name: 'Notification',
    icon: Icons.messageSquare,
    href: '#'
  },
  {
    name: 'Language',
    icon: Icons.externalLink,
    href: '#'
  },
  {
    name: 'Privacy Policy',
    icon: Icons.shield,
    href: '#'
  },
  {
    name: 'Refer your Friend',
    icon: Icons.share,
    href: '#'
  },
  {
    name: 'Feedback & Help',
    icon: Icons.help,
    href: '#'
  }
];

export default function SettingsPage() {
  const { profilePicture, setProfilePicture, userDetails } = useContext(ProfilePictureContext);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    }
  };

  return (
    <div className="container py-10">
      <div className="flex flex-col items-start w-full">
        <Link href="/profile" className="flex items-center space-x-2 mb-4">
          <Icons.arrowRight className="h-5 w-5 rotate-180 text-muted-foreground" />
          <span className="text-sm font-medium">Back to Profile</span>
        </Link>

        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="flex flex-col items-center mb-4">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage
                  className="aspect-square h-full w-full"
                  alt="Profile"
                  src={profilePicture || "https://picsum.photos/100/100"}
              />
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
        </div>

        <div className="w-full space-y-4">
          {SettingOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              className="flex items-center justify-between p-4 rounded-md hover:bg-secondary w-full"
            >
              <div className="flex items-center space-x-3">
                <option.icon className="h-5 w-5 text-muted-foreground" />
                <span>{option.name}</span>
              </div>
              <Icons.arrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
