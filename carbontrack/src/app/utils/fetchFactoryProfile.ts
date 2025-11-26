
export async function fetchUser(userId: string) {
  const res = await fetch(`/api/users/${userId}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch user: ${res.statusText}`);
  }
  return await res.json();
}

export async function updateUser(
  userId: string, 
  updatedData: { [key: string]: any }, 
  imageFile?: File | null
) {
  const formData = new FormData();

  for (const key in updatedData) {
    if (updatedData.hasOwnProperty(key) && updatedData[key] !== undefined && updatedData[key] !== null) {
      formData.append(key, updatedData[key]);
    }
  }

  if (imageFile) {
    formData.append("profile_image", imageFile);
  }

  const res = await fetch(`/api/users/${userId}`, {
    method: "PUT",
    body: formData,
  });

  if (!res.ok) {
    throw new Error(`Failed to update user: ${res.statusText}`);
  }

  return await res.json();
}

