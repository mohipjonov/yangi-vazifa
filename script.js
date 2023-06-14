let email = prompt("Emailingizni kiriting!")
let parol = prompt("Parolingizni kiriting!")
let h2 = document.querySelector("#h2")
if (email == "admin@gmail.com" && parol == 12345) {
    h2.innerHTML = "<b>Admin hush kelibsiz!</b>"
} else if (email == "cilent@gmail.com" && parol == 1234) {
    h2.innerHTML = "<b>Cilent hush kelibsiz!</b>"
} else if (email == "maderator@gmail.com" && parol == 123) {
    h2.innerHTML = "<b>Maderator hush kelibsiz!</b>"
} else {
    h2.textContent = "Parol yoki Emailingizda xatolik bor!!!"
}