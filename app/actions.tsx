'use server';

export async function likeNote(noteId: string, userEmail: string) {
  'use server';

  const alreadyLiked = await prisma?.likesOnNote.findFirst({
    where: {
      noteId,
      user: {
        email: userEmail
      }
    }
  });

  if (!alreadyLiked) {
    await prisma?.likesOnNote.create({
      data: {
        user: { connect: { email: userEmail } },
        note: { connect: { id: noteId } }
      }
    });
  } else {
    await prisma?.likesOnNote.delete({
      where: {
        id: alreadyLiked.id
      }
    });
  }
}
