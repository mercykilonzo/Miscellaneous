import { useState, useEffect } from "react";
import { fetchUser, updateUser } from "../utils/fetchFactoryProfile";

export interface UserType {
  role: string;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  user_type: string;
  password: string;
  profile_image: string ;
}

const useFactoryProfile = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("userId", "45");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) throw new Error("No user ID");

        const userData = await fetchUser(userId);
        setUser(userData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const saveUser = async (
    updatedData: Partial<UserType>,
    imageFile?: File | null
  ) => {
    if (!user) throw new Error("No user loaded to update");

    const formData = new FormData();

    if (updatedData.first_name)
      formData.append("first_name", updatedData.first_name);
    if (updatedData.last_name)
      formData.append("last_name", updatedData.last_name);
    if (updatedData.email) formData.append("email", updatedData.email);
    if (updatedData.phone_number)
      formData.append("phone_number", updatedData.phone_number);
    if (updatedData.user_type)
      formData.append("user_type", updatedData.user_type.toString());
    if (updatedData.password) formData.append("password", updatedData.password);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    const updatedUser = await updateUser(user.id.toString(), formData);
    setUser(updatedUser);
    return updatedUser;
  };

  return { user, loading, error, saveUser };
};

export default useFactoryProfile;
