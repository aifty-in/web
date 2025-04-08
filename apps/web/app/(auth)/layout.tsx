import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
