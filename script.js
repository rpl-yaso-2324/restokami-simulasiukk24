const username = document.getElementById('username');
const password = document.getElementById('password');
const verif = () => {
        if (username.value === "Iki" && password.value === "123") {
            window.location.href = "pages/menuPage.html";
        } else if (username.value !== "Iki") {
            alert('Nama Pelanggan salah');
        } else {
            alert('Nomor Pelanggan salah');
        }
    return false; 
}

let saldo = 500000
document.getElementById("saldo").innerHTML = saldo
const bayar = () => {
    let harga = 101000
    if (saldo < harga ) {
        alert("Saldo Anda Tidak Cukup");
    } else {
        saldo = saldo - harga;
        window.location.href = "paymentPage.html"
    } 
  }