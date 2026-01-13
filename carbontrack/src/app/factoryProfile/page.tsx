"use client";

import React, { useState, useEffect, useRef } from "react";
import useFactoryProfile, { UserType } from "../hooks/useFetchFactoryProfile";
import Sidebar from "../sharedComponents/FactorySidebar";

export default function FactoryProfilePage() {
  const { user, loading, error, saveUser } = useFactoryProfile();

  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      setFirstName(user.first_name || "");
      setLastName(user.last_name || "");
      setEmail(user.email || "");
      setPhone(user.phone_number || "");
      setPassword("");
      setRole(user.user_type || "");
      setImageUrl(user.profile_image || null);
    }
  }, [user]);

  const selectFile = () => {
    if (editMode) {
      fileInputRef.current?.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setSaveError("Please select a valid image file.");
      return;
    }
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
    setSaveError(null);
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveError(null);
    try {
      const details: Partial<UserType> = {
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phone,
        user_type: role,
      };

      if (password) details.password = password;

      await saveUser(details, imageFile);

      setEditMode(false);
      setImageFile(null);
      setPassword("");
    } catch (err) {
      setSaveError((err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-400">Error: {error}</p>;

  return (
    <div className="flex space-x-20 bg-black min-h-screen w-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto max-w-[55%] mt-10">
        <h2 className="text-4xl font-bold mb-4">Factory Profile</h2>

        {user && (
          <>
            <h3 className="text-xl mb-2">Manager Details</h3>

            <div
              onClick={selectFile}
              className={`mb-6 flex items-center space-x-6 cursor-pointer ${
                editMode ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500 flex items-center justify-center bg-gray-800">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    
                  />
                ) : (
                  <div className="text-gray-400">No image</div>
                )}
              </div>
              {editMode && (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                    onClick={selectFile}
                  >
                    Change Image
                  </button>
                </>
              )}
            </div>

            <div className="mb-4 flex items-center space-x-6">
              <label className="font-bold w-36 text-left">First Name:</label>
              <input
                type="text"
                readOnly={!editMode}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`border text-white flex-1 p-2 rounded ${
                  editMode ? "border border-blue-500" : ""
                }`}
              />
            </div>

            <div className="mb-4 flex items-center space-x-6">
              <label className="font-bold w-36 text-left">Last Name:</label>
              <input
                type="text"
                readOnly={!editMode}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`border text-white flex-1 p-2 rounded ${
                  editMode ? "border border-blue-500" : ""
                }`}
              />
            </div>

            <div className="mb-4 flex items-center space-x-6">
              <label className="font-bold w-36 text-left">Email:</label>
              <input
                type="email"
                readOnly={!editMode}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border text-white flex-1 p-2 rounded ${
                  editMode ? "border border-blue-500" : ""
                }`}
              />
            </div>

            <div className="mb-4 flex items-center space-x-6">
              <label className="font-bold w-36 text-left">Phone:</label>
              <input
                type="tel"
                readOnly={!editMode}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`border text-white flex-1 p-2 rounded ${
                  editMode ? "border border-blue-500" : ""
                }`}
              />
            </div>

            {editMode && (
              <>
                <div className="mb-4 flex items-center space-x-6">
                  <label className="font-bold w-36 text-left">Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-white flex-1 p-2 rounded border border-blue-500"
                    placeholder="Enter password"
                  />
                </div>
                <div className="mb-4 flex items-center space-x-6">
                  <label className="font-bold w-36 text-left">User Role:</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="text-white flex-1 p-2 rounded border bg-[#2A4759] border-blue-500"
                  >
                    <option value="">Select role</option>
                    <option value="manager">Manager</option>
                    <option value="factory">Factory</option>
                  </select>
                </div>
              </>
            )}

            {saveError && <p className="text-red-400 mb-2">{saveError}</p>}

            {!editMode ? (
              <button
                className="bg-[#F79B72] px-4 py-2 rounded hover:bg-[#2A4759] ml-[91%]"
                onClick={() => setEditMode(true)}
              >
                Edit
              </button>
            ) : (
              <div className="space-x-2 ml-[79%]">
                <button
                  className="bg-[#F79B72] px-4 py-2 rounded hover:bg-[#2A4759]"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save"}
                </button>
                <button
                  className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => {
                    setEditMode(false);
                    if (user) {
                      setFirstName(user.first_name || "");
                      setLastName(user.last_name || "");
                      setEmail(user.email || "");
                      setPhone(user.phone_number || "");
                      setPassword("");
                      setRole(user.user_type || "");
                      setImageUrl(user.profile_image || null);
                    }
                    setSaveError(null);
                    setImageFile(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
