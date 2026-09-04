import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-4 px-16 py-32">
      <h1 className="text-4xl font-bold">Not Found</h1>
      <h2 className={'text-4xl'}>(404)</h2>
      <p className="text-lg text-gray-500">Sorry, the page you are looking for does not exist.</p>
      <Link
        href="/"
        className="cursor-pointer bg-amber-800 px-2 py-1 text-white transition-colors hover:bg-amber-700"
      >
        Go back home
      </Link>
    </main>
  );
}
