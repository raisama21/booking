const fnameInput = document.querySelector(".fname-input")
const lnameInput = document.querySelector(".lname-input")
const emailInput = document.querySelector(".email-input")
const messageInput = document.querySelector(".message-input")
const phonenumberInput = document.querySelector(".phonenumber-input")

const submitBtn = document.querySelector(".submit-btn")

submitBtn.addEventListener("click", function() {
    const contactInfo = {
        firstName: fnameInput.value,
        lastName: lnameInput.value,
        email: emailInput.value,
        message: messageInput.value,
        phonenumber: phonenumberInput.value,
    }

    fnameInput.value = ""
    lnameInput.value = ""
    emailInput.value = ""
    messageInput.value = ""
    phonenumberInput.value = ""

    console.log(contactInfo)
})
