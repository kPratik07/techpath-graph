function EmptyState() {
  return (
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl text-cyan-400">
        →
      </div>

      <h2 className="mt-4 text-lg font-semibold text-white">
        Ready to find your learning path?
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
        Select a developer and target role above to discover the skills you need
        to learn next.
      </p>
    </section>
  );
}

export default EmptyState;
