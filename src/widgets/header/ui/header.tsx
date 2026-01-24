import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/entities/elements/ui/button';

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between bg-zinc-50 px-16 py-4 font-sans dark:bg-black">
      <Link className="logo h-4 w-4" href={'/'}>
        <Image
          className={'aspect-square h-auto w-auto object-contain'}
          src={'/vercel.svg'}
          alt={'logo'}
          width={16}
          height={16}
          priority
        />
      </Link>
      <nav className="flex gap-4 text-green-300">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/books" className="hover:underline">
          Books
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/about/inner" className="hover:underline">
          Inner
        </Link>
      </nav>
      <Button />
    </header>
  );
};
