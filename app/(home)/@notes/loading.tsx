import React from 'react';
import {Loader2} from 'lucide-react'

export default function Loading() {
  return (
    <div className="grow flex flex-col gap-4 justify-center items-center">
      <p className='font-bold text-xl'>Plz w8...</p>
      <Loader2 className='animate-spin' />
    </div>
  );
}
