const invoice1 = document.getElementById("RestoPay");
const invoice2 = document.getElementById("Cash");
const methodPay = localStorage.getItem("MethodPay");
const totalPembayaran = localStorage.getItem("totalPembayaran");
const catatanUser = localStorage.getItem("catatan");
const invoiceTotalHarga = document.getElementById("total");
const invoiceCatatan = document.getElementById("catatan");

const convertToCurrency = (money) => {
  return money.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

if (methodPay == "Resto Pay") {
  invoice1.style.display = "block";
  invoice2.style.display = "none";
} else {
  invoice1.style.display = "none";
  invoice2.style.display = "block";
}

invoiceTotalHarga.innerHTML = convertToCurrency(parseFloat(totalPembayaran));
invoiceCatatan.innerHTML = catatanUser;
