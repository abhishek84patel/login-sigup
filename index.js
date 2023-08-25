const loginBtn = document.querySelector(".log");
const registerBtn = document.querySelector(".register");
const LoginForm = document.querySelector(".Login");
const RegisterForm = document.querySelector(".Register");
console.log(LoginForm, RegisterForm)
loginBtn.addEventListener("click", () => {

    RegisterForm.classList.remove("register_show");
    LoginForm.classList.remove("Login-hide");
})
registerBtn.addEventListener("click", () => {
    LoginForm.classList.add("Login-hide");
    RegisterForm.classList.add("register_show");
})