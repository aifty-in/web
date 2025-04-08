import { Button } from '@/components/ui/button';
import Container from '@/components/Wrapper';
import Image from 'next/image';
import { SignOutButton } from './(auth)/_components/sign-out';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect('/signin');
  }
  return (
    <Container>
      <div>
        <span>Hello {session.user?.email}</span>
        <SignOutButton />
      </div>
    </Container>
  );
}
