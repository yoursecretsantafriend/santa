document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded users data
    const users = [
        { username: 'Muhammed Azeem', password: 'password1', santa_friend: 'Aswani' },
        { username: 'Nibin T.B', password: 'password2', santa_friend: 'Avany Sathyan' },
        { username: 'Priyanka', password: 'password3', santa_friend: 'Jeena Jayesh' },
        { username: 'Manish', password: 'password4', santa_friend: 'Jomet' },
        { username: 'Rajinish', password: 'password5', santa_friend: 'Varsha Andrea' },
        { username: 'Mijin Johnson', password: 'password6', santa_friend: 'Aswin PS' },
        { username: 'Sowmya Wilson', password: 'password7', santa_friend: 'Deepak Padattil' },
        { username: 'Lichu Mathew', password: 'password8', santa_friend: 'Adwaidh CR' },
        { username: 'Mary Jimmy', password: 'password9', santa_friend: 'Parthan R S' },
        { username: 'Stephy Joshy', password: 'password10', santa_friend: 'Mihil Mohan' },
        { username: 'Subatra', password: 'password11', santa_friend: 'Sajiya Chandran' },
        { username: 'Viji Shibu', password: 'password12', santa_friend: 'Josekutty Jose' },
        { username: 'Jeena Jayesh', password: 'password13', santa_friend: 'Mijin Johnson' },
        { username: 'Abishek PS', password: 'password14', santa_friend: 'Smitha Krishnan' },
        { username: 'Sneha PS', password: 'password15', santa_friend: 'Shihas Iqbal' },
        { username: 'Rishikesh', password: 'password16', santa_friend: 'Abhilash Kalliparambil' },
        { username: 'Sudheesh Surendran', password: 'password17', santa_friend: 'Lekshmi Devi' },
        { username: 'Sumesh Venugopalan', password: 'password18', santa_friend: 'Sourav Jayaraj' },
        { username: 'Adwaidh CR', password: 'password19', santa_friend: 'Ajay CK' },
        { username: 'Tina Kishore', password: 'password20', santa_friend: 'Ayisha Parveen' },
        { username: 'Bimal Mithran P B', password: 'password21', santa_friend: 'Hemanth' },
        { username: 'Rakhee Girish', password: 'password22', santa_friend: 'Sudheesh Surendran' },
        { username: 'Nisha M C', password: 'password23', santa_friend: 'Shilpa Chacko' },
        { username: 'Aneeshkumar', password: 'password24', santa_friend: 'Sreepriya T P' },
        { username: 'Sourav Jayaraj', password: 'password25', santa_friend: 'Smanitha' },
        { username: 'Ajay CK', password: 'password26', santa_friend: 'Haris Ali' },
        { username: 'Lloyd Lazar', password: 'password27', santa_friend: 'Abhijith AB' },
        { username: 'Sajiya Chandran', password: 'password28', santa_friend: 'Sneha PS' },
        { username: 'Smanitha', password: 'password29', santa_friend: 'Sujith PS' },
        { username: 'Goutam', password: 'password30', santa_friend: 'Sumesh Venugopalan' },
        { username: 'Hareesh Kumar P', password: 'password31', santa_friend: 'Viji Shibu' },
        { username: 'Shihas Iqbal', password: 'password32', santa_friend: 'Rakhee Girish' },
        { username: 'Aravind', password: 'password33', santa_friend: 'Manish' },
        { username: 'Sujith PS', password: 'password34', santa_friend: 'Karthika M' },
        { username: 'Parthan R S', password: 'password35', santa_friend: 'Soorya George' },
        { username: 'Josekutty Jose', password: 'password36', santa_friend: 'Abishek PS' },
        { username: 'Hemanth', password: 'password37', santa_friend: 'Aneeshkumar' },
        { username: 'Amal S', password: 'password38', santa_friend: 'Bimal Mithran P B' },
        { username: 'Jomet', password: 'password39', santa_friend: 'Melvin Soyi' },
        { username: 'Varsha Andrea', password: 'password40', santa_friend: 'Linda A' },
        { username: 'Haris Ali', password: 'password41', santa_friend: 'Nisanath O' },
        { username: 'Linda A', password: 'password42', santa_friend: 'Tina Kishore' },
        { username: 'Sunitha K M', password: 'password43', santa_friend: 'Nibin T.B' },
        { username: 'Avany Sathyan', password: 'password44', santa_friend: 'Mary Jimmy' },
        { username: 'Karthika M', password: 'password45', santa_friend: 'Subatra' },
        { username: 'Deepak Padattil', password: 'password46', santa_friend: 'Goutam' },
        { username: 'Aswin PS', password: 'password47', santa_friend: 'Nisha M C' },
        { username: 'Karuna K L', password: 'password48', santa_friend: 'Sunitha K M' },
        { username: 'Sreepriya T P', password: 'password49', santa_friend: 'Karuna K L' },
        { username: 'Soorya George', password: 'password50', santa_friend: 'Hareesh Kumar P' },
        { username: 'John George', password: 'password51', santa_friend: 'Amal S' },
        { username: 'Abhijith AB', password: 'password52', santa_friend: 'Priyanka' },
        { username: 'Mihil Mohan', password: 'password53', santa_friend: 'Muhammed Azeem' },
        { username: 'Abhilash Kalliparambil', password: 'password54', santa_friend: 'Rishikesh' },
        { username: 'Nisanath O', password: 'password55', santa_friend: 'Rajinish' },
        { username: 'Aswani', password: 'password56', santa_friend: 'Stephy Joshy' },
        { username: 'Ayisha Parveen', password: 'password57', santa_friend: 'Sowmya Wilson' },
        { username: 'Melvin Soyi', password: 'password58', santa_friend: 'Lloyd Lazar' },
        { username: 'Lekshmi Devi', password: 'password59', santa_friend: 'John George' },
        { username: 'Smitha Krishnan', password: 'password60', santa_friend: 'Aravind' },
        { username: 'Shilpa Chacko', password: 'password61', santa_friend: 'Lichu Mathew' }
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
});


