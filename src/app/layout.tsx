'use client';

import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import React, { createContext, useState, useContext } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

interface ProfilePictureContextType {
  profilePicture: string | null;
  setProfilePicture: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ProfilePictureContext = createContext<ProfilePictureContextType>({
  profilePicture: null,
  setProfilePicture: () => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ProfilePictureContext.Provider value={{ profilePicture, setProfilePicture }}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer className="sticky top-[100vh]"/>
        </ProfilePictureContext.Provider>
      </body>
    </html>
  );
}


