const baseUrl = process.env.REACT_APP_BASE_URL;
const token = process.env.REACT_APP_TOKEN;

function checkEnv() {
  if (!baseUrl || !token) {
    throw new Error("Missing REACT_APP_BASE_URL or REACT_APP_TOKEN in environment variables.");
  }
}

const getHeaders = () => ({
  Authorization: `Token ${token}`,
  "Content-Type": "application/json",
});

export async function fetchPayments() {
  checkEnv();

  const response = await fetch(`${baseUrl}/payment/`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch payments: ${response.status} ${response.statusText}`);
  }

  return response.json();
}



