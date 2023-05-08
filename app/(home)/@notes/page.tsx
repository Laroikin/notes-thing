import NoteCard from '@/components/ui/note-card';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function AllNotes() {
  const notes = await prisma.note.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      author: true,
      LikesOnNote: {
        include: {
          user: { select: { _count: true } }
        }
      }
    }
  });

  const session = await getServerSession(authOptions);

  const IsLiked = await Promise.all(
    notes.map(async note => {
      const liked = await prisma.likesOnNote.findFirst({
        where: {
          noteId: note.id,
          user: {
            email: session?.user?.email!
          }
        }
      });

      return !!liked;
    })
  );

  return (
    <>
      <main className="grow flex flex-col items-center w-full">
        {notes.map((note, ind) => (
          <NoteCard key={note.id} note={note} isLiked={IsLiked[ind]} />
        ))}
      </main>
    </>
  );
}
