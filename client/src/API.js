const API_URL = 'http://localhost:9009'

export async function listLogEntries() {
  const response = await fetch(`${API_URL}/api`);
  return response.json();
}