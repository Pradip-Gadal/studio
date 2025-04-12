"use client";

import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/icons";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center">
        <div className="relative">
          <Avatar className="h-24 w-24">
            <AvatarImage className="aspect-square h-full w-full" alt="Profile" src="https://picsum.photos/100/100"/>
            <AvatarFallback>NC</AvatarFallback>
          </Avatar>
          <Button size="icon" className="absolute bottom-0 right-0 rounded-full shadow-md">
            <Icons.edit className="h-4 w-4"/>
          </Button>
        </div>
        <h1 className="text-2xl font-bold mt-4">Nisha Chaudhary</h1>
        <p className="text-sm text-muted-foreground">Engineering Student</p>
        <p className="text-sm text-muted-foreground text-center mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut platea.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <Link href="#" className="flex items-center justify-between p-4 rounded-md hover:bg-secondary">
          <div className="flex items-center space-x-3">
            <Icons.user className="h-5 w-5 text-muted-foreground"/>
            <span>Profile Details</span>
          </div>
          <Icons.arrowRight className="h-4 w-4 text-muted-foreground"/>
        </Link>

        <Link href="#" className="flex items-center justify-between p-4 rounded-md hover:bg-secondary">
          <div className="flex items-center space-x-3">
            <Icons.file className="h-5 w-5 text-muted-foreground"/>
            <span>Uploaded Files</span>
          </div>
          <Icons.arrowRight className="h-4 w-4 text-muted-foreground"/>
        </Link>

        <Link href="#" className="flex items-center justify-between p-4 rounded-md hover:bg-secondary">
          <div className="flex items-center space-x-3">
            <Icons.heart className="h-5 w-5 text-muted-foreground"/>
            <span>Saved Files</span>
          </div>
          <Icons.arrowRight className="h-4 w-4 text-muted-foreground"/>
        </Link>

        <Link href="#" className="flex items-center justify-between p-4 rounded-md hover:bg-secondary">
          <div className="flex items-center space-x-3">
            <Icons.settings className="h-5 w-5 text-muted-foreground"/>
            <span>Settings</span>
          </div>
          <Icons.arrowRight className="h-4 w-4 text-muted-foreground"/>
        </Link>
      </div>

      <Button className="w-full mt-8">Logout</Button>
    </div>
  );
}

