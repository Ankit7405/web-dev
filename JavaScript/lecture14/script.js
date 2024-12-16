// Now we will be seeing the properties that would be used to make changes in CSS via JS

// Style property is used to get the css properties and also make changes here
let element = document.querySelector('#fpara');
// This will return the css properties used on a particular element
console.log(element.style);
// This is how it is changed a per our convience
// But the only problem with this apprroch is that we can tareget only one property at a single time
element.style.backgroundColor = 'Green';

// Now there is also one property named cssText that is used to change multiple CSS prperty at once
let spara = document.getElementById('spara');
// Returns the inline css property of a element
spara.style.cssText;
spara.style.cssText = 'background-color: black; padding: 0.5rem; color: white';

// We can also set attribuites for a particular element
let fdiv = document.getElementById('fdiv');
// With this method we can give 2 arguments like first we can tell which attribuite to enter and then give it's value
fdiv.setAttribute('class', 'myDiv');

// With property className we can get the className assigned to it and also can change the name of the existing class
fdiv.className;
fdiv.className = 'thisDiv';

// We have classList property that tell about the class allocated to the element in the form of an array
let firstPara = document.getElementById('fpara');
// This will return array of class list
firstPara.classList;
// We can add class name also for an selected element
firstPara.classList.add('thirdClass');
// Removal
firstPara.classList.remove('thirdClass');
// Toggle propety which tells about the visibillity about the class
firstPara.classList.toggle('firstClass');
// Chekcs the avaibility abut the class
firstPara.classList.contains('firstClass');

