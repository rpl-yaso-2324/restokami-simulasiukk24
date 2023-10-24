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
const bayarPesanan = () => {
  const menuData = JSON.parse(localStorage.getItem("menu"));
  const methodPay = localStorage.getItem("MethodPay");
  const catatan = localStorage.getItem("catatan");
  const totalHarga = localStorage.getItem("totalPembayaran");
  for (const menuKey in menuData) {
    var menu = menuData[menuKey];
  }
  alert(
    `Anda telah memesan ${menu.name} dengan jumlah ${
      menu.quantity
    } dengan catatan : "${catatan}" dan anda menggunakan metode pembayaran ${methodPay}. Total pembayaran anda ${convertToCurrency(
      parseFloat(totalHarga)
    )}`
  );
};
