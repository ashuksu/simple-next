import { Suspense } from 'react';
import { InnerRow } from '@/entities/inner-row/ui/inner-row';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <InnerRow />
      </Suspense>
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-16 py-10 sm:items-start">
        <h1 className={'mb-10 text-4xl'}>Nesting layouts: About Page</h1>
        {children}
      </main>
    </>
  );
}
