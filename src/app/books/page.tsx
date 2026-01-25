import type { Metadata } from 'next';
import { Todolists } from '@/entities/todolists/ui/todolists';
import type { Todo } from '@/entities/todolists/model/todo';
// import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Books Page',
  description: 'Books page description',
};

export const dynamic = 'force-dynamic'; // force-dynamic, force-static, error, auto

const getTodolists = async (): Promise<Todo[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'force-cache' });
  return res.json();
};

export default async function Books() {
  const todolists: Promise<Todo[]> = getTodolists();
  console.log('in Books page');

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-16 py-10 sm:items-start">
      <h1 className={'mb-10 text-4xl'}>Books</h1>

      <section className="flex w-full flex-col gap-4">
        <h3 className="border-b-2 border-b-amber-50 py-2 text-xl font-bold">Todolist</h3>
        {/*<Suspense fallback={<div>Loading todolists...</div>}>*/}
        <Todolists todolists={todolists} />
        {/*</Suspense>*/}
      </section>
    </main>
  );
}
