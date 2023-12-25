
//ELEMENT VARIABLES
let firstName = document.getElementById("firstName");
let surName = document.getElementById("surName");
let newPassword = document.getElementById("newPassword");
let retypePassword = document.getElementById("retypePassword");
let emailAddress = document.getElementById("emailInput");

let instruction = document.getElementById("passwordInstruction");
let body = document.querySelector("body");
let birthYear = (2023 - (document.getElementById("yearSelect").value));



//CHECKS IF TWO PASSWORDS MATCHED
function checkPassword() {
    const newPassword = document.getElementById("newPassword");
    const retypePassword = document.getElementById("retypePassword");

    if (newPassword.value === "" && retypePassword.value === "") {
        retypePassword.style.outlineColor = "red";

    } else if (newPassword.value === retypePassword.value) {
        document.getElementById("retypePassword").setCustomValidity("");
        retypePassword.style.outlineColor = "#4dd889";
        retypePassword.style.transition = "0.2s";

    } else {
        document.getElementById("retypePassword").setCustomValidity("Passwords do not match");
        retypePassword.style.outlineColor = "red";
        retypePassword.style.transition = "0.2s";
    }
}



//PASSWORD INSTRUCTION POPUP TEXT
function passwordInstruction() {
    if (newPassword === document.activeElement) {
        instruction.textContent = "8 Characters. At least one lowercase, upcase letter & number";
        instruction.style.marginBottom = "10px";
        instruction.style.marginLeft = "-95px";
    }
}



//CLEARS PASSWORD INSTRUCTION
function clearInstruction() {
    if (body === document.activeElement) {
        instruction.textContent = "";
        instruction.style.marginBottom = "0px"
        instruction.style.transition = "0.2s"

    } else if (retypePassword === document.activeElement) {
        instruction.textContent = "";
        instruction.style.marginBottom = "0px"
        instruction.style.transition = "0.2s"

    } else if (emailAddress === document.activeElement) {
        instruction.textContent = "";
        instruction.style.marginBottom = "0px"
        instruction.style.transition = "0.2s"

    } else if (firstName === document.activeElement) {
        instruction.textContent = "";
        instruction.style.marginBottom = "0px"
        instruction.style.transition = "0.2s"
        
    } else if (surName === document.activeElement) {
        instruction.textContent = "";
        instruction.style.marginBottom = "0px"
        instruction.style.transition = "0.2s"
    }
}



//AFTER FORM IS SUBMITTED
function validateForm() {
    return alert("The form has been successfully submitted to the FBI. Thank you");
}