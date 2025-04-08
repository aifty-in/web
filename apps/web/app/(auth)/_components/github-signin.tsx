import { Button } from '@/components/ui/button';
import { signIn } from '@/lib/auth';
import { RxGithubLogo } from 'react-icons/rx';

const GithubSignIn = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github');
      }}
    >
      <Button className="w-full" variant="outline">
        <RxGithubLogo />
        Continue with GitHub
      </Button>
    </form>
  );
};

export { GithubSignIn };
