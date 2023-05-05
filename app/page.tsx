import { getServerSession } from 'next-auth';
import ClientComponent from './client-component';

export default async function Home() {
  const session = await getServerSession();
  console.log(session);
  return <main className='flex justify-center items-center h-full grow p-24'>
    <h1 className='text-6xl font-bold tracking-tighter'>The best way to take notes. Now serverless.</h1>
  </main>;
}
