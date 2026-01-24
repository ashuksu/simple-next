'use client';

export const Button = () => {
  return (
    <button
      onClick={() => console.log('Button clicked!')}
      className="cursor-pointer bg-amber-800 px-2 py-1 text-white transition-colors hover:bg-amber-700"
    >
      Log
    </button>
  );
};
