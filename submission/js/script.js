let programList = document.querySelector("#program-list");
let programs = [
    {
        name: "Scratch Programming",
        description: "Learn coding basics using visual blocks, animations and games."
    },
    {
        name: "python Turtle",
        description: "Build graphics, animations and interactive applications using Python."
    },

    {
        name: "Robotics",
        description: "Apply computing and engineering skills to build robots."
    }
];
programs.forEach(function (program) {
    let card = document.createElement("div");
    card.className = "program-card";
    card.innerHTML = "<h3>" + program.name + "</h3>" +
        "<p>" + program.description + "</p>";

    programList.appendChild(card);
});

let wishlistInput = document.querySelector("#wishlistInput");
let addWishlistButton = document.querySelector("#wishlistForm button");
let wishlistItems = document.querySelector("#wishlistItems");

addWishlistButton.addEventListener("click", event => {
    event.preventDefault();
    if (wishlistInput.value != "") {
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.className = "delete-btn";

        li.textContent = wishlistInput.value;
        button.textContent = "Delete";
        button.addEventListener("click", event => {
            li.remove();
        });
        li.appendChild(button);
        wishlistItems.appendChild(li);
        wishlistInput.value = "";

    }

    else {

        alert("Please enter a course.");

    }
});

let regForm = document.querySelector("#regform");
let formMessage = document.querySelector("#form-message");
//console.log(regForm);
//console.log(formMessage);
regForm.addEventListener("submit", event => {
    event.preventDefault();
    let parentName = document.querySelector("#parent-name");
    let studentName = document.querySelector("#student-name");
    let studentAge = document.querySelector("#student-age");
    let phone = document.querySelector("#phone");

    if (parentName.value == "" || studentName.value == "" || studentAge.value == "" || phone.value == "") {
        formMessage.textContent = "Please fill in all the required fields";
        formMessage.style.color = "red";
    } else if (studentAge.value < 12 || studentAge.value > 15) {

        formMessage.textContent = "Student age must be between 12 and 15 years.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Registration was succcessful for " + studentName.value + "!";
        formMessage.style.color = "green";

        parentName.value = "";
        studentName.value = "";
        studentAge.value = "";
        phone.value = "";
    }
});
