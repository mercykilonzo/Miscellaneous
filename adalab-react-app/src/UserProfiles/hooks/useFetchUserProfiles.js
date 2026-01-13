
import { useState, useEffect } from "react";
import { fetchUserProfiles } from "../../utils/fetchUserProfiles";
const useFetchUserProfiles = () => {
    const [UserProfiles, setUserProfiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    async function userProfilesData() {
        try {
            setLoading(true);
            const result = await fetchUserProfiles();
            setUserProfiles(result);
            return result;
        }catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        async function userData() {
            const users = await userProfilesData();
            console.log({ users });
        }
        userData();
    }, [])

    return { loading, error, UserProfiles }

}

export default useFetchUserProfiles;