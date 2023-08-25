const loginBtn = document.querySelector(".log");
const registerBtn = document.querySelector(".register");
const LoginForm = document.querySelector(".Login");
const RegisterForm = document.querySelector(".Register");
const signUpBtn = document.querySelector(".signUp");
const backBtn = document.querySelector(".back");

loginBtn.addEventListener("click", () => {

    RegisterForm.classList.remove("register_show");
    LoginForm.classList.remove("Login-hide");
    registerBtn.classList.remove("active")
    loginBtn.classList.add("active")
})
registerBtn.addEventListener("click", () => {
    LoginForm.classList.add("Login-hide");
    RegisterForm.classList.add("register_show");
    loginBtn.classList.remove("active")
    registerBtn.classList.add("active")
})
signUpBtn.addEventListener("click", () => {

    LoginForm.classList.add("Login-hide");
    RegisterForm.classList.add("register_show");
    loginBtn.classList.remove("active")
    registerBtn.classList.add("active")
})
backBtn.addEventListener("click", () => {
    RegisterForm.classList.remove("register_show");
    LoginForm.classList.remove("Login-hide");
    registerBtn.classList.remove("active")
    loginBtn.classList.add("active")
})