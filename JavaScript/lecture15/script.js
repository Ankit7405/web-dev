// Analysis of performance in js code

// Code 1:
// In order to measure performance we have a method perfmance.now which tells about the time stamp at which our code has ran
// And but substracting final - initial we can tell about the time it took to run that piece of code
let time1 = performance.now();
for(let i = 0; i < 100; i++){
    let element = document.createElement('p');
    element.textContent = "This is para number " + i;
    // Here we are repetately doing reflow and repaint so there would be 100 operations of these
    // Which slows the render process and also performance of code
    document.body.appendChild(element);
}
let time2 = performance.now();
let time = time2 - time1;
console.log("Time to perform code 1 operation ", time);

// Code 2: Optimised approch
let time3 = performance.now();
let div = document.createElement('mydiv');
for(let i = 0; i < 100; i++){
    let element = document.createElement('p');
    element.textContent = "This is para number " + i;
    // Here we are appending our p into a single div so for this process no reflow and repaint is done because that would only be done when changes are made in document
    div.appendChild(element);
}
// Here at this point only reflow and reapaint is done 
document.body.appendChild(div);
let time4 = performance.now();
let timeCode = time4 - time3;
console.log("Time to perform code 2 operation ", timeCode);

// Code 3 : Best approch
// Since we are appending onto div but what if we want to append more than one child so that process will take 1 reflow and 1 repaint 
// So now we will be using one other type of element i.e. document fragment
// The advantage of this fragment is that like appending any number of child will not increase count of reflow and repaints
let time5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i = 0; i < 100; i++){
    let element = document.createElement('p');
    element.textContent = "This is para number " + i + " using fragment";
    fragment.appendChild(element);
}
document.body.appendChild(fragment);
let time6 = performance.now();
let timeFragment = time6 - time5;
console.log("Time to perform code 3 operation ", timeFragment);
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

