import React from 'react';
import { AvatarImage, Avatar, AvatarFallback } from './ui/avatar';
import { useSession } from 'next-auth/react';

export default function DisplayAvatar() {
  const session = useSession();
  return (
    <Avatar>
      <AvatarImage src={session?.data?.user?.image ?? undefined} />
      <AvatarFallback>{session?.data?.user?.name?.slice(0, 2)}</AvatarFallback>
    </Avatar>
  );
}
