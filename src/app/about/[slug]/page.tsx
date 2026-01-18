'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';

export default function InnerPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <main className="flex flex-col items-center gap-3 p-10">
      <h1>Inner Page - slug</h1>
      <button className={'border'} onClick={() => router?.push('/about/xxx?title=123&name=Bob')}>
        <b className={'font-black'}>Push()</b> to Query Prams
      </button>
      <button className={'border'} onClick={() => router.replace('/')}>
        <b className={'font-black'}>Peplace()</b> to /
      </button>

      {params && <p>Params.slug: {params.slug}</p>}
      <p>title: {searchParams?.get('title')}</p>
      <p>name: {searchParams?.get('name')}</p>
      {searchParams?.has('name') && <p>has &#34;name&#34;</p>}
    </main>
  );
}
