import Link from 'next/link';
import ExpandingArrow from '@/components/ui/expanding-arrow';

export default async function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-full grow p-24 relative">
        <h1 className="text-6xl font-bold tracking-tighter text-center">
          Write and share notes. <br /> Now{' '}
          <span className="bg-clip-text bg-gradient-to-r from-crimson-9 to-blue-9 text-transparent">
            serverless.
          </span>
        </h1>
        <div className="flex gap-4">
          <div className="shadow-blue-11/10 shadow-xl mt-10 rounded-full relative hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-blue-11/40">
            <Link
              href="/login"
              className="relative cool-hover overflow-hidden px-8 py-3 bg-gradient-to-r from-violet-9 shadow-slate-11/30 shadow-inner to-indigo-9 text-white rounded-full font-semibold w-full block"
            >
              Sign In
            </Link>
            <div className="absolute -inset-2 bg-gradient-radial z-[-1] rounded-full animate-ping from-crimson-9/60 via-50% via-blue-9/20 to-70% to-transparent shadow-inner"></div>
          </div>

          <div className="shadow-blue-11/10 shadow-xl mt-10 rounded-full relative hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-mauve-12/30">
            <Link
              href="/notes"
              className="relative group dark:cool-hover-dark cool-hover  overflow-hidden flex px-8 py-3 bg-mauve-12 shadow-slate-11/30 shadow-inner  text-mauve-1 rounded-full items-center gap-1 font-semibold w-full hover:pr-10 transition-all"
            >
              Explore Notes <ExpandingArrow />
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-crimson-9/60 via-60% via-indigo-9/20 to-70% to-transparent z-[-1] opacity-[0.15]">
          <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] dark:opacity-30 saturate-200 opacity-20"></div>
        </div>
      </main>
    </>
  );
}
