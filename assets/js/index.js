let nameUser = document.getElementById("nameUser");
let telp = document.getElementById("telp");

function accessToken() {
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
const accessToken = accessToken();

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
    stock: 100,
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

let qty1 = 0;
let qty2 = 0;
let qty3 = 0;
let qty4 = 0;

const beli = (menuKey) => {
  const pilihan = menus[menuKey];

  if (menuKey === "paket1") {
    qty1++;
    document.getElementById(menuKey).innerHTML = `Jumlah : ${qty1}`;
  } else if (menuKey === "paket2") {
    qty2++;
    document.getElementById(menuKey).innerHTML = `Jumlah : ${qty2}`;
  } else if (menuKey === "food1") {
    qty3++;
    document.getElementById(menuKey).innerHTML = `Jumlah : ${qty3}`;
  } else if (menuKey === "drink1") {
    qty4++;
    document.getElementById(menuKey).innerHTML = `Jumlah : ${qty4}`;
  }
  console.log({ menuKey });
  console.log({ qty1, qty2, qty3, qty4 });
};
