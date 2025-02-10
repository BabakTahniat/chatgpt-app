'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Button } from './ui/button';

import { signIn, signOut, useSession } from 'next-auth/react';

function getFirstTwoCapitalLetters(str?: string | null) {
  const match = (str || '').match(/[A-Z]/g);
  return match ? match.slice(0, 2).join('') : 'GT';
}

export default function UserButton() {
  const { data: session, status } = useSession();
  // console.log(session);

  return (
    <div>
      {status === 'authenticated' && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src={session.user?.image!} alt="avatar image" />
              <AvatarFallback>
                {getFirstTwoCapitalLetters(session?.user?.name)}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {status === 'unauthenticated' && (
        <Button onClick={() => signIn()}>Sign in</Button>
      )}
    </div>
  );
}
