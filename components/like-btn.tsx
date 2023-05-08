'use client';

import { likeNote } from '@/app/actions';
import { LikesOnNote, Note, Prisma, User } from '@prisma/client';
import { experimental_useOptimistic } from 'react';
import { useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';

export default function LikeBtn({
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
  const session = useSession();
  const [optimisticLike, addOptimisticLike] = experimental_useOptimistic(
    { likes: note.LikesOnNote.length, isLiked: isLiked },
    state => ({
      ...state,
      likes: state.isLiked ? state.likes - 1 : state.likes + 1,
      isLiked: !state.isLiked
    })
  );
  return (
    <div
      className={cn('basis-1/2 ml-14 flex gap-[0.09rem] items-center text-mauve-9', {
        'text-crimson-9': optimisticLike.isLiked
      })}
    >
      <button
        onClick={async () => {
          addOptimisticLike(1);
          await likeNote(note.id, session.data?.user?.email!);
        }}
        className="p-2 -ml-2 rounded-full hover:bg-crimson-9/20 leading-tight group duration-100"
      >
        <Heart
          className={cn(
            'w-4 h-4 mt-0.5 aspect-square mx-[0.0625rem] group-hover:text-crimson-9 duration-100',
            {
              'fill-crimson-9': optimisticLike.isLiked
            }
          )}
        />
      </button>
      <span className="text-sm mt-[0.17rem] font-medium">
        {optimisticLike.likes != 0 && optimisticLike.likes}
      </span>
    </div>
  );
}
