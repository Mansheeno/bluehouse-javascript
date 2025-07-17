var database = [
    {
        username: "salisu",
        password: "adamu"
    },
    {
        username: "mansh",
        password: "123",
    },
    {
        username: "daniel",
        password: "777",
    },
    {
        username: "sarah",
        password: "samuel",
    },
    {
        username: "bello",
        password: "999",
    }
]; 

var newsfeed = [
    {
        username: "Tboy",
        timeline: "Javascript is hard"
    },
    {
        username: "salisu",
        timeline: "Today is a good day"
    },
    {
        username: "mary",
        timeline: "Good day people"
    },
    {
        username: "daniel",
        timeline: "Javascript is hard"
    },
    {
        username: "sarah",
        timeline: "Today is a bad day"
    },
    {
        username: "bello",
        timeline: "Good evening everyone"
    }
]

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
                return true;
            }
    }
    return false;
}

function signIn(username, password){
    if (isUserValid(username, password)) {
        console.log(newsfeed);
} else {
    alert("Wrong User Details!");
}
}

var userNamePrompt = prompt("What is your username:");
var passwordPrompt = prompt("What is your password:");


signIn(userNamePrompt, passwordPrompt);