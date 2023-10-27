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
let saldoResto = 100000;
document.getElementById("saldo").textContent = convertToCurrency(saldoResto);

const menuData = JSON.parse(localStorage.getItem("dataPembelian"));

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

const bayarPesanan = () => {
  const totalPembayaran = parseInt(localStorage.getItem("totalPembayaran"));
  // console.log(typeof totalPembayaran);
  const methodPay = localStorage.getItem("MethodPay");
  const popup = document.getElementById("popup");

  if (totalPembayaran === 0 || !totalPembayaran) {
    alert("Anda belum membeli apapun");
  } else {
    if (methodPay == "Resto Pay") {
      if (saldoResto < totalPembayaran) {
        console.log("kurang");
        setTimeout(() => {
          popup.style.display = "none";
        }, 2500);
        popup.style.display = "block";
      } else {
        popup.style.display = "none";
        saldoResto = saldoResto - totalPembayaran;
        document.getElementById("saldo").textContent =
          convertToCurrency(saldoResto);
        localStorage.removeItem("dataPembelian");
        // setTimeout(() => {
        //   localStorage.removeItem("totalPembayaran");
        //   localStorage.removeItem("catatan");
        // }, 3000);
        window.open("invoice.html", "_self");
      }
    } else {
      window.open("invoice.html", "_self");
    }
  }

  // console.log("testtttttt");
};
