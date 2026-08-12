function SkillGapResults({ recommendations }) {
  if (!recommendations) {
    return null;
  }

  const { developer, role, missingSkills } = recommendations;

  return (
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Skill Gap
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              {developer.name}
              <span className="mx-2 text-slate-600">→</span>
              {role.name}
            </h2>
          </div>

          <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
            <span className="text-sm font-medium text-cyan-300">
              {missingSkills.length}{" "}
              {missingSkills.length === 1 ? "skill" : "skills"} to learn
            </span>
          </div>
        </div>

        <p className="mt-3 text-sm text-slate-400">
          Focus on these skills to move closer to your target role.
        </p>
      </div>

      {/* No missing skills */}
      {missingSkills.length === 0 ? (
        <div className="rounded-xl border border-emerald-900/60 bg-emerald-950/30 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
              ✓
            </div>

            <div>
              <p className="font-semibold text-emerald-300">
                You're ready for this role.
              </p>

              <p className="mt-1 text-sm text-slate-400">
                No skill gaps were found for this role.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Skill cards */
        <div className="grid gap-4 md:grid-cols-2">
          {missingSkills.map((skill, index) => (
            <article
              key={skill.id}
              className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-950/20"
            >
              {/* Skill heading */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-sm font-semibold text-cyan-400">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Skill to develop
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                  Missing
                </span>
              </div>

              {/* Resources */}
              {skill.resources?.length > 0 ? (
                <div className="mt-5 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Recommended resource
                  </p>

                  {skill.resources.map((resource) => (
                    <div
                      key={resource.id}
                      className="rounded-xl border border-slate-800 bg-slate-900 p-4"
                    >
                      <p className="font-medium text-slate-200">
                        {resource.title}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                        <span>{resource.type}</span>

                        <span className="text-slate-700">•</span>

                        <span>{resource.difficulty}</span>
                      </div>

                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                      >
                        Open Resource
                        <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-5 rounded-xl border border-dashed border-slate-800 p-4">
                  <p className="text-sm text-slate-500">
                    No learning resource available yet.
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default SkillGapResults;
