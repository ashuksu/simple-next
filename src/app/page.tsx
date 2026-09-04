import Image from 'next/image';

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
            priority
          />
          <Image
            src="https://images.unsplash.com/photo-1762970444229-63fa47ddad16?q=80&w=739&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={''}
            width={200}
            height={200}
            priority
          />
          <Image
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
    </div>
  );
}