document.addEventListener("DOMContentLoaded", () => {
    const snowflakeContainer = document.createElement("div");
    document.body.appendChild(snowflakeContainer);

    // Generate multiple snowflakes
    for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement("div");
        snowflake.textContent = "❄"; // Unicode for a snowflake
        snowflake.classList.add("snowflake");

        // Randomize initial position and falling properties
        snowflake.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        snowflake.style.animationDuration = Math.random() * 5 + 5 + "s"; // Random falling speed (5–10s)
        snowflake.style.animationDelay = Math.random() * 5 + "s"; // Random start delay
        snowflake.style.fontSize = Math.random() * 1.5 + 1 + "rem"; // Random size

        snowflakeContainer.appendChild(snowflake);

        // Remove snowflake once it finishes falling (optional for performance)
        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
        });
    }

    // Add more snowflakes periodically (optional for continuous effect)
    setInterval(() => {
        const snowflake = document.createElement("div");
        snowflake.textContent = "❄";
        snowflake.classList.add("snowflake");
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
        snowflake.style.animationDelay = Math.random() * 5 + "s";
        snowflake.style.fontSize = Math.random() * 1.5 + 1 + "rem";
        snowflakeContainer.appendChild(snowflake);

        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
        });
    }, 1000);
});


// Audio toggle functionality
const audio = document.getElementById("music"); // Ensure audio element is targeted correctly
const playMusicButton = document.getElementById("second-button-text");

playMusicButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playMusicButton.textContent = "Pause Music"; // Update button text to indicate Pause
    } else {
        audio.pause();
        playMusicButton.textContent = "Play Music"; // Revert button text back to Play
    }
});
