const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getRecommendations(developerId, roleId) {
  const response = await fetch(
    `${API_BASE_URL}/recommendations/${developerId}/${roleId}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch recommendations");
  }

  return data;
}