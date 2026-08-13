import { useEffect, useState } from "react";
import SelectionPanel from "./components/SelectionPanel";
import { getRecommendations } from "./services/recommendationApi";
import SkillGapResults from "./components/SkillGapResults";
import LoadingState from "./components/LoadingState";
import EmptyState from "./components/EmptyState";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [developers, setDevelopers] = useState([]);
  const [roles, setRoles] = useState([]);

  const [selectedDeveloper, setSelectedDeveloper] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [recommendations, setRecommendations] = useState(null);

  const [loading, setLoading] = useState(false);
  const [loadingOptions, setLoadingOptions] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadOptions() {
      try {
        const [developersResponse, rolesResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/developers`),
          fetch(`${API_BASE_URL}/roles`),
        ]);

        if (!developersResponse.ok || !rolesResponse.ok) {
          throw new Error("Failed to load developers or roles");
        }

        const developersData = await developersResponse.json();
        const rolesData = await rolesResponse.json();

        setDevelopers(developersData);
        setRoles(rolesData);
      } catch (error) {
        setError(error.message || "Failed to load developers and roles.");
      } finally {
        setLoadingOptions(false);
      }
    }

    loadOptions();
  }, []);

  async function handleSubmit() {
    if (!selectedDeveloper || !selectedRole) {
      return;
    }

    setLoading(true);
    setError("");
    setRecommendations(null);

    try {
      const data = await getRecommendations(selectedDeveloper, selectedRole);

      setRecommendations(data);
    } catch (error) {
      setError(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 font-bold text-slate-950">
              T
            </div>

            <span className="text-xl font-bold">TechPath</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Find your learning path.
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Discover the skills you need to reach your target developer role and
            find resources to close the gap.
          </p>
        </header>

        {loadingOptions ? (
          <LoadingState />
        ) : (
          <SelectionPanel
            developers={developers}
            roles={roles}
            selectedDeveloper={selectedDeveloper}
            selectedRole={selectedRole}
            onDeveloperChange={setSelectedDeveloper}
            onRoleChange={setSelectedRole}
            onSubmit={handleSubmit}
            loading={loading}
          />
        )}

        {error && !loading && (
          <div className="mt-8 rounded-2xl border border-red-900/60 bg-red-950/30 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-red-300">
                  Something went wrong
                </p>

                <p className="mt-1 text-sm text-red-200/70">{error}</p>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!selectedDeveloper || !selectedRole}
                className="rounded-xl border border-red-800 bg-red-950/50 px-5 py-2.5 text-sm font-medium text-red-200 transition hover:bg-red-900/40 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {loading ? (
          <LoadingState />
        ) : recommendations ? (
          <SkillGapResults recommendations={recommendations} />
        ) : !loadingOptions ? (
          <EmptyState />
        ) : null}
      </div>
    </main>
  );
}

export default App;
