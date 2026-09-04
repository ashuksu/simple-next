'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

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
      <div className={'text-blue-400'}>{pathname}</div>
      <nav className="nav flex gap-2">
        <button
          className="cursor-pointer bg-gray-700 px-1 text-white transition-colors hover:bg-gray-600"
          onClick={() => router.back()}
        >
          back
        </button>
        <button
          className="cursor-pointer bg-amber-800 px-1 text-white transition-colors hover:bg-amber-700"
          onClick={() => {
            // <pathname>?title=book
            router.push(
              pathname +
                '?' +
                createQueryString('title', 'book') +
                '&' +
                createQueryString('name', 'Van Gogh'),
            );
          }}
        >
          Book
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
