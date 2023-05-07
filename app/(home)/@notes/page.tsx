import Header from '@/components/header';
import Footer from '@/components/footer';
import prisma from '@/lib/prisma';

export default async function AllNotes() {
  const notes = await prisma.note.findMany({
    orderBy: {
      createdAt: 'desc'
    },
  });

  return (
    <>
      <main className="grow">
        {notes.map(note => (
          <div key={'note' + note.id} className='flex flex-col gap-2'>
            <p>{note.content}</p>
          </div>
        ))}
      </main>
    </>
  );
}
