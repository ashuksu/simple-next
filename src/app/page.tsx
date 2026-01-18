import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between px-16 py-32 sm:items-start">
      <div className="grid grid-cols-2 items-center justify-center justify-items-center bg-white">
        <Image
          className="h-auto w-auto max-w-full p-2"
          src={'/next.svg'}
          alt={'text'}
          width={200}
          height={200}
          priority
        />
        <Image
          className={'h-auto w-auto object-cover'}
          src="https://images.unsplash.com/photo-1762970444229-63fa47ddad16?q=80&w=739&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={''}
          width={200}
          height={200}
          priority
        />
        <Image
          className={'h-auto w-auto object-cover'}
          src={
            'https://plus.unsplash.com/premium_photo-1664013263421-91e3a8101259?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt={'text'}
          width={200}
          height={200}
          priority
        />
      </div>
    </main>
  );
}
