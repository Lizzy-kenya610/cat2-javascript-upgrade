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


