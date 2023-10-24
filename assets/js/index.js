let nameUser = document.getElementById("nameUser");
let telp = document.getElementById("telp");

function generateAccessToken() {
  let dt = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}
const accessToken = generateAccessToken();

const login = () => {
  if (nameUser.value === "iqbal") {
    if (telp.value === "089671542333") {
      localStorage.setItem("accessToken", accessToken);
      window.open("index.html", "_self");
    } else {
      console.log("username salah");
    }
  }
};

if (
  !localStorage.getItem("accessToken") &&
  !localStorage.getItem("alreadyRedirected")
) {
  window.open("login.html", "_self");

  localStorage.setItem("alreadyRedirected", "true");
}

const menus = {
  paket1: {
    name: "Paket Hemat 1",
    price: 36000,
    stock: 5,
  },
  paket2: {
    name: "Paket Hemat 2",
    price: 30000,
    stock: 100,
  },
  food1: {
    name: "Spaggheti Bolognese",
    price: 10000,
    stock: 100,
  },
  drink1: {
    name: "Strawberry Drink",
    price: 5000,
    stock: 100,
  },
};

const beli = (menuKey) => {
  const pilihan = menus[menuKey];

  const menuObj = JSON.parse(localStorage.getItem("menu")) || {};

  if (!menuObj[menuKey]) {
    menuObj[menuKey] = {
      name: pilihan.name,
      quantity: 0,
      hargaMenu: 0,
      totalHarga: 0,
    };
  }

  menuObj[menuKey].quantity >= pilihan.stock ? "" : menuObj[menuKey].quantity++;

  const hargaSatuan = parseFloat(pilihan.price);
  const qty = menuObj[menuKey].quantity;
  menuObj[menuKey].totalHarga = hargaSatuan * qty;
  menuObj[menuKey].hargaMenu = hargaSatuan;

  let totalPembayaran = 0;
  for (const key in menuObj) {
    totalPembayaran += parseFloat(menuObj[key].totalHarga);
  }
  localStorage.setItem("totalPembayaran", totalPembayaran);

  localStorage.setItem("menu", JSON.stringify(menuObj));

  const jumlah = menuObj[menuKey].quantity;

  document.getElementById(menuKey).innerHTML = `Jumlah: ${jumlah}`;

  console.log({ menuKey });
  console.log(menuObj);
};

for (const menuKey in menus) {
  const menuObj = JSON.parse(localStorage.getItem("menu")) || {};
  const jumlah = menuObj[menuKey] ? menuObj[menuKey].quantity : 0;
  document.getElementById(menuKey).innerHTML = `Jumlah: ${jumlah}`;
}

const kurang = (menuKey) => {
  const pilihan = menus[menuKey];

  const menuObj = JSON.parse(localStorage.getItem("menu")) || {};

  if (!menuObj[menuKey]) {
    menuObj[menuKey] = {
      quantity: 0,
    };
  }

  menuObj[menuKey].quantity <= 0 ? 0 : menuObj[menuKey].quantity--;

  const hargaSatuan = parseFloat(pilihan.price);
  const qty = menuObj[menuKey].quantity;
  menuObj[menuKey].totalHarga = hargaSatuan * qty;
  menuObj[menuKey].hargaMenu = hargaSatuan;

  let totalPembayaran = 0;
  for (const key in menuObj) {
    totalPembayaran += parseFloat(menuObj[key].totalHarga);
  }
  localStorage.setItem("totalPembayaran", totalPembayaran);

  localStorage.setItem("menu", JSON.stringify(menuObj));

  const jumlah = menuObj[menuKey].quantity;

  document.getElementById(menuKey).innerHTML = `Jumlah: ${jumlah}`;
};
