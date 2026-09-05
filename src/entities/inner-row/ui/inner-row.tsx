'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const InnerRow = () => {
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
    <div className="flex w-full items-center justify-between px-16 py-4 font-sans">
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
    </div>
  );
};
