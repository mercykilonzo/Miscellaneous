"use client";
import React, { useState, useEffect, useRef } from "react";
import { useUserSettings, UserSettings } from "../hooks/useFetchKtdaProfile";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Sidebar from "../sharedComponents/KtdaSideBar";

export default function UserProfilePage() {
  const userId = "45"; 
  const { updateSettings, updating, updateError, success } = useUserSettings();

  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [saveError, setSaveError] = useState<string | null>(null);

  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

 
  useEffect(() => {
    async function fetchUserData() {
     
      const userData = {
        fullName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
        imageUrl: null, 
      };
      setFirstName(userData.fullName);
      setLastName(userData.lastName);
      setEmail(userData.email);
      setPhone(userData.phone);
      setImageUrl(userData.imageUrl);
    }
    fetchUserData();
  }, []);

 
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setSaveError("Please select a valid image file.");
      return;
    }
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
  };

 
  const selectFile = () => {
    fileInputRef.current?.click();
  };

  const handleSave = async () => {
    setSaveError(null);
    if (password && password !== confirmPassword) {
      setSaveError("Passwords do not match");
      return;
    }

    const settings: UserSettings = {
      fullName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };

    try {
      const success = await updateSettings(userId, settings, imageFile);
      if (success) {
        setEditMode(false);
        setPassword("");
        setConfirmPassword("");
        setImageFile(null);
      }
    } catch (error: any) {
      setSaveError(error.message || "Failed to save");
    }
  };

  return (
    <div className="flex bg-black min-h-screen w-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto max-w-[55%] mt-17 mx-30">
        <h2 className="text-4xl font-bold mb-4">KTDA Manager</h2>

       
        {saveError && <p className="text-red-400 mb-2">{saveError}</p>}
        {updateError && <p className="text-red-400 mb-2">{updateError}</p>}
        {success && <p className="text-green-400 mb-2">Profile updated successfully!</p>}

        
        <div className="mb-6 flex items-center space-x-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500 flex items-center justify-center bg-gray-800 cursor-pointer" onClick={selectFile}>
            {imageUrl ? (
              <img src={imageUrl} alt="Profile" className="w-full h-full object-cover" />
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
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                onClick={selectFile}
                type="button"
              >
                Change Image
              </button>
            </>
          )}
        </div>

       
        <div className="mb-4 flex items-center space-x-6">
          <label className="font-bold w-36 text-left">First Name</label>
          <input
            type="text"
            readOnly={!editMode}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`border text-white flex-1 p-2 rounded ${editMode ? "border-blue-500" : ""}`}
          />
        </div>

       
        <div className="mb-4 flex items-center space-x-6">
          <label className="font-bold w-36 text-left">Last Name</label>
          <input
            type="text"
            readOnly={!editMode}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`border text-white flex-1 p-2 rounded ${editMode ? "border-blue-500" : ""}`}
          />
        </div>

      
        <div className="mb-4 flex items-center space-x-6">
          <label className="font-bold w-36 text-left">Email</label>
          <input
            type="email"
            readOnly={!editMode}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border text-white flex-1 p-2 rounded ${editMode ? "border-blue-500" : ""}`}
          />
        </div>

        <div className="mb-4 flex items-center space-x-6">
          <label className="font-bold w-36 text-left">Phone Number</label>
          <input
            type="text"
            readOnly={!editMode}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`border text-white flex-1 p-2 rounded ${editMode ? "border-blue-500" : ""}`}
          />
        </div>

       
        {editMode && (
          <>
            <div className="mb-4 flex items-center space-x-6 relative">
              <label className="font-bold w-36 text-left">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-white flex-1 p-2 rounded border border-blue-500"
                placeholder="Enter new password"
              />
              <span
                className="absolute right-7 top-3 cursor-pointer text-[#F79B72]"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
              </span>
            </div>

            <div className="mb-4 flex items-center space-x-6 relative">
              <label className="font-bold w-36 text-left">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="text-white flex-1 p-2 rounded border border-blue-500"
                placeholder="Confirm new password"
              />
              <span
                className="absolute right-7 top-3 cursor-pointer text-[#F79B72]"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label="Toggle confirm password visibility"
              >
                {showConfirmPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
              </span>
            </div>
          </>
        )}

      
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
              disabled={updating}
              onClick={handleSave}
            >
              {updating ? "Saving..." : "Save"}
            </button>
            <button
              className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => {
                setEditMode(false);
                setSaveError(null);
                setPassword("");
                setConfirmPassword("");
                setImageFile(null);
                
              }}
            >
              Cancel
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
