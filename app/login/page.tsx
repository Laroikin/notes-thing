import { getServerSession } from 'next-auth/next';

export default async function Login() {
  const session = await getServerSession();
  if (session) return <div>page</div>;
}
