// Now we are dealing with the events and action based on some actions
function onClick(event){
    // This event tells about the click event and we have some parameters inside that which we can use 
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Ankit";
}

let fpara = document.getElementById('fpara');
// By using eventListrers we can define the actions and also like time when it should be performed
fpara.addEventListener('click', onClick);
// Similarly we can remove the event listner also
// fpara.removeEventListener('click', onClick);

// Generally there are some elemets that have their default behaviour we can change those behaviour also
let fanchor = document.getElementById('fanchor');
function changeDefault(event){
    // This line of code will remove the deault function of anchor tag to take us to different hyperlink
    event.preventDefault();
    fanchor.textContent = "Click is done";
}
fanchor.addEventListener('click', changeDefault);

// Optimised way of attaching of event listners and also handling case of many event listners
let paras = document.querySelectorAll('p');

function alertPara(event){
    if(event.target.nodeName !== "SPAN"){
        alert("You have clicked on para " + event.target.textContent);
    }
}

// for(let i = 0; i < paras.length; i++){
//     let indpara = paras[i];
//     indpara.addEventListener('click', alertPara);
// }

// One more optimised solution is use event listner on the warapper or parent div
let mydiv = document.getElementById('mydiv');
mydiv.addEventListener('click', alertPara);

// To dynamically load scripts in JavaScript and ensure they are added only after the DOM is fully loaded, you can use the DOMContentLoaded event. This event ensures that the HTML document has been completely loaded and parsed, allowing safe DOM manipulation and script injection.
function dynamicScriptLoad(){
    console.log("DOM fully loaded and parsed!");
    const script = document.createElement("script");
    script.src = "dynamicScript.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
        console.log("Dynamic script loaded successfully!");
    });

    script.addEventListener("error", () => {
        console.error("Failed to load the script.");
    });
}
document.addEventListener('DOMContentLoaded', dynamicScriptLoad);

