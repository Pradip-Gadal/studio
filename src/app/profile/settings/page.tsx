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
    
      
        
          
            Back to Profile
          
        

        
          Settings
        

        
          
            
              
                  
                  src={profilePicture || "https://picsum.photos/100/100"}
              />
              {(userDetails.firstName && userDetails.firstName[0].toUpperCase()) || 'NC'}{(userDetails.lastName && userDetails.lastName[0].toUpperCase()) || ''}
            
            
              
                
              
            
            
              
            
          
        

        
          {SettingOptions.map((option, index) => (
            
              
                
                  
                  {option.name}
                
                
              
            
          ))}
        
      
    
  );
}
