'use client';

import { useParams } from 'next/navigation';

export default function InnerPage() {
  const params = useParams();
  return (
    <main className="flex flex-col items-center gap-3 p-10">
      <h1>Inner Page - slug</h1>
      <p>Params.slug: {params?.slug}</p>
    </main>
  );
}
