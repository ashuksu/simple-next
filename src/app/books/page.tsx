import type { Metadata } from 'next';
import { Todolists } from '@/entities/todolists/ui/todolists';
import path from 'node:path';
import fs from 'fs/promises';
import { Todo } from '@/entities/todolists/model/todo';

export const metadata: Metadata = {
  title: 'Books Page',
  description: 'Books page description',
};

const getTodolists = async (): Promise<Todo[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'no-store' });
  return res.json();
};

export default async function Books() {
  const getParsedData = async () => {
    const filePath = path.join(process.cwd(), 'public', 'data.json');

    try {
      const data = await fs.readFile(filePath);
      return JSON.parse(data.toString());
    } catch {
      return { title: 'no title' };
    }
  };

  const { title } = await getParsedData();
  console.log(1, title);

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
