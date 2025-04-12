'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ProfilePictureContext } from '@/app/_app';

export function Header() {
  const { profilePicture, userDetails } = useContext(ProfilePictureContext);

  const headerAvatarSrc = profilePicture || userDetails.profilePicture || "https://via.placeholder.com/100";

  return (
    <header className="bg-header-background border-b py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-header-foreground pl-4">
          Prototype
        </Link>
        <Link href="/profile">
          <Avatar>
            <AvatarImage className="aspect-square h-full w-full" alt="Profile" src={headerAvatarSrc} />
            <AvatarFallback className="border border-border">
              {(userDetails.firstName && userDetails.lastName[0].toUpperCase()) || 'N'}
              {(userDetails.lastName && userDetails.lastName[0].toUpperCase()) || ''}
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
}
