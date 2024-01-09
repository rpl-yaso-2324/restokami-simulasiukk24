const user = {
  username: "ezar",
  password: "123",
};

// const nama = document.getElementById("username")
// const password = document.getElementById("password")

// const login = () =>{
//   if (user.username != nama.value){
//     alert("username salah")
//   } else {
//     if(user.password != password.value){
//       alert("password salah")
//     } else {
//       window.location.href = "menupage.html"
//     }
//   }
// }

const nama = document.getElementById("username")
const password = document.getElementById("password")

const login= () => {
  if(nama.value == "" || password.value == ""){
    alert("username & password tidak boleh kosong!")
  } else if (nama.value != user.username || password.value != user.password){
    alert("username atau password salah");
  } else{
    window.location.href = "menupage.html"
  }
}