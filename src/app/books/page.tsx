import type { Metadata } from 'next';
import { Todolists } from '@/entities/todolists/ui/todolists';
import { Todo } from '@/entities/todolists/model/todo';
import { env } from '@/env';

export const metadata: Metadata = {
  title: 'Books Page',
  description: 'Books page description',
};

export const revalidate = 15; // 15sec for all page
export const dynamic = 'force-dynamic';

const getTodolists = async (): Promise<Todo[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
};

export default async function Books() {
  const { title } = await fetch(`${env.BASE_URL}/api/title`).then((res) => res.json());
  const todolists: Promise<Todo[]> = getTodolists();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-16 py-10 sm:items-start">
      <h1 className={'mb-10 text-4xl'}>Books {title && ': ' + title}</h1>

      <section className="flex w-full flex-col gap-4">
        <h3 className="border-b-2 border-b-amber-50 py-2 text-xl font-bold">Todolist</h3>
        <Todolists todolists={todolists} />
      </section>
    </main>
  );
}
