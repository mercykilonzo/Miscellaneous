
import useFetchUserProfiles from "./hooks/useFetchUserProfiles";
const UserProfiles = () => {

    const { loading, error, UserProfiles } = useFetchUserProfiles ();

    if (loading) {
        return <h1>Loading ...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <h1>User Profiles</h1>
            <div>
                {UserProfiles.map(user => (

                    <div key={user.id}>
                        <img src={user.image} alt={`User ${user.id} profile`} />
                        <h3>Fullname: {`${user.firstName} ${user.lastName}`}</h3>
                        <h4>Username: {user.username}</h4>
                        <h4>Age:{user.age}</h4>
                        <h4>Role: {user.role}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default UserProfiles;