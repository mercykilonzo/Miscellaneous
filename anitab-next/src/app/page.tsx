'use client'
import Image from "next/image";
import useFetchUsers from "./hooks/useFetchUsers";
export default function Home() {
  const {users, loading, error} = useFetchUsers();
  return (
    <div>
      <h1 className="text-green-500 text-4xl"> Intro to Next.js</h1>
      <div className="grid grid-cols-5 m-10 gap-4">
        {loading && <h3>Loading ...</h3>}
        {error && <h3>{error}</h3>}
        {users.map(user =>(
          <div key={user.id} className="border-4 border-gray-400 p-4 rounded shadow-2xl">
            <img src={user.image} alt={`${user.id} image`}/>
            <h3>First Name: {user.firstName}</h3>
            <h3>Last Name: {user.lastName}</h3>
           
            </div>
        ))}
      </div>
    </div>
  );
} 