// // This is end date that we have hardcode for now and returning time in millisecs
// //const endDate = new Date("18 Dec, 2024 23:50:00").getTime();
// //const startDate = new Date().getTime();



// function parseCustomDate(dateString){
//     let date = new Date(Date.parse(dateString));
//     console.log(dateString);
//     return date.getTime();
// }

// function wrapper(event){
//     event.preventDefault();
//     const endDate = parseCustomDate(document.getElementById('endDate').value);
//     const startDate = parseCustomDate(document.getElementById('startDate').value);
//     console.log("Start Date : ", startDate);
//     console.log("End Date : ", endDate);
//     setInterval(function updateTimer(){
//     const now = new Date().getTime();

//     // This what we are mentioning with respect to progress bar
//     const distanceCovered = now - startDate;
//     const distancePending = endDate - now;

//     const oneDayInMillis = (24 * 60 * 60 * 1000);
//     const oneHourInMillis  = (60 * 60 * 1000);
//     const oneMinInMIllis = (60*1000);
//     const oneSecondInMillis = (1000);

//     // Calculation of days, hrs, min and secs from millisec of date we got
//     const days = Math.floor(distancePending / (oneDayInMillis));
//     console.log("Days" + days);
    
//     const hrs = Math.floor((distancePending%(oneDayInMillis) / (oneHourInMillis)));

//     const mins = Math.floor((distancePending%(oneHourInMillis))/(oneMinInMIllis));

//     const secs = Math.floor((distancePending%(oneMinInMIllis))/(oneSecondInMillis));

//     // Population of data into UI components
//     document.getElementById('days').innerHTML = days;
//     document.getElementById('hours').innerHTML = hrs;
//     document.getElementById('minutes').innerHTML = mins;
//     document.getElementById('seconds').innerHTML = secs;

//     // Calulation of width percentage for progress bar
//     const totalDistance = endDate - startDate;
//     const disPercentage = (distanceCovered/totalDistance)*100;
//     console.log("Progress % : " + disPercentage);
    
    
//     // Setting values for progress bar
//     document.getElementById("progressbar").style.width = disPercentage + "%";

//     if(distancePending < 0 ) {
//         clearInterval(setInterval);
//         document.getElementById("countdown").innerHTML = "EXPIRED";
//         document.getElementById("progress-bar").style.width = "100%";
//     }
// }, 1000);
// }

// // document.getElementById('dateForm').addEventListener('submit', setInterval(function updateTimer(){
// //     const endDate = parseCustomDate(document.getElementById('endDate').textContent);
// //     const startDate = parseCustomDate(document.getElementById('startDate').textContent);
// //     console.log(startDate);
// //     console.log(endDate);
// //     const now = new Date().getTime();

// //     // This what we are mentioning with respect to progress bar
// //     const distanceCovered = now - startDate;
// //     const distancePending = endDate - now;

// //     const oneDayInMillis = (24 * 60 * 60 * 1000);
// //     const oneHourInMillis  = (60 * 60 * 1000);
// //     const oneMinInMIllis = (60*1000);
// //     const oneSecondInMillis = (1000);

// //     // Calculation of days, hrs, min and secs from millisec of date we got
// //     const days = Math.floor(distancePending / (oneDayInMillis));

// //     const hrs = Math.floor((distancePending%(oneDayInMillis) / (oneHourInMillis)));

// //     const mins = Math.floor((distancePending%(oneHourInMillis))/(oneMinInMIllis));

// //     const secs = Math.floor((distancePending%(oneMinInMIllis))/(oneSecondInMillis));

// //     // Population of data into UI components
// //     document.getElementById('days').innerHTML = days;
// //     document.getElementById('hours').innerHTML = hrs;
// //     document.getElementById('minutes').innerHTML = mins;
// //     document.getElementById('seconds').innerHTML = secs;

// //     // Calulation of width percentage for progress bar
// //     const totalDistance = endDate - startDate;
// //     const disPercentage = (distanceCovered/totalDistance)*100;
    
    
// //     // Setting values for progress bar
// //     document.getElementById("progressbar").style.width = disPercentage + "%";

// //     if(distancePending < 0 ) {
// //         clearInterval(setInterval);
// //         document.getElementById("countdown").innerHTML = "EXPIRED";
// //         document.getElementById("progress-bar").style.width = "100%";
// //     }
// // }, 1000));

// // This function tells that we have to call update timer for every sec, and same would be populated to UI days and all
// // let x = setInterval(function updateTimer(){
// //     const now = new Date().getTime();

// //     // This what we are mentioning with respect to progress bar
// //     const distanceCovered = now - startDate;
// //     const distancePending = endDate - now;

// //     const oneDayInMillis = (24 * 60 * 60 * 1000);
// //     const oneHourInMillis  = (60 * 60 * 1000);
// //     const oneMinInMIllis = (60*1000);
// //     const oneSecondInMillis = (1000);

// //     // Calculation of days, hrs, min and secs from millisec of date we got
// //     const days = Math.floor(distancePending / (oneDayInMillis));

// //     const hrs = Math.floor((distancePending%(oneDayInMillis) / (oneHourInMillis)));

// //     const mins = Math.floor((distancePending%(oneHourInMillis))/(oneMinInMIllis));

// //     const secs = Math.floor((distancePending%(oneMinInMIllis))/(oneSecondInMillis));

// //     // Population of data into UI components
// //     document.getElementById('days').innerHTML = days;
// //     document.getElementById('hours').innerHTML = hrs;
// //     document.getElementById('minutes').innerHTML = mins;
// //     document.getElementById('seconds').innerHTML = secs;

// //     // Calulation of width percentage for progress bar
// //     const totalDistance = endDate - startDate;
// //     const disPercentage = (distanceCovered/totalDistance)*100;
    
    
// //     // Setting values for progress bar
// //     document.getElementById("progressbar").style.width = disPercentage + "%";

// //     if(distancePending < 0 ) {
// //         clearInterval(setInterval);
// //         document.getElementById("countdown").innerHTML = "EXPIRED";
// //         document.getElementById("progress-bar").style.width = "100%";
// //     }
// // }, 1000);

// document.getElementById('dateForm').addEventListener('submit', wrapper);


document.getElementById('dateForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
  
    if (startDate >= endDate) {
      alert('End date must be later than the start date.');
      return;
    }
  
    const totalDuration = endDate - startDate;
  
    function updateTimer() {
      const now = new Date();
      const timeRemaining = endDate - now;
  
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        document.getElementById('countdown').textContent = 'Time is up!';
        document.getElementById('progressbar').style.width = '100%';
        return;
      }
  
      // Calculate time components
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      // Update timer display
    //   document.getElementById('timer').textContent = 
    //     `${days}d ${hours}h ${minutes}m ${seconds}s`;
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
  
      // Update progress bar
      const progress = Math.min(((now - startDate) / totalDuration) * 100, 100);
      document.getElementById('progressbar').style.width = progress + '%';
    }
  
    updateTimer(); // Initial call
    const timerInterval = setInterval(updateTimer, 1000);
  });
  
