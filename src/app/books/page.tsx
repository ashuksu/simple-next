type Props = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function Books() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const todolist: Props = await data.json();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-16 py-10 sm:items-start">
      <h1 className={'mb-10 text-4xl'}>Books</h1>
      <section className="grid w-full grid-cols-1 gap-3">
        <div>List</div>
        <div>{todolist.title}</div>
      </section>
    </main>
  );
}
