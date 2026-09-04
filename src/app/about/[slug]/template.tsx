export default function InnerTemplate({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <h2 className={'mb-10 text-3xl'}>Nesting Template: Inner Page</h2>
      {children}
    </section>
  );
}
