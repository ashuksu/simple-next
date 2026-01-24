type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function Id(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const todo: Todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`).then(
    (res) => res.json(),
  );

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-16 py-10 sm:items-start">
      <h1 className={'mb-10 text-4xl'}>ID</h1>
      <section className="grid w-full grid-cols-1 gap-3">
        <div>List ID: {params.id}</div>

        {Object.entries(searchParams).map(([key, value]) => (
          <div key={key}>
            Search Params [{key}]: {value}
          </div>
        ))}

        <div>Title: {todo.title}</div>
      </section>
    </main>
  );
}
