document.addEventListener('DOMContentLoaded', () => {

    const users = [
    { username: 'abhijitha', password: 'Aa@12345', santa_friend: 'Goutam' },
    { username: 'abhilashk', password: 'Ak@89012', santa_friend: 'Sudheesh Surendran' },
    { username: 'abishekps', password: 'Ap@34567', santa_friend: 'Sreepriya T P' },
    { username: 'adwaidhcr', password: 'Ac@78901', santa_friend: 'Abhilash Kalliparambil' },
    { username: 'ajayck', password: 'Ac@90123', santa_friend: 'Avany Sathyan' },
    { username: 'amals', password: 'As@67890', santa_friend: 'Rishikesh' },
    { username: 'aneeshkumar', password: 'Ak@23456', santa_friend: 'Sneha Ps' },
    { username: 'aravind', password: 'Ar@23456', santa_friend: 'Priyanka' },
    { username: 'aswani', password: 'Aw@12345', santa_friend: 'Tina Kishore' },
    { username: 'aswinps', password: 'Ap@67890', santa_friend: 'Jeena Jayesh' },
    { username: 'avanys', password: 'As@90123', santa_friend: 'Nisha M C' },
    { username: 'ayishap', password: 'Ap@34567', santa_friend: 'Linda A' },
    { username: 'bimalmp', password: 'Bm@56789', santa_friend: 'Jomet' },
    { username: 'deepakp', password: 'Dp@78901', santa_friend: 'Karuna K L' },
    { username: 'goutam', password: 'Go@56789', santa_friend: 'Sajiya Chandran' },
    { username: 'hareeshkp', password: 'Hk@45678', santa_friend: 'Rajinish' },
    { username: 'harisa', password: 'Ha@34567', santa_friend: 'Hemanth' },
    { username: 'hemanth', password: 'Ht@78901', santa_friend: 'Karthika M' },
    { username: 'jeenaj', password: 'Jj@45678', santa_friend: 'Sowmya Wilson' },
    { username: 'johng', password: 'Jg@23456', santa_friend: 'Adwaidh Cr' },
    { username: 'jomet', password: 'Jo@56789', santa_friend: 'Sourav Jayaraj' },
    { username: 'josekuttyj', password: 'Jj@89012', santa_friend: 'Melvin Soyi' },
    { username: 'karthikam', password: 'Km@89012', santa_friend: 'Mihil Mohan' },
    { username: 'karunakl', password: 'Kk@56789', santa_friend: 'Abishek Ps' },
    { username: 'lekshmid', password: 'Ld@78901', santa_friend: 'Muhammed Azeem' },
    { username: 'lichum', password: 'Lm@90123', santa_friend: 'Nibin T B' },
    { username: 'lindaa', password: 'La@23456', santa_friend: 'Manish' },
    { username: 'lloydl', password: 'Ll@89012', santa_friend: 'Sumesh Venugopalan' },
    { username: 'manish', password: 'Mn@45678', santa_friend: 'Bimal Mithran P B' },
    { username: 'maryj', password: 'Mj@89012', santa_friend: 'Haris Ali' },
    { username: 'melvins', password: 'Ms@23456', santa_friend: 'Parthan R S' },
    { username: 'mihilm', password: 'Mm@45678', santa_friend: 'Lekshmi Devi' },
    { username: 'mijinj', password: 'Mj@23456', santa_friend: 'Subatra' },
    { username: 'muhammeda', password: 'Ma@78901', santa_friend: 'Varsha Andrea' },
    { username: 'nibintb', password: 'Nt@67890', santa_friend: 'Rakhee Girish' },
    { username: 'nisanatho', password: 'No@67890', santa_friend: 'Hareesh Kumar P' },
    { username: 'nishamc', password: 'Nm@34567', santa_friend: 'Smanitha' },
    { username: 'parthanrs', password: 'Pr@90123', santa_friend: 'Josekutty Jose' },
    { username: 'priyanka', password: 'Pk@56789', santa_friend: 'Abhijith Ab' },
    { username: 'rajinish', password: 'Rn@34567', santa_friend: 'Smitha Krishnan' },
    { username: 'rakheeg', password: 'Rg@45678', santa_friend: 'Lichu Mathew' },
    { username: 'rishikesh', password: 'Rk@12345', santa_friend: 'Ayisha Parveen' },
    { username: 'sajiyac', password: 'Sc@78901', santa_friend: 'Ajay Ck' },
    { username: 'shihasi', password: 'Si@34567', santa_friend: 'Aravind' },
    { username: 'shilpac', password: 'Sc@12345', santa_friend: 'Deepak Padattil' },
    { username: 'smanitha', password: 'Sm@67890', santa_friend: 'Mary Jimmy' },
    { username: 'smithak', password: 'Sm@45678', santa_friend: 'Shilpa Chacko' },
    { username: 'snehaps', password: 'Sp@23456', santa_friend: 'Soorya George' },
    { username: 'sooryag', password: 'Sg@34567', santa_friend: 'Sunitha K M' },
    { username: 'souravj', password: 'Sj@12345', santa_friend: 'Sujith Ps' },
    { username: 'sowmyaw', password: 'Sw@12345', santa_friend: 'Amal S' },
    { username: 'sreepriyatp', password: 'St@45678', santa_friend: 'Aneeshkumar' },
    { username: 'stephyj', password: 'Sj@78901', santa_friend: 'Viji Shibu' },
    { username: 'subatra', password: 'Su@67890', santa_friend: 'Mijin Johnson' },
    { username: 'sudheeshs', password: 'Ss@90123', santa_friend: 'Shihas Iqbal' },
    { username: 'sujithps', password: 'Sp@12345', santa_friend: 'Stephy Joshy' },
    { username: 'sumeshv', password: 'Sv@89012', santa_friend: 'Nisanath O' },
    { username: 'sunithakm', password: 'Sk@12345', santa_friend: 'Aswin Ps' },
    { username: 'tinak', password: 'Tk@67890', santa_friend: 'Lloyd Lazar' },
    { username: 'varshaa', password: 'Va@45678', santa_friend: 'John George' },
    { username: 'vijis', password: 'Vs@56789', santa_friend: 'Aswani' }
];

    // Handle Login form submission
    function handleLogin(event) {
        event.preventDefault(); // Prevent form from submitting

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Log to debug the entered values
        console.log("Entered username: ", username);
        console.log("Entered password: ", password);

        // Show the preloader while processing login
        document.getElementById('loginContainer').style.display = 'none'; // Hide login form
        document.getElementById('preloader').style.display = 'flex'; // Show preloader

        // Simulate a delay for the preloader (replace this with actual login check)
        setTimeout(function() {
            // Check for the user in the hardcoded data (case insensitive comparison)
            const user = users.find(user => user.username.toLowerCase() === username.toLowerCase() && user.password === password);

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

    // Snowflakes generation code (same as before)
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
