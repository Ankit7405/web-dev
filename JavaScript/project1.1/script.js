document.getElementById('timerForm').addEventListener('submit', function (e) {
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
        document.getElementById('timer').textContent = 'Time is up!';
        document.getElementById('progress').style.width = '100%';
        return;
      }
  
      // Calculate time components
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      // Update timer display
      document.getElementById('timer').textContent = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      // Update progress bar
      const progress = Math.min(((now - startDate) / totalDuration) * 100, 100);
      document.getElementById('progress').style.width = progress + '%';
    }
  
    updateTimer(); // Initial call
    const timerInterval = setInterval(updateTimer, 1000);
  });
  