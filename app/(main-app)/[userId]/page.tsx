import prisma from '@/lib/prisma';

export default async function User({ params }: { params: { userId: string } }) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.userId
    }
  });

  console.log(user);

  return <div className="flex flex-col">
    {user?.name}
  </div>;
}
