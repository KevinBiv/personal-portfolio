window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 300);
})

// CONTACT ME FORM VALIDATION

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const nameError = document.querySelector(".name-error-message");
const emailError = document.querySelector(".email-error-message");
const subjectError = document.querySelector(".subject-error-message");
const messageError = document.querySelector(".message-error-message");
const topError = document.querySelector(".top-error-message");

console.log(nameError);

    const nameValue = name.value;
    const emailValue = email.value;
    const subjectValue = subject.value;
    const messageValue = message.value;

    const validateInputs = () => {

        if(nameValue.trim() == "") {
            nameError.classList.add("hidden-class");
        }
        
        if(emailValue.trim() == "") {
            emailError.classList.add("hidden-class");
        }

        if(subjectValue.trim() == "") {
            subjectError.classList.add("hidden-class");
        }

        if(messageValue.trim() == "") {
            messageError.classList.add("hidden-class");
        }


        if(nameValue.trim() == "") {
            nameError.classList.remove("hidden-class");
        }

        if(emailValue.trim() == "") {
            emailError.classList.remove("hidden-class");
        }

        if(subjectValue.trim() == "") {
            subjectError.classList.remove("hidden-class");
        }

        if(messageValue.trim() == "") {
            messageError.classList.remove("hidden-class");
        }
    }

    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // if(nameValue == "" || emailValue == "" || subjectValue == "" || messageValue == "") {
        //     topError.classList.remove("hidden-class");
        // }
        validateInputs();
    })

    name.addEventListener('input', () => {
        nameError.classList.add("hidden-class")
    })

    email.addEventListener('input', () => {
        emailError.classList.add("hidden-class")
    })

    subject.addEventListener('input', () => {
        subjectError.classList.add("hidden-class")
    })

    message.addEventListener('input', () => {
        messageError.classList.add("hidden-class")
    })

// const checkInputs = () => {
//     const nameValue = name.value;
//     const emailValue = email.value;
//     const subjectValue = subject.value;
//     const messageValue = message.value;

//     if(nameValue == "") {
//         nameError.classList.remove("hidden-class");
//         console.log("Error at Name Input");
//     } else if(messageValue == "") {
//         nameError.classList.remove("hidden-class");
//         console.log("Error at Name Input");
//     } else if(subjectValue == "") {
//         subjectError.classList.remove("hidden-class");
//         console.log("Error at Name Input");
//     } else if(messageError == "") {
//         messageError.classList.remove("hidden-class");
//         console.log("Error at Message Input");
//     } else {
//         nameError.classList.add("hidden-class");
//     }
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     checkInputs();
// })