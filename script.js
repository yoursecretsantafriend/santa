document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded users data
    async function fetchUsersData() {
        const response = await fetch('http://13.201.78.44:3200/users');
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
                    document.getElementById('friendName').textContent = `Your Secret Santa Friend is: ${user.Christmas_friend}`;
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

    const snowflakeContainer = document.createElement("div");
    snowflakeContainer.classList.add("snowflake-container");
    document.body.appendChild(snowflakeContainer);

    const maxSnowflakes = 30;
    let snowflakeCount = 0;

    function generateSnowflake() {
        if (snowflakeCount >= maxSnowflakes) {
            return;
        }

        const snowflake = document.createElement("div");
        snowflake.textContent = "❄";
        snowflake.classList.add("snowflake");

        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = Math.random() * 2 + 2 + "s";
        snowflake.style.animationDelay = Math.random() * 3 + "s";
        snowflake.style.fontSize = Math.random() * 1.5 + 1 + "rem";

        snowflakeContainer.appendChild(snowflake);
        snowflakeCount++;

        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
            snowflakeCount--;
        });
    }

    setInterval(generateSnowflake, 500); // New snowflake every 500ms

    // Audio toggle functionality
    const audio = document.getElementById("music");
    const playMusicButton = document.getElementById("second-button-text");

    playMusicButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playMusicButton.textContent = "Pause Music";
        } else {
            audio.pause();
            playMusicButton.textContent = "Play Music";
        }
    });
});
