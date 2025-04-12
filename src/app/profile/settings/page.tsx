'use client';
import React from 'react';
import { Icons } from '@/components/icons';
import Link from 'next/link';

const SettingOptions = [
  {
    name: 'Trash Bin',
    icon: Icons.trash,
    href: '#'
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
  return (
    <div className="container py-10">
      <div className="flex flex-col items-start w-full">
        <Link href="/profile" className="flex items-center space-x-2 mb-4">
          <Icons.arrowRight className="h-5 w-5 rotate-180 text-muted-foreground" />
          <span className="text-sm font-medium">Back to Profile</span>
        </Link>

        <h1 className="text-2xl font-bold mb-6">Settings</h1>

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

