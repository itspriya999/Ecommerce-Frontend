let valueDisplayes = document.querySelectorAll(".num");
let interval = 5000;

valueDisplayes.forEach((valueDisplay)=>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    }, duration)
});

// const readMoreBtn1 = document.getElementById('make_red1');
// const infoWindow1 = document.getElementById('infoWindow1');
// // Function to toggle the visibility of the info window
// function toggleInfoWindow() {
//     if (infoWindow1.style.display === 'block') {
//         infoWindow1.style.display = 'none';
//     } else {
//         infoWindow1.style.display = 'block';
//     }
// }
// // Attach click event listener to the "Read More" button
// readMoreBtn1.addEventListener('click', toggleInfoWindow);
// // Close button functionality
// const closeBtn1 = document.getElementById('closeBtn');
// closeBtn1.addEventListener('click', toggleInfoWindow);


// const readMoreBtn2 = document.getElementById('make_red2');
// const infoWindow2 = document.getElementById('infoWindow2');
// // Function to toggle the visibility of the info window
// function toggleInfoWindow() {
//     if (infoWindow2.style.display === 'block') {
//         infoWindow2.style.display = 'none';
//     } else {
//         infoWindow2.style.display = 'block';
//     }
// }
// // Attach click event listener to the "Read More" button
// readMoreBtn2.addEventListener('click', toggleInfoWindow);
// // Close button functionality
// const closeBtn2 = document.getElementById('closeBtn');
// closeBtn2.addEventListener('click', toggleInfoWindow);


// const readMoreBtn3 = document.getElementById('make_red3');
// const infoWindow3 = document.getElementById('infoWindow3');
// // Function to toggle the visibility of the info window
// function toggleInfoWindow() {
//     if (infoWindow3.style.display === 'block') {
//         infoWindow3.style.display = 'none';
//     } else {
//         infoWindow3.style.display = 'block';
//     }
// }
// // Attach click event listener to the "Read More" button
// readMoreBtn3.addEventListener('click', toggleInfoWindow);
// // Close button functionality
// const closeBtn3 = document.getElementById('closeBtn');
// closeBtn3.addEventListener('click', toggleInfoWindow);


// const readMoreBtn4 = document.getElementById('make_red4');
// const infoWindow4 = document.getElementById('infoWindow4');
// // Function to toggle the visibility of the info window
// function toggleInfoWindow() {
//     if (infoWindow4.style.display === 'block') {
//         infoWindow4.style.display = 'none';
//     } else {
//         infoWindow4.style.display = 'block';
//     }
// }
// // Attach click event listener to the "Read More" button
// readMoreBtn4.addEventListener('click', toggleInfoWindow);
// // Close button functionality
// const closeBtn4 = document.getElementById('closeBtn');
// closeBtn4.addEventListener('click', toggleInfoWindow);

// Get elements by class name
const readMoreBtns = document.getElementsByClassName('read-more-btn');
const infoWindows = document.getElementsByClassName('info-window');

// Attach event listeners to each "Read More" button
for (let i = 0; i < readMoreBtns.length; i++) {
    readMoreBtns[i].addEventListener('click', function() {
        toggleInfoWindow(infoWindows[i]);
    });
}

// Function to toggle the visibility of the info window
function toggleInfoWindow(infoWindow) {
    if (infoWindow.style.display === 'block') {
        infoWindow.style.display = 'none';
    } else {
        infoWindow.style.display = 'block';
    }
}





//for login and signup
// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {
    // Select the signup form
    const signupForm = document.querySelector('#signupModal form');

    // Add event listener for form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // You can perform additional validation here if needed
        const email = document.querySelector('#signupModal #exampleInputEmail1').value;
        const password = document.querySelector('#signupModal #exampleInputPassword1').value;
        const confirmPassword = document.querySelector('#signupModal #cexampleInputPassword1').value;

        // Example: Basic validation for demonstration purposes
        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Simulate a successful signup (you would replace this with actual backend code)
        // For demonstration, just show an alert
        alert('Signup successful!\nYou can now log in.');

        // Close the signup modal
        $('#signupModal').modal('hide');

        // Optionally, redirect the user to another page or perform other actions
        // window.location.href = '/dashboard'; // Example: Redirect to a dashboard page
    });
});
