import Header from '@/components/header';
import Footer from '@/components/footer';
import prisma from '@/lib/prisma';

export default async function AllNotes() {
  const notes = await prisma.note.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Header />
      <main className="grow">
        {notes.map(note => (
          <div key={'note' + note.id}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
