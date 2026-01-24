import type { Metadata } from 'next';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const metadata: Metadata = {
  title: 'Books Page',
  description: 'Books page description',
};

export default async function Books() {
  const todos: Todo[] = await fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
    res.json(),
  );

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-16 py-10 sm:items-start">
      <h1 className={'mb-10 text-4xl'}>Books</h1>
      <section className="grid w-full grid-cols-1 gap-3">
        <div>List</div>
        {/*<div>{todo.title}</div>*/}
      </section>
    </main>
  );
}
