'use client';

import type { Todo } from '@/entities/todo/model/todo';

export const Todolists = ({ todolists }: { todolists: Todo[] }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="border-b-2 border-b-amber-50 py-2 text-xl font-bold">Todoist</h3>
      <ul className="columns-2 gap-10 space-y-3">
        {todolists.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};
