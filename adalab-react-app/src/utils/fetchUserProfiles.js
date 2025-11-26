
const baseurl = process.env.REACT_APP_BASE_URL;

export async function fetchUserProfiles() {
    try {
        const response = await fetch(`${baseurl}/users`);
        if (!response.ok) {
            throw new Error(`Something went wrong ${response.status}`);


        }
        const result = await response.json();
        return result?.users;

    } catch (error) {
        throw new Error(error.message || "Error fetching user profiles")

    }

}