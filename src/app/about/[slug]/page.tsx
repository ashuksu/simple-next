'use client';

import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

export default function InnerPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  return (
    <main className="flex flex-col items-center gap-3 p-10">
      <h1>Inner Page - slug</h1>
      <Link className={'border'} href={' /about/xxx?title=123&name=Bob'}>
        Go to Query Prams
      </Link>

      {params && <p>Params.slug: {params.slug}</p>}
      <p>title: {searchParams?.get('title')}</p>
      <p>name: {searchParams?.has('name') && 'has "name"'}</p>
    </main>
  );
}
