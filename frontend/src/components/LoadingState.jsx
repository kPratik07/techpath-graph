function LoadingState() {
  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-center">
      <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-400" />

      <p className="mt-4 font-medium text-white">
        Analyzing your skill gap...
      </p>

      <p className="mt-1 text-sm text-slate-400">
        Checking your skills against the target role.
      </p>
    </div>
  );
}

export default LoadingState;