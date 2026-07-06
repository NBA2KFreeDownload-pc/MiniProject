// Dynamic Greeting

let greeting = document.getElementById("greeting");

let hour = new Date().getHours();

if (greeting) {

    if (hour < 12) {
        greeting.innerHTML = "Good Morning!";
    }
    else if (hour < 18) {
        greeting.innerHTML = "Good Afternoon!";
    }
    else {
        greeting.innerHTML = "Good Evening!";
    }

}

// Contact Form Validation

let form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name == "" || email == "" || message == "") {

            alert("Please fill in all fields.");

            event.preventDefault();

        }

    });

}