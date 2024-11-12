const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

async function getTracks() {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tracks:", error);
  }
}