const username = document.getElementById('username');
const password = document.getElementById('password');
const verif = () => {
        if (username.value === "Rijmi" && password.value === "123") {
            window.location.href = "pages/menu.html";
        } else if (username.value !== "Rijmi") {
            alert('Nama Pelanggan salah');
        } else {
            alert('Nomor Pelanggan salah');
        }
    return false; 
}

let saldo = 150000
document.getElementById("saldo").innerHTML = saldo
const bayar = () => {
    let harga = 101000
    if (saldo < harga ) {
        alert("Saldo Anda Tidak Cukup");
    } else {
        saldo = saldo - harga;
        window.location.href = "payment.html"
    } 
  }