'use client';

import { useSession } from 'next-auth/react';

export default function ClientComponent() {
  const { data } = useSession();
  return (
    <div className="bg-gradient-to-r from-blue-500/50 to-blue-600/40 p-10 rounded">
      <h1>Client Component</h1>
      <p>Session: {data?.user?.name}</p>
    </div>
  );
}
