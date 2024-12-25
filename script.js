document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded users data
    async function fetchUsersData() {
        const response = await fetch('http://localhost:3000/users');
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Failed to fetch user data');
        }
    }

    // Handle Login form submission
    async function handleLogin(event) {
        event.preventDefault(); // Prevent form from submitting

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Show the preloader while processing login
        document.getElementById('loginContainer').style.display = 'none'; // Hide login form
        document.getElementById('preloader').style.display = 'flex'; // Show preloader

        // Simulate a delay for the preloader (replace this with actual login check)
        setTimeout(async function() {
            try {
                const users = await fetchUsersData(); // Fetch users data from the server

                // Check for the user in the data
                const user = users.find(user => user.USERNAME === username && user.PASSWORD === password);

                if (user) {
                    // Hide preloader and display home page content
                    document.getElementById('preloader').style.display = 'none';
                    document.getElementById('homeContainer').style.display = 'block'; // Show home page

                    // Set the dynamic New Year Friend message
                    document.getElementById('friendName').textContent = `Your New Year Friend: ${user.santa_friend}`;
                } else {
                    // Invalid login, show alert and re-display the login form
                    alert('Invalid username or password. Please try again.');
                    document.getElementById('loginContainer').style.display = 'block'; // Show login form again
                    document.getElementById('preloader').style.display = 'none'; // Hide preloader
                }
            } catch (error) {
                alert('Error fetching user data. Please try again.');
                document.getElementById('loginContainer').style.display = 'block'; // Show login form again
                document.getElementById('preloader').style.display = 'none'; // Hide preloader
            }
        }, 3000); // Delay for 3 seconds (simulate loading)
    }

    // Attach event listener to the form
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
});
// Function to generate random snowflakes
function createSnowflakes() {
    const numSnowflakes = 100; // Number of snowflakes
    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Random horizontal position
        snowflake.style.left = `${Math.random() * 100}%`; 
        
        // Random duration for each snowflake (between 5 to 10 seconds)
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; 
        
        // Random delay for each snowflake (between 0 and 5 seconds)
        snowflake.style.animationDelay = `${Math.random() * 5}s`; 
        
        // Random snowflake size (between 1rem and 2.5rem)
        snowflake.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
        
        snowflake.innerHTML = '❄'; // Snowflake character
        
        document.body.appendChild(snowflake);
    }
}