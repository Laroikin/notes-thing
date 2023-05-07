import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import z from 'zod';
import { zfd } from 'zod-form-data';
import SubmitBtn from '@/components/submit-btn';

const schema = z.object({
  content: z.string().min(1).max(280)
});

const formDataSchema = zfd.formData(schema);

async function submitNewNote(data: FormData) {
  'use server';

  const parsed = formDataSchema.parse(data);

  const session = await getServerSession(authOptions);

  await prisma.note.create({
    data: {
      content: parsed.content,
      author: {
        connect: {
          email: session?.user?.email!
        }
      }
    }
  });
}

export default function NewNotePage() {
  return (
    <>
      <form action={submitNewNote}>
        <textarea
          className="text-mauve-12 bg-mauve-1 border-mauve-7 resize-none rounded-md p-4 border"
          name="content"
        />
        <SubmitBtn />
      </form>
    </>
  );
}
