'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';

export default function InnerPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className="w-full">
      <h2 className={'mb-10 text-2xl'}>Inner Page - slug</h2>

      <div className="flex max-w-xs flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <button
            className={'border px-2 py-1'}
            onClick={() => router?.push('/about/xxx?title=Push&name=Srav')}
          >
            Go to Query Prams
          </button>

          <button
            className={'border px-2 py-1'}
            onClick={() => router.replace('/about/xxx?title=Peplace&name=Ni')}
          >
            Go to Query Prams
          </button>
        </div>

        {params && <p>Params.slug: {params.slug}</p>}

        <p>title: {searchParams?.get('title')}</p>

        <p>name: {searchParams?.get('name')}</p>

        {searchParams?.has('name') && <p>has &#34;name&#34;</p>}
      </div>
    </div>
  );
}
