'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const router = useRouter();

  return (
    <header className="flex w-full items-center justify-between bg-zinc-50 px-16 py-4 font-sans dark:bg-black">
      <Link className="logo h-4 w-4" href={'/'}>
        <Image
          className={'h-auto w-auto'}
          src={'/vercel.svg'}
          alt={'logo'}
          width={16}
          height={16}
          priority
        />
      </Link>
      <nav className="nav flex gap-2">
        <button
          className="cursor-pointer bg-gray-700 px-1 text-white transition-colors hover:bg-gray-600"
          onClick={() => router.back()}
        >
          back
        </button>
        <button
          className="cursor-pointer bg-gray-700 px-1 text-white transition-colors hover:bg-gray-600"
          onClick={() => router.forward()}
        >
          forward
        </button>
      </nav>
      <nav className="flex gap-4 text-green-300">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/about/inner" className="hover:underline">
          Inner
        </Link>
      </nav>
    </header>
  );
};
