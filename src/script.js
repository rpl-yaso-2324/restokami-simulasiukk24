const masuk = () =>{
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    if (username.value === 'agnanira' && password.value === '123') {
        alert("Selamat datang!");
        window.open("/src/pages/menu.html", "_self")
    } else {
        alert("Password atau username salah...")
    }
    username.value="";
    password.value="";
}