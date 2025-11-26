import { UserSettings } from "../hooks/useFetchKtdaProfile";

const API_BASE = 'api/users';

export async function fetchUser(userId: string, token: string) {
  if (!API_BASE) throw new Error("API base URL not defined");

  const response = await fetch(`${API_BASE}/${userId}/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Failed to fetch user");

  return response.json();
}

export async function updateUser(
  userId: string,
  settings: UserSettings,
  imageFile?: File | null,
  token?: string
) {
  if (!API_BASE) throw new Error("API base URL not defined");

  const formData = new FormData();
  formData.append("id", userId);
  formData.append("name", `${settings.fullName} ${settings.lastName}`);
  formData.append("email", settings.email);
  formData.append("phone_number", settings.phone);

  if (imageFile) formData.append("image", imageFile);

  const response = await fetch(`${API_BASE}/${userId}/`, {
    method: "PUT",
    body: formData,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  if (!response.ok) {
    const err = await response
      .json()
      .catch(() => ({ error: "Failed to update" }));
    throw new Error(err.error || "Failed to update user profile");
  }

  return response.json();
}
