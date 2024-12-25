document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded users data
    const users = [
    { "username": "Abhijith Ab", "password": "Aa@12345", "santa_friend": "Goutam" },
    { "username": "Abhilash Kalliparambil", "password": "Ak@89012", "santa_friend": "Sudheesh Surendran" },
    { "username": "Abishek Ps", "password": "Ap@34567", "santa_friend": "Sreepriya T P" },
    { "username": "Adwaidh Cr", "password": "Ac@78901", "santa_friend": "Abhilash Kalliparambil" },
    { "username": "Ajay Ck", "password": "Ac@90123", "santa_friend": "Avany Sathyan" },
    { "username": "Amal S", "password": "As@67890", "santa_friend": "Rishikesh" },
    { "username": "Aneeshkumar", "password": "Ak@23456", "santa_friend": "Sneha Ps" },
    { "username": "Aravind", "password": "Ar@23456", "santa_friend": "Priyanka" },
    { "username": "Aswani", "password": "Aw@12345", "santa_friend": "Tina Kishore" },
    { "username": "Aswin Ps", "password": "Ap@67890", "santa_friend": "Jeena Jayesh" },
    { "username": "Avany Sathyan", "password": "As@90123", "santa_friend": "Nisha M C" },
    { "username": "Ayisha Parveen", "password": "Ap@34567", "santa_friend": "Linda A" },
    { "username": "Bimal Mithran P B", "password": "Bm@56789", "santa_friend": "Jomet" },
    { "username": "Deepak Padattil", "password": "Dp@78901", "santa_friend": "Karuna K L" },
    { "username": "Goutam", "password": "Go@56789", "santa_friend": "Sajiya Chandran" },
    { "username": "Hareesh Kumar P", "password": "Hk@45678", "santa_friend": "Rajinish" },
    { "username": "Haris Ali", "password": "Ha@34567", "santa_friend": "Hemanth" },
    { "username": "Hemanth", "password": "Ht@78901", "santa_friend": "Karthika M" },
    { "username": "Jeena Jayesh", "password": "Jj@45678", "santa_friend": "Sowmya Wilson" },
    { "username": "John George", "password": "Jg@23456", "santa_friend": "Adwaidh Cr" },
    { "username": "Jomet", "password": "Jo@56789", "santa_friend": "Sourav Jayaraj" },
    { "username": "Josekutty Jose", "password": "Jj@89012", "santa_friend": "Melvin Soyi" },
    { "username": "Karthika M", "password": "Km@89012", "santa_friend": "Mihil Mohan" },
    { "username": "Karuna K L", "password": "Kk@56789", "santa_friend": "Abishek Ps" },
    { "username": "Lekshmi Devi", "password": "Ld@78901", "santa_friend": "Muhammed Azeem" },
    { "username": "Lichu Mathew", "password": "Lm@90123", "santa_friend": "Nibin T B" },
    { "username": "Linda A", "password": "La@23456", "santa_friend": "Manish" },
    { "username": "Lloyd Lazar", "password": "Ll@89012", "santa_friend": "Sumesh Venugopalan" },
    { "username": "Manish", "password": "Mn@45678", "santa_friend": "Bimal Mithran P B" },
    { "username": "Mary Jimmy", "password": "Mj@89012", "santa_friend": "Haris Ali" },
    { "username": "Melvin Soyi", "password": "Ms@23456", "santa_friend": "Parthan R S" },
    { "username": "Mihil Mohan", "password": "Mm@45678", "santa_friend": "Lekshmi Devi" },
    { "username": "Mijin Johnson", "password": "Mj@23456", "santa_friend": "Subatra" },
    { "username": "Muhammed Azeem", "password": "Ma@78901", "santa_friend": "Varsha Andrea" },
    { "username": "Nibin T B", "password": "Nt@67890", "santa_friend": "Rakhee Girish" },
    { "username": "Nisanath O", "password": "No@67890", "santa_friend": "Hareesh Kumar P" },
    { "username": "Nisha M C", "password": "Nm@34567", "santa_friend": "Smanitha" },
    { "username": "Parthan R S", "password": "Pr@90123", "santa_friend": "Josekutty Jose" },
    { "username": "Priyanka", "password": "Pk@56789", "santa_friend": "Abhijith Ab" },
    { "username": "Rajinish", "password": "Rn@34567", "santa_friend": "Smitha Krishnan" },
    { "username": "Rakhee Girish", "password": "Rg@45678", "santa_friend": "Lichu Mathew" },
    { "username": "Rishikesh", "password": "Rk@12345", "santa_friend": "Ayisha Parveen" },
    { "username": "Sajiya Chandran", "password": "Sc@78901", "santa_friend": "Ajay Ck" },
    { "username": "Shihas Iqbal", "password": "Si@34567", "santa_friend": "Aravind" },
    { "username": "Shilpa Chacko", "password": "Sc@12345", "santa_friend": "Deepak Padattil" },
    { "username": "Smanitha", "password": "Sm@67890", "santa_friend": "Mary Jimmy" },
    { "username": "Smitha Krishnan", "password": "Sm@45678", "santa_friend": "Shilpa Chacko" },
    { "username": "Sneha Ps", "password": "Sp@23456", "santa_friend": "Soorya George" },
    { "username": "Soorya George", "password": "Sg@34567", "santa_friend": "Sunitha K M" },
    { "username": "Sourav Jayaraj", "password": "Sj@12345", "santa_friend": "Sujith Ps" },
    { "username": "Sowmya Wilson", "password": "Sw@12345", "santa_friend": "Amal S" },
    { "username": "Sreepriya T P", "password": "St@45678", "santa_friend": "Aneeshkumar" },
    { "username": "Stephy Joshy", "password": "Sj@78901", "santa_friend": "Viji Shibu" },
    { "username": "Subatra", "password": "Su@67890", "santa_friend": "Mijin Johnson" },
    { "username": "Sudheesh Surendran", "password": "Ss@90123", "santa_friend": "Shihas Iqbal" },
    { "username": "Sujith Ps", "password": "Sp@12345", "santa_friend": "Stephy Joshy" },
    { "username": "Sumesh Venugopalan", "password": "Sv@89012", "santa_friend": "Nisanath O" },
    { "username": "Sunitha K M", "password": "Sk@12345", "santa_friend": "Aswin Ps" },
    { "username": "Tina Kishore", "password": "Tk@67890", "santa_friend": "Lloyd Lazar" },
    { "username": "Varsha Andrea", "password": "Va@45678", "santa_friend": "John George" },
    { "username": "Viji Shibu", "password": "Vs@56789", "santa_friend": "Aswani" }
];
    
