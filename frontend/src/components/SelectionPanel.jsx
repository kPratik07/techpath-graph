function SelectionPanel({
  developers,
  roles,
  selectedDeveloper,
  selectedRole,
  onDeveloperChange,
  onRoleChange,
  onSubmit,
  loading,
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Find your learning path
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Select a developer and target role to discover missing skills.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Developer
          </label>

          <select
            value={selectedDeveloper}
            onChange={(event) => onDeveloperChange(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500"
          >
            <option value="">Select developer</option>

            {developers.map((developer) => (
              <option key={developer.id} value={developer.id}>
                {developer.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Target role
          </label>

          <select
            value={selectedRole}
            onChange={(event) => onRoleChange(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500"
          >
            <option value="">Select target role</option>

            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="button"
        onClick={onSubmit}
        disabled={!selectedDeveloper || !selectedRole || loading}
        className="mt-6 w-full rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? "Analyzing skill gap..." : "Find Skill Gap"}
      </button>
    </section>
  );
}

export default SelectionPanel;