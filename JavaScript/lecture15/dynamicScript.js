// This is the dynamic script file
console.log("dynamicScript.js has been loaded!");

// Example DOM manipulation
const heading = document.getElementById("heading");
if (heading) {
    heading.textContent = "Content changed by dynamicScript.js!";
    heading.style.color = "blue";
    heading.style.fontSize = "2em";
}

// Add a new paragraph dynamically
const paragraph = document.createElement("p");
paragraph.textContent = "This paragraph was added by dynamicScript.js.";
document.body.appendChild(paragraph);