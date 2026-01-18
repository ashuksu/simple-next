'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between bg-zinc-50 px-16 py-4 font-sans dark:bg-black">
      <div className="logo">
        <Image
          className={'h-auto w-auto'}
          src={'/vercel.svg'}
          alt={'logo'}
          width={16}
          height={16}
        />
      </div>
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
