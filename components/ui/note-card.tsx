import React from 'react';
import { Note, LikesOnNote, User, Prisma } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import LikeBtn from '../like-btn';
import { getRelativeDate } from '@/lib/utils';

export default function NoteCard({
  note,
  isLiked
}: {
  note: Note & {
    LikesOnNote: (LikesOnNote & {
      user: {
        _count: Prisma.UserCountOutputType;
      };
    })[];
    author: User;
  };
  isLiked: boolean;
}) {


  return (
    <div
      key={'note' + note.id}
      className="flex p-4 pb-6 gap-x-2 gap-y-1.5 items-start w-full max-w-lg min-h-fit backdrop-blur-sm bg-mauve-1/10 backdrop-saturate-150 border-mauve-7/40 border border-t-0 relative flex-wrap"
    >
      {note.author.image && (
        <Link
          href={`/${note.author.id}`}
          className="hover:brightness-75 duration-100"
        >
          <Image
            src={note.author.image}
            alt={note.author.name + ' profile picture'}
            className="rounded-full border border-mauve-9/40 grow-0"
            width={48}
            height={48}
          />
        </Link>
      )}
      <div className="flex flex-col gap-0.5 text-mauve-12 grow">
        <div className="flex justify-between items-center">
          <Link
            href={`/${note.author.id}`}
            className="font-bold hover:underline"
          >
            {note.author.name}
          </Link>
          <p className="text-sm text-mauve-9">{getRelativeDate(note.createdAt)}</p>
        </div>
        <p>{note.content}</p>
      </div>
      <div className="basis-full">
        <LikeBtn note={note} isLiked={isLiked} />
      </div>
      <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-5 pointer-events-none"></div>
    </div>
  );
}
