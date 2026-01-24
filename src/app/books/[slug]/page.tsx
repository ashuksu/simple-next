type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function Id(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const todo: Todo = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>
    res.json(),
  );

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-16 py-10 sm:items-start">
      <h1 className={'mb-10 text-4xl'}>ID</h1>
      <section className="grid w-full grid-cols-1 gap-3">
        <div>List ID: {params.slug}</div>
        {searchParams.name && <div>Search Params [name]: {searchParams.name}</div>}
        {searchParams.description && (
          <div>Search Params [description]: {searchParams.description}</div>
        )}
        <div>Title: {todo.title}</div>
      </section>
    </main>
  );
}
