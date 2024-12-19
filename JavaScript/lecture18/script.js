// Concept of async and await
// For any asyncronous function we can mark it as async and it will be executed asyncronously
// And we have to remember that it will return promise in response
// This approch is present in order to make promises code efficent
// And also this makes async code to behave in sync manner

async function getData(){
    //get request
    // So marking await here tell js that now this method will try to behave like sync code
    // Because till the the time the response from this function is not returned till that time our code will not go to the next step
    // This fetch api is like rest template if we compare with Java
    let getResponse = await fetch('https://jsonplaceholder.typicode.com/comments').then( async (response) => {
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let jsonResponse = await getResponse.json();
        return jsonResponse;
    }).then( (response) => {
        console.log("Response from get call " + response);
    }).catch((error) => {
        console.error("Error occured " + error);
    });
}

async function postData(){
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "userId": 505,
            "id": 505,
            "title": "Ankit Malviya",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        })
    };
    // For calls other then get we need to pass headers and body with fetch request
    // and for that we create an option object and pass all the required things with that 
    let response =  await fetch(url, options);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
}

async function updateData(){
    let uri = 'https://jsonplaceholder.typicode.com/posts/1';
    let options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: 1,
            title: 'Updated Post',
            body: 'This is the updated content of the post.',
            userId: 1,
          })
    };
    let putResponse = await fetch(uri, options);
    let jsonResponse = await putResponse.json();
    console.log(jsonResponse);
}

async function deleteData() {
    let uri = 'https://jsonplaceholder.typicode.com/posts/1';
    let options = {
        headers: {method: 'DELETE'}
    };
    let deleteResponse = await fetch(uri, options);
    let jsonResponse = await deleteResponse.json();
    console.log(jsonResponse);
}

async function functionCall(){
    await postData();
    await getData();
    await postData();
    await deleteData();
}

functionCall();
