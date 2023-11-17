function validateForm() {
    const emailInput = document.getElementById('exampleFormControlInput1');
    const wishTextarea = document.getElementById('exampleFormControlTextarea1');
    const emailError = document.getElementById('emailError');
    const wishError = document.getElementById('wishError');

    emailError.textContent = '';
    wishError.textContent = '';

    let valid = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        valid = false;
    }

    if (wishTextarea.value.trim() === '') {
        wishError.textContent = 'Please enter your wish';
        valid = false;
    }

    if (valid) {
    }
}


