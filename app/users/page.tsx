import React from 'react';
import prisma from '@/lib/prisma';

export default async function ListUsers() {
  const users = await prisma.user.findMany({
    orderBy: {
      notes: {
        _count: 'desc'
      }
    }
  });
  console.log(users);
  return (
    <div>
      {users.map(user => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}
