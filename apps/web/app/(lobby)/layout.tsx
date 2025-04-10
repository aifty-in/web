import { SiteHeader } from '@/components/layout/site-header';
import React from 'react';

const LobbyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <div>Footer</div>
    </div>
  );
};

export default LobbyLayout;
