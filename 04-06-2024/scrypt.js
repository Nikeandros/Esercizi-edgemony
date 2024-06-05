function printCurrentDateAndTime() {
  const currentDate = new Date();
  const formattedDateTime = currentDate.toLocaleString();
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  
  console.log('Current date:', formattedDateTime);
  console.log('Current time:', formattedTime);

  document.getElementById('current-date').textContent = formattedDateTime;
  document.getElementById('current-time').textContent = formattedTime;
}

setInterval(printCurrentDateAndTime, 1000);

printCurrentDateAndTime();
