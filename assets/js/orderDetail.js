const convertToCurrency = (money) => {
  return money.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

const menuData = JSON.parse(localStorage.getItem("menu"));

if (menuData) {
  const pesananTable = document.querySelector("table");

  if (pesananTable) {
    for (const menuKey in menuData) {
      const menu = menuData[menuKey];

      const newRow = pesananTable.insertRow();

      const menuCell = newRow.insertCell(0);
      const kuantitasCell = newRow.insertCell(1);
      const totalHargaCell = newRow.insertCell(2);

      menuCell.textContent = menuKey;
      kuantitasCell.textContent = menu.quantity;
      totalHargaCell.textContent = `${convertToCurrency(menu.totalHarga)}`;
    }
  }

  const totalPembayaranElement = document.getElementById("totalPembayaran");

  const totalPembayaran = localStorage.getItem("totalPembayaran");

  totalPembayaranElement.textContent = `${convertToCurrency(totalPembayaran)}`;
}

const setCatatan = () => {
  localStorage.setItem("catatan", document.getElementById("catatan").value);
};

const setPembayaran = () => {
  localStorage.setItem(
    "Metode Pembayaran",
    document.getElementById("restoPay").value
  );
};
