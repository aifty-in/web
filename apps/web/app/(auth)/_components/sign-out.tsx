'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { signOut } from 'next-auth/react';

export const SignOutButton = () => {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <div className="flex justify-center">
      <Button variant="destructive" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
};
