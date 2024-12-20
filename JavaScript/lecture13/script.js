// // These conent cannot be directly run here since in node we don't have a dom element like our browser
// // This will return the whole element
// document.getElementById("firstHeading");

// // This will return HTML collection
// document.getElementsByClassName("textClass");

// // This is used to access element using tag name and also return HTML Collection
// document.getElementsByTagName("p");

// // Now in css we represent class with . and id with #
// // So just by using one method we want to access all then we can use query selector
// // For id
// document.querySelector("#firstHeading");

// // For class
// // Basically if we have more then one result then we use querySelectorAll
// // Becuase if we use just querySelector then only first occurance is returned
// document.querySelectorAll(".textClass");

// // For tags
// document.querySelectorAll("p");

// // Below tags are for getting and updating elements and it's contents
// // id.innerHTML
// // This will return the content for this tag(chid content)
// firstHeading.innerHTML

// // This is how we use to update the content
// firstHeading.innerHTML = 'Updated content' 

// // Basically outerHTML returns the parent and child content also
// let str = firstHeading.outerHTML;

// // Similarly in this way we can also update the content
// firstHeading.outerHTML = 'Updated content' 

// // Now we have text-content and innerText
// let element123 = document.querySelector('#main-content')
// // This prints the text that is basically rendered on our html page
// // Output : 'This is para 1\n\nThis is heading 1\n\nThis is para 2'
// element123.innerText

// // This prints the text content that we have entered on our html file that is enter and tabs are also recorded
// // Output : '\n        \n            This is para 1\n            \n                This is heading 1\n            \n        \n        \n            This is para 2\n        \n    '
// element123.textContent

// // Addtion of elements in the webpage
// // We can use append child operation for this
// let fheading = document.createElement('h1');
// fheading.textContent = "This is a sample heading";
// let bodyTag = document.querySelector('body');
// // While using this operation we need to keep the thing in mind that the child element will be added at the end 
// bodyTag.appendChild(fheading);

// In appendChild we have a limitation that element will always be inserted in the end
// If we want to insert element at random position then we have to use insertAdjustmentElement
// let elementSelected = document.querySelector('#mydiv');
// let newElement = document.createElement('span');
// newElement.textContent = "This is new element span";
// //elementSelected.insertAdjacentElement('beforebegin', newElement);
// //elementSelected.insertAdjacentElement('afterbegin', newElement);
// elementSelected.insertAdjacentElement('afterend', newElement);

// Removal of elements in DOM
// let parent = document.querySelector('#mydiv');
// This line can also be written in different way
let chid = document.querySelector('#first_para');
let parent = chid.parentElement;
parent.removeChild(chid);
