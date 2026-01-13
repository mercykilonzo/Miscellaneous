const profilesContainer = document.getElementById('user-profiles-container');

const getUsers = async () =>{
    try{
        const response = await fetch('https://dummyjson.com/users',{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result;
    }catch (error){
        return new Error(error.message);
    }
};

const userProfiles = async () =>{
    const users = await getUsers();
    console.log({users});
    const profiles = Array.isArray(users?.users)?users?.users : [];
    console.log({profiles});

    profiles.forEach((item) => {

        //create card elements for each user profile
        const image = document.createElement('img');
        const fullName = document.createElement('h3');
        const age = document.createElement('h4');
        const username = document.createElement('h4');
        const role = document.createElement('h4');
        const container = document.createElement('div');    
        
        // Append every element
        container.appendChild(image);
        container.appendChild(fullName);
        container.appendChild(username);
        container.appendChild(age);
        container.appendChild(role);


        // Add content to each element
        image.src = item.image;
        image.alt = `User ${item.id} Image`;
        fullName.textContent = `Full name: ${item.firstName} ${item.lastName}`;
        username.textContent = `Username: ${item.username}`;
        age.textContent = `Age: ${item.age}`;
        role.textContent = `Role: ${item.role}`;

        // create a class for the container
        container.setAttribute('class', 'profile-card');

        // Append container to profilecontainer
        profilesContainer.appendChild(container);
    });
    
    
};
userProfiles();
