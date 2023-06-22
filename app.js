// var goToSignUp = document.getElementById("go-to-signup");
// var goToLogin = document.getElementById("go-to-login");

// goToSignUp.addEventListener("click", function () {
//     loginScreen.style.display = "none";
//     signupScreen.style.display = "flex";
// });
// goToLogin.addEventListener("click", function () {
//     loginScreen.style.display = "flex";
//     signupScreen.style.display = "none";
// });

var getUsernameInput = document.getElementById("get-username-input");
var getEmailInput = document.getElementById("get-email-input");
var getPasswordInput = document.getElementById("get-password-input");
var signupBtn = document.getElementById("signup-btn");

var loginEmailInput = document.getElementById("login-email-input");
var loginPasswordInput = document.getElementById("login-password-input");
var loginBtn = document.getElementById("login-btn");

var loginScreen = document.getElementById("login-screen");
var signupScreen = document.getElementById("signup-screen");

signupBtn.addEventListener("click", setUserInfo);

var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var userName = localStorage.getItem("userName");
var userEmail = localStorage.getItem("userEmail");
var userPassword = localStorage.getItem("userPassword");

function validateInputsAndGetValues() {
  if (userName == undefined || userEmail == undefined || userPassword == undefined) {
    if (getUsernameInput.value.trim() == "") {
      swal({
        icon: 'error',
        title: 'Incorrect Username',
        text: 'Please enter a correct username!',
      });
    } else {
      userName = getUsernameInput.value;
    }

    if (!emailformat.test(getEmailInput.value)) {
      swal({
        icon: 'error',
        title: 'Incorrect Email',
        text: 'Please enter a correct email!',
      });
    } else {
      userEmail = getEmailInput.value;
    }

    if (getPasswordInput.value.length <= 8) {
      swal({
        icon: 'error',
        title: 'Password too short',
        text: 'Password length must be above 8 characters!',
      });
    } else {
      userPassword = getPasswordInput.value;
    }
  } else {
    return true;
  }
}

var signedIn = userName !== null && userEmail !== null && userPassword !== null;

function setUserInfo() {
    event.preventDefault()
  if (validateInputsAndGetValues()) {
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("userPassword", userPassword);

    signedIn = true;
    signupScreen.style.display = "none";
    loginScreen.style.display = "flex";
  }
}

function showLoginIfSignedIn() {
  if (signedIn) {
    signupScreen.style.display = "none";
    loginScreen.style.display = "flex";
    console.log(localStorage);
  }
}

showLoginIfSignedIn();

loginBtn.addEventListener("click", userLogin);

function userLogin() {
  // console.log(userName)
  // console.log(userEmail)
  // console.log(userPassword)
  event.preventDefault();
  if (userEmail == loginEmailInput.value && userPassword == loginPasswordInput.value) {
    swal({
      icon: 'success',
      title: `Welcome ${userName} !`
    });
    setTimeout(function () {
      window.location.href = "quiz.html";
    },2000)
  } else {
    loginEmailInput.value = "";
    loginPasswordInput.value = "";
    swal({
      icon: 'error',
      title: 'Incorrect Password or Email',
      text: 'Enter correct password or email',
    });
  }

}

