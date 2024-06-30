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
