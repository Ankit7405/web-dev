document.addEventListener('DOMContentLoaded', function(){

    
    const searchButton = document.getElementById('search-button');

    const userNameInput = document.getElementById('user-name-input');

    const statsContainer = document.querySelector('.stats-container');

    const easyProgressCircle = document.querySelector('.easy-progress');
    const mediumProgressCircle = document.querySelector('.medium-progress');
    const hardProgressCircle = document.querySelector('.hard-progress');

    const easyLable = document.querySelector('#easy-lable');
    const mediumLable = document.querySelector('#medium-lable');
    const hardLable = document.querySelector('#hard-lable');

    const cardStatsContainer = document.querySelector('.stats-card');

    // User name validation function
    function validateUserName(username){
        if(username.trim() === ""){
            alert("Username should not be empty");
            return false;
        }
        return true;
        // const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        // const isMatching = regex.test(username);
        // if(!isMatching){
        //     alert("Enter valid username");
        // }
        // return isMatching;
    }

    function updateProgress(solved, total, lable, circle){
        const progressPercentage = (solved / total) * 100;
        console.log("Percentage", progressPercentage);
        circle.style.setProperty('--progress-degree', `${progressPercentage}%`);
        // console.log(circle.style.cssText);
        lable.textContent = `${solved}/${total}`;
    }

    function displayUserData(parsedData){
        if(parsedData.errors){
            console.log("Error found");
            statsContainer.style.setProperty("display", "none");
        }else{
            console.log("Error not found");
            statsContainer.style.setProperty("display", "block");
        }
        console.log(statsContainer.style.cssText);
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;

        const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;



        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLable, easyProgressCircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLable, mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLable, hardProgressCircle);

        const cardData = [
            {label: "Overall Submissions:", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions},
            {label: "Overall Easy Submissions:", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions},
            {label: "Overall Medium Submissions:", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions},
            {label: "Overall Hard Submissions:", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions}
        ];

        console.log("Cards data : ", cardData);
        
        cardStatsContainer.innerHTML = cardData.map(
            (data) => 
                    `<div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                    </div>`
        ).join("");
    }

    async function fetchUserData(username){
        try {

        searchButton.textContent = "Searching...";
        searchButton.disable = true;
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
        const targetUrl = 'https://leetcode.com/graphql/';

        const myHeaders = new Headers();
        myHeaders.append('content-type','application/json');

        const graphql = JSON.stringify({
            query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
            variables: { "username": `${username}` }
        });
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: graphql
        };
        
        const response = await fetch(proxyUrl+targetUrl, requestOptions);
        if(!response.ok){
            throw new Error("Unable to fetch user details");
        }
        const parsedData = await response.json();
        console.log("Looging response: ", parsedData);

        displayUserData(parsedData);

        } catch (error) {
            alert("No data found for this user");
            // statsContainer.innerHTML = `<p class="error-desc">No data found for this user</p>`;
        }finally{
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    searchButton.addEventListener('click', function(event){
        const username = userNameInput.value;
        console.log("User name: ", username);

        if(validateUserName(username)){
            fetchUserData(username);
        }
        

    });
});