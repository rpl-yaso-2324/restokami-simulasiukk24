if (
  !localStorage.getItem("accessToken") &&
  !localStorage.getItem("alreadyRedirected")
) {
  window.open("login.html", "_self");

  localStorage.setItem("alreadyRedirected", "true");
}

const convertToCurrency = (money) => {
  return money.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};
let saldoResto = 50000;
document.getElementById("saldo").textContent = convertToCurrency(saldoResto);

const bayarPesanan = () => {
  const totalPembayaran = parseInt(localStorage.getItem("totalPembayaran"));
  console.log(typeof totalPembayaran);
  const popup = document.getElementById("popup");
  if (totalPembayaran < 5000) {
    console.log("kurang");
    popup.style.display = "none";
  } else {
    setTimeout(() => {
      popup.style.display = "none";
    }, 1500);
    popup.style.display = "block";
  }
  // console.log("testtttttt");
};

const menuData = JSON.parse(localStorage.getItem("menu"));

if (menuData) {
  const totalPembayaranElement = document.getElementById("totalPembayaran");

  const totalPembayaran = parseFloat(localStorage.getItem("totalPembayaran"));

  totalPembayaranElement.textContent = `${convertToCurrency(totalPembayaran)}`;
}

const setCatatan = () => {
  localStorage.setItem("catatan", document.getElementById("catatan").value);
};

const setPembayaran = (methodPay) => {
  localStorage.setItem("MethodPay", methodPay);
};

// Masih progress
