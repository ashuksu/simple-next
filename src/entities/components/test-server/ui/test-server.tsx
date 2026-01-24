import { Todo } from '@/app/books/page';

export async function TestServer() {
  const todo: Todo = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>
    res.json(),
  );

  return (
    <div>
      <div>{todo.title}</div>
    </div>
  );
}
