import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/fetchUsers";
interface UserType {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    age: number;
    image: string;
}
const useFetchUsers = () =>{
    const [users, setUsers] = useState<Array<UserType>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)
    useEffect(() =>{
        (async() =>{
            try{
                const users = await fetchUsers();
                setUsers(users?.users);
            }catch(error){
                setError((error as Error).message);
            }finally{
                setLoading(false);
            }
        })()
    },[]);
    return {users, loading, error}
};
export default useFetchUsers