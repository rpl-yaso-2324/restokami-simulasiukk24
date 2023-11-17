let restoPay = document.getElementById("resto-pay")
let cash = document.getElementById("cash")
let saldoPay = document.getElementById("saldo-resto-pay").value
let totalPembayaran = document.getElementById("total-pembayaran").value
console.log(localStorage.getItem("total"));
const formatUang = (Rp) => {
    return Rp.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      });
}
let data = localStorage.getItem("total");
let total = (document.getElementById("total").innerHTML = formatUang(parseInt(data)));
let saldo = 500000;
const saldoUser = (document.getElementById("saldo").innerHTML = formatUang(saldo));

const bayar = () => {
    let restoPay = document.getElementById("resto-pay").checked;
    let cash = document.getElementById("cash").checked;

    console.log("pilih restopay" + restoPay);
    console.log("pilih cash" + cash);
    console.log("saldo" + saldo);
    console.log("totalPembayaran" + totalPembayaran);

    if (!restoPay && !cash) {
        alert("pilih metode pembayaran terlebih dahulu")
    } else {
        if (restoPay === true) {
            if (saldo < data) {
                alert("saldo tidak cukup")
            } else {
                saldo - totalPembayaran
                location.href = "paymentPage.html"
            }
        } else if (cash === true ) {
            console.log("berhasil pindah halman ke cash");
            location.href = "cashPage.html"
        }
    }
}