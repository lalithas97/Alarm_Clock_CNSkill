// Function to update the clock every second
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const currentTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    document.getElementById('clock-time').innerText = currentTime;
}

// Function to set alarm
function setAlarm() {
    // Get values from input fields
    const hour = parseInt(document.getElementById('hour').value);
    const minute = parseInt(document.getElementById('minute').value);
    const second = parseInt(document.getElementById('second').value);
    const ampm = document.getElementById('ampm').value;

    // Check if values are valid
    if (isNaN(hour) || isNaN(minute) || isNaN(second)) {
        alert('Please enter valid values for hour, minute, and second.');
        return;
    }

    // Check if values are within limits
    if (hour < 1 || hour > 12 || minute < 0 || minute > 59 || second < 0 || second > 59) {
        alert('Please enter valid values for hour (1-12), minute (0-59), and second (0-59).');
        return;
    }

    // Create alarm time string
    const alarmTime = `${hour}:${minute}:${second} ${ampm}`;
    // Create list item element for the alarm
    const alarmItem = document.createElement('li');
    alarmItem.className = 'list-group-item d-flex justify-content-between align-items-center'; // Add flexbox classes
    alarmItem.innerText = alarmTime;

    // Create delete button for the alarm
    const deleteButton = document.createElement('i');
    deleteButton.className = 'fas fa-trash delete-button';
    // Event listener to remove the alarm on button click
    deleteButton.addEventListener('click', function() {
        alarmItem.remove();
    });

    // Append delete button to alarm item
    alarmItem.appendChild(document.createTextNode('  ')); // Add space between time and delete button
    alarmItem.appendChild(deleteButton);
    // Append alarm item to alarm list
    document.getElementById('alarm-list').appendChild(alarmItem);
}

// Initialization function
function init() {
    // Update clock initially
    updateClock();
    // Set interval to update clock every second
    setInterval(updateClock, 1000);
    // Add event listener to set alarm button
    document.getElementById('set-alarm').addEventListener('click', setAlarm);
}

// Call initialization function
init();
