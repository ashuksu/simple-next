'use client';

import type { Todo } from '@/entities/todolists/model/todo';
import { use } from 'react';

export const Todolists = ({ todolists }: { todolists: Promise<Todo[]> }) => {
  const todos = use(todolists);

  return (
    <ul className="columns-2 gap-10 space-y-3">
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};
