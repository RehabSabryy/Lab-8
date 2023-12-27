// Part 1 ---------------------------------------------------------------------------

function login() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let emailValidation = document.getElementById("email_validation");
    let passwordValidation = document.getElementById("password_validation");
    let message =document.getElementById("message")

    emailValidation.textContent = "";
    passwordValidation.textContent = "";
console.log(validateEmail(email.value));
console.log(validatePassword(password.value));

    // Validate email
    if (!validateEmail(email.value)) {
        emailValidation.textContent = "Please enter a valid email address.";
        return false;
    }

    // Validate password
    if (!validatePassword(password.value)) {
        passwordValidation.textContent = "Password must be at least 8 characters, contain at least one number, capital and small letters";
        return false;
    }


    if (validateEmail(email.value) && validatePassword(password.value)) {
        message.append("Login Successful!");
      
            
            return true; 
        
    } 
    return false 
}
function test(){
    console.log(login());
}

// Validation Task
function validatePassword(password) {
    var passRegex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    console.log(passRegex.test(password));
   
    return passRegex.test(password);
}

function validateEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

// ____________________________________________________________________________________________  

// Part 2 


let taskName = document.getElementById('task');
let addBtn = document.getElementById('add');
let addedTask = document.getElementById('added-tasks');
var items=[];

// if condition to check if the user has data before 
if(localStorage.getItem("Tasks") !=null) {
    items = JSON.parse(localStorage.getItem("Tasks"));
    displayTasks();
}


// button function
function addTask() {
    var task = taskName.value;

    if (task === '') {
        alert("You can write anything to do!");
        return;
    }

    items.push(task);
    localStorage.setItem("Tasks", JSON.stringify(items));

    displayTasks();  // Call the displayTasks function

    // calling clear form
    clearForm();
}

// Function to display tasks
function displayTasks() {
    if (addedTask) {
        
        addedTask.innerHTML = ''; // Clear the existing content
    }

    for (let task of items) {
        var li = document.createElement("li");
        li.append(task);

        // Create done and delete buttons
        var doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.classList.add('done-btn'); // Add the class for styling
        li.appendChild(doneButton);

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn'); // Add the class for styling
        li.appendChild(deleteButton);
if (addedTask) {
    
    addedTask.appendChild(li);
}

        doneButton.addEventListener('click', function() {
            this.parentNode.classList.toggle('done');
        });

        doneButton.addEventListener('click', function() {
            this.classList.toggle('done-active'); 
        });

        deleteButton.addEventListener('click', function () {
            let index = items.indexOf(task);
            items.splice(index, 1);
            localStorage.setItem("Tasks", JSON.stringify(items)); // Update local storage
            this.parentNode.remove();
        });
    }
}

function clearForm() {
    // to clear input field
    taskName.value = "";
}
function redirect() {
    window.location.replace('part3.html');
}


