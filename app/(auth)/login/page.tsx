import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignInBtn from '@/components/signin-btn';
import { getServerSession } from 'next-auth/next';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default async function Login() {
  const providers = await getProviders();
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/');
  }

  return (
    <main className="flex justify-center items-center grow">
      <form className="bg-mauve-2/60 backdrop-blur-sm rounded-md border border-mauve-6 max-w-lg w-full flex flex-col only:justify-center items-center p-8 space-y-4">
        <h2 className="font-bold text-3xl mb-4">Log in to NotesThing™</h2>
        {providers &&
          Object.values(providers).map(provider => (
            <div key={provider.name}>
              <SignInBtn
                className="px-16 py-3 rounded font-semibold bg-gray-12 text-gray-1 hover:brightness-200 duration-200"
                provider={provider}
              >
                Continue with {provider.name}
              </SignInBtn>
            </div>
          ))}
      </form>
    </main>
  );
}
