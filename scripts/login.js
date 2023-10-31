const user = {
    username: "iki",
    password: "123"
};


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const pass = document.getElementById("pass").value;
    const validName = name == user.username;
    const validPass = pass == user.password;

    if (name.trim() === "" || pass.trim() === "") {
        
        alert('Username & password harus diisi');
    } else {
        console.log(validName);
        console.log(validPass);
        if (validName === false || validPass === false) {
        alert('username & password tidak sesuai');
        document.getElementById("name").value = ""; 
        document.getElementById("pass").value = "";
    } else {
        window.location.href = "pages/menuPage.html";
    }}
})





