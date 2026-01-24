'use client';

import { ReactNode } from 'react';

export const Test = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'flex items-center gap-3'}>
      {children}
      <button
        onClick={() => console.log('Test clicked!')}
        className="cursor-pointer bg-amber-800 px-2 py-1 text-white transition-colors hover:bg-amber-700"
      >
        Log
      </button>
    </div>
  );
};
