window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 300);
})

// Popup
function togglePopup() {
    document.getElementById('popup-1').classList.toggle("active");
}

function calculatorPopup() {
    document.getElementById('popup-2').classList.toggle("active");
}

// CONTACT ME FORM VALIDATION

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

const checkInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    if(nameValue === '') {
        setErrorFor(name, "Name is required")
    } else {
        setSuccessFor(name);
    }

    if(emailValue === '') {
        setErrorFor(email, "Email is required")
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Email is invalid")
    } else {
        setSuccessFor(email)
    }

    if(subjectValue === '') {
        setErrorFor(subject, "Subject is required")
    } else {
        setSuccessFor(subject)
    }

    if(messageValue === '') {
        setErrorFor(message, "Message is required")
    } else {
        setSuccessFor(message)
    }
}

function setSuccessFor(input) {
    const formControl = input.parentElement.parentElement;
    const errorMessage = document.querySelector('small');

    // removing the error class
    formControl.classList.remove('error');

    // removing the error message
    errorMessage.innerText = "";

    // adding success class
    formControl.classList.add('success');
}

function setErrorFor(input, message) {
    const formControl = input.parentElement.parentElement;
    const errorMessage = document.querySelector('small');

    // adding 

    // adding error class
    formControl.classList.add('error');

    // adding error message in the small tag
    errorMessage.innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}