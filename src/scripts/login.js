const user = {
    username:  "dicky",
    password: "123",
};

        // login js
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const validName = name == user.username;
    const validPass = pass == user.password;

    if (name.trim() === "" || pass.trim() === "") {
        window.alert("username dan password di isi cuyyy");
    } else {
        console.log(validName);
        console.log(validPass);
        if (validName === false || validPass === false) {
            window.alert("username dan pasword salah");
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        } else {
            location.href = "home.html"
            alert("selamat datang cihuyyyy")
        }
    }
})