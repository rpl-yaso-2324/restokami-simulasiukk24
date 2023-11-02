let RestoPay = document.getElementById("resto-pay");
let cash = document.getElementById("Cash");
let saldo = document.getElementById("saldo-resto-pay").value;
let total_bayar = document.getElementById("total-bayar").value;
console.log(localStorage.getItem("total"));

const formatUang = (rupiah) => {
    return rupiah.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    });
};

let data = localStorage.getItem("total");
let total = (document.getElementById("total").innerHTML = formatUang(
    parseInt(data)
));
let saldo_u = 50000;
const saldo_user = (document.getElementById("saldo").innerHTML = 
formatUang(saldo_u));

const bayar = () => {
    let RestoPay = document.getElementById("resto-pay").checked;
    let Cash = document.getElementById("Cash").checked;

    console.log("pilih reso pay" + RestoPay);
    console.log("pilih cash " + Cash);
    console.log("saldo " + saldo);
    console.log("total pembayaran " + total_bayar);

    //cek apakah memilih metode Restopay
    if (!RestoPay && !Cash) {
        openModal();
        document.getElementById("message").innerHTML = "pilih metode pembayaran terlebih dahulu !";
    } else {
        if (RestoPay === true) {
            if (saldo_u < data) {
                openModal();
                document.getElementById("message").innerHTML = "saldo tidak cukup";
                document.getElementById("imgpayment").src = "../assets/img/store.png";
            } else {
                window.location.href = "invoice.html";
            }
        } else if (Cash === true) {
            console.log("Berhasil pindah halaman ke cash");
            window.location.href =  "invoice.html"
        }
    }
};

        //open Modal
const openModal = () => {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("overLay").style.display = "block";
};

const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("overLay").style.display = "none";
};

document.getElementById("closeModal").addEventListener("click", () => {
    closeModal();
});

document.getElementById("overLay").addEventListener("click", () => {
    closeModal();
});

        //klik container pembayaran
const klikRestopay = document.querySelector(".container-metode-pembayaran");
const klikCash =document.querySelector(".conatiner-metode-cash");

let checkedResto = false;
klikRestopay.addEventListener("click", () => {
    checkedResto = !checkedResto;
    RestoPay.checked = checkedResto;
});

let checkedCash = false;
klikRestopay.addEventListener("click", () => {
    checkedCash = !checkedCash;
    cash.checked = checkedCash;
});