// Handle Login form submission
    function handleLogin(event) {
        event.preventDefault(); // Prevent form from submitting

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Show the preloader while processing login
        document.getElementById('loginContainer').style.display = 'none'; // Hide login form
        document.getElementById('preloader').style.display = 'flex'; // Show preloader

        // Simulate a delay for the preloader (replace this with actual login check)
        setTimeout(function() {
            // Check for the user in the hardcoded data
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                // Hide preloader and display home page content
                document.getElementById('preloader').style.display = 'none';
                document.getElementById('homeContainer').style.display = 'block'; // Show home page

                // Set the dynamic New Year Friend message
                document.getElementById('friendName').textContent = ` ${user.santa_friend}`;
            } else {
                // Invalid login, show alert and re-display the login form
                alert('Invalid username or password. Please try again.');
                document.getElementById('loginContainer').style.display = 'block'; // Show login form again
                document.getElementById('preloader').style.display = 'none'; // Hide preloader
            }
        }, 3000); // Delay for 3 seconds (simulate loading)
    }

    // Attach event listener to the form
    document.getElementById('loginForm').addEventListener('submit', handleLogin);

    // Snowflakes generation code
    const snowflakeContainer = document.createElement("div");
    snowflakeContainer.classList.add("snowflake-container"); // Optional: add a class to style the container
    document.body.appendChild(snowflakeContainer);

    const maxSnowflakes = 30; // Limit the number of snowflakes

    // Generate snowflakes
    let snowflakeCount = 0;  // Counter for the number of snowflakes created

    function generateSnowflake() {
        if (snowflakeCount >= maxSnowflakes) {
            return; // Stop generating if the number exceeds the limit
        }

        const snowflake = document.createElement("div");
        snowflake.textContent = "❄"; // Unicode for a snowflake

        snowflake.classList.add("snowflake");

        // Randomize initial position and falling properties
        snowflake.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        snowflake.style.animationDuration = Math.random() * 2 + 2 + "s"; // Random falling speed (5–10s)
        snowflake.style.animationDelay = Math.random() * 3 + "s"; // Random start delay
        snowflake.style.fontSize = Math.random() * 1.5 + 1 + "rem"; // Random size

        snowflakeContainer.appendChild(snowflake);

        // Increment the snowflake counter
        snowflakeCount++;

        // Remove snowflake once it finishes falling (optional for performance)
        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
            snowflakeCount--;  // Decrement the snowflake count when it is removed
        });
    }

    // Generate snowflakes continuously with a delay (to keep them from all appearing at once)
    setInterval(generateSnowflake, 500); // New snowflake every 500ms

    // Audio toggle functionality
    const audio = document.getElementById("music"); // Ensure audio element is targeted correctly
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
