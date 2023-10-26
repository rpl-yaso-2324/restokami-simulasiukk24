const register = () => {
  let name = document.getElementById("nameUser");
  let telp = document.getElementById("telp");

  if (name.value && telp.value) {
    localStorage.setItem("name", name.value);
    localStorage.setItem("telp", telp.value);
    window.open("login.html", "_self");
  } else {
    alert("Silakan isi dengan benar!");
  }
};
