const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";
    const userrData = {
        NAME: username,
        MESSAGE: message
    };
const database = firebase.database().ref();
    database.on('child_added', displayMEassageOnBoard);


    //Update database here

}

// Set database "child_added" event listener here