import type { Metadata } from 'next';
import { Todolists } from '@/entities/components/todolists/todolists';
import type { Todo } from '@/entities/todo/model/todo';

export const metadata: Metadata = {
  title: 'Books Page',
  description: 'Books page description',
};

export default async function Books() {
  const todolists: Todo[] = await fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
    res.json(),
  );

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-16 py-10 sm:items-start">
      <h1 className={'mb-10 text-4xl'}>Books</h1>

      <section className="grid w-full grid-cols-1 gap-3">
        <Todolists todolists={todolists} />
      </section>
    </main>
  );
}
