'use client';

import '@/app/globals.css';
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import React, { createContext, useState } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

interface UserDetails {
  firstName: string;
  lastName: string;
  university: string;
  course: string;
  yearSemester: string;
  bio?: string;
}

interface ProfilePictureContextType {
  profilePicture: string | null;
  setProfilePicture: React.Dispatch<React.SetStateAction<string | null>>;
  userDetails: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
}

export const ProfilePictureContext = createContext<ProfilePictureContextType>({
  profilePicture: null,
  setProfilePicture: () => {},
  userDetails: { firstName: '', lastName: '', university: '', course: '', yearSemester: '', bio:'' },
  setUserDetails: () => {},
});

interface Props {
  children: React.ReactNode;
}

export default function App({children}: Props) {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails>({ firstName: '', lastName: '', university: '', course: '', yearSemester: '', bio: '' });

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ProfilePictureContext.Provider value={{ profilePicture, setProfilePicture, userDetails, setUserDetails }}>
          {children}
        </ProfilePictureContext.Provider>
      </body>
    </html>
  );
}

