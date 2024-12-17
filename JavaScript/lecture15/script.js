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
// Since we are appending onto div but what if we want to append more than one chaild so that process will take 1reflow and 1repaint 
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
