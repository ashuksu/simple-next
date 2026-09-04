import Image from 'next/image';
import favico1 from '@/app/favicon.ico';
import favico2 from './favicon.ico';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <div className="grid grid-cols-2 items-center justify-center justify-items-center bg-white">
          <Image
            className="max-w-full p-2"
            src={'/next.svg'}
            alt={'text'}
            width={200}
            height={200}
            quality={10}
            priority
          />
          <Image
            src={'https://avatars.githubusercontent.com/u/15161763?v=4'}
            alt={'text'}
            width={200}
            height={40}
            quality={10}
            priority
          />
          <Image
            src={'https://avatars.githubusercontent.com/u/15161763?v=4'}
            alt={'text'}
            width={200}
            height={40}
            quality={10}
            priority
          />
          <Image src={favico1} alt={''} width={50} height={50} />
          <Image src={favico2} alt={''} width={50} height={50} />
          <Image
            src="https://i.pinimg.com/originals/21/2f/de/212fded6aab6b0be9162d69d9828407f.gif"
            alt={''}
            width={200}
            height={200}
            quality={10}
            priority
          />
        </div>
      </main>
    </div>
  );
}
