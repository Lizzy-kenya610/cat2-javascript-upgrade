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
   card.innerHTML = "<h3>" +program.name + "</h3>" +
   "<p>" + program.description + "</p>";

   programList.appendChild(card);
});

let wishlistInput = document.querySelector("#wishlistInput");
let addWishlistButton = document.querySelector("#wishlistForm button");
let wishlistItems = document.querySelector("#wishlistItems");

addWishlistButton.addEventListener("click", event=> {
    event.preventDefault();
    if (wishlistInput.value!=""){
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


