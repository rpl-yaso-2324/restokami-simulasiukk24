// const dom = document;
let restoPay = document.getElementById("resto-pay")
let desc = localStorage.getItem("desc")
let name = localStorage.getItem("name")
ingfo.innerHTML = `Anda telah memesan ${name} : ${desc}`
let cash = document.getElementById("cash")
let saldo = document.getElementById("saldo-resto-pay").value //inputan saldo resto pay
let totalPembayaran = document.getElementById("total-pembayaran").value
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
const saldo_user = (document.getElementById("saldo").innerHTML = formatUang(saldo_u));
const bayar = () =>{
    let restoPay = document.getElementById("resto-pay").checked;
    let cash = document.getElementById("cash").checked
    
    console.log("pilih restopay" + restoPay);
    console.log("pilih cash" + cash);
    console.log("saldo" + saldo);
    console.log("totalPembayaran" + totalPembayaran);
    //cek apakah memilih metode resto pay
    
    if(!restoPay && !cash){
        openmodal()
        document.getElementById("message").innerHTML = "pilih metode pembayaran terlebih dahulu"
    } else {
        if (restoPay === true) {
            if(saldo_u < data){
                openmodal();
                document.getElementById("message").innerHTML = "Saldo anda tidak cukup";
                document.getElementById("imgpayment").src = "/src/assets/img/image 2.png"   
            } else {
                window.location.href = "invoice_restoPay.html"
            }
        } else if ( cash === true) {
            console.log("berhasil pindah ke halaman cash");
            window.location.href = "invoice_cash.html"
        }
    }
}

//open modal
const openmodal = () => {
    document.getElementById("myModal").style.display = "block"
    document.getElementById("overlay").style.display = "block"
};

//close modal
const closemodal = () => {
    document.getElementById("myModal").style.display = "none"
    document.getElementById("overlay").style.display = "none"
};

document.getElementById("closemodal").addEventListener("click", () => {
    closemodal()
})

document.getElementById("overlay").addEventListener("click", () => {
    closemodal()
});

//klik kontainer pembayaran

const klikRestoPay = document.querySelector(".container-metode-pembayaran")
const klikCash = document.querySelector(".container-metode-cash");

//
let checkedResto = false;
klikRestoPay.addEventListener("click", () => {
    checkedResto = !checkedResto;
    restoPay.checked = checkedResto;
});

let checkedCash = false;
klikCash.addEventListener("click", () => {
    checkedCash = !checkedCash;
    cash.checked = checkedCash;
})