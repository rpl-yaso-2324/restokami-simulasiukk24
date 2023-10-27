const register = () => {
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value && password.value) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    window.open("login.html", "_self");
  } else {
    alert("Silakan isi dengan benar!");
  }
};
