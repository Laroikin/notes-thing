'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={pending ? 'bg-red-9' : 'bg-green-9'}
      disabled={pending}
    >
      Submit
    </button>
  );
}
