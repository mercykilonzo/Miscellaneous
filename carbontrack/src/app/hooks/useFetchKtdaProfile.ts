import { useState } from "react";
import { updateUser } from "../utils/fetchKtdaProfile";

export type UserSettings = {
  fullName: string;
  lastName: string;
  email: string;
  phone: string;
};

export function useUserSettings() {
  const [updating, setUpdating] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const updateSettings = async (
    userId: string,
    settings: UserSettings,
    imageFile?: File | null,
    token?: string
  ) => {
    setUpdating(true);
    setUpdateError(null);
    setSuccess(false);

    try {
      await updateUser(userId, settings, imageFile, token);
      setSuccess(true);
      return true;
    } catch (err: any) {
      setUpdateError(err.message || "Failed to update");
      return false;
    } finally {
      setUpdating(false);
    }
  };

  return { updateSettings, updating, updateError, success };
}
