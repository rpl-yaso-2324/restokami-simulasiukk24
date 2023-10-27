let username = document.getElementById("username");
let password = document.getElementById("password");

function generateAccessToken() {
  let dt = new Date().getTime();
  const uuid = Math.floor(Math.random() * 10) + 1 + dt;
  return uuid;
}
const accessToken = generateAccessToken();

const login = () => {
  let usernameLocal = localStorage.getItem("username");
  let passwordLocal = localStorage.getItem("password");
  if (username.value === usernameLocal) {
    if (password.value === passwordLocal) {
      localStorage.setItem("accessToken", accessToken);
      window.open("index.html", "_self");
    } else {
      alert("no telepon salah");
    }
  } else {
    alert("nama salah");
  }
};

if (
  !localStorage.getItem("accessToken") &&
  !localStorage.getItem("alreadyRedirected")
) {
  window.open("login.html", "_self");
  localStorage.setItem("alreadyRedirected", "true");
}

const menus = [
  {
    id: 1,
    title: "Paket Hemat 1",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal+ Teh",
    price: 36000,
    stock: 5,
    image: "../../assets/img/paket1.jpeg",
    category: "Paket",
  },
  {
    id: 2,
    title: "Paket Hemat 2",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal+ Teh",
    price: 30000,
    stock: 10,
    image: "../../assets/img/paket1.jpeg",
    category: "Paket",
  },
  {
    id: 3,
    title: "Spaghetti Bolognese",
    desc: "Spaghetti 1 + Teh manis 1 (dingin / panas)",
    price: 10000,
    stock: 50,
    image: "../../assets/img/paket1.jpeg",
    category: "Makanan",
  },
  {
    id: 4,
    title: "Strawberry Drink",
    desc: "Dengan buah strawberry jus asli",
    price: 5000,
    stock: 8,
    image: "../../assets/img/paket1.jpeg",
    category: "Minuman",
  },
  {
    id: 5,
    title: "Thai Tea Original",
    desc: "Thai tea ( small )",
    price: 6000,
    stock: 8,
    image: "../../assets/img/paket1.jpeg",
    category: "Minuman",
  },
];

const menusByCategory = menus.reduce((x, menu) => {
  if (!x[menu.category]) {
    x[menu.category] = [];
  }
  x[menu.category].push(menu);
  return x;
}, {});

let menuSection = document.querySelector(".menu");
let cardMenu = ``;

for (const category in menusByCategory) {
  cardMenu += `<div class="mt-7 border-b-2 border-[#FF9D21] pb-3">
    <span class="border-2 rounded-full w-auto px-[15px] py-[2px] border-black">${category}</span>
  </div>`;

  menusByCategory[category].forEach((menu) => {
    cardMenu += CardComponent(
      menu.id,
      menu.image,
      menu.title,
      menu.desc,
      menu.price,
      menu.id
    );
  });
}

function CardComponent(id, image, title, desc, price, params) {
  return `
  <section>
  <div class="mt-5 flex gap-5">
    <div>
      <div class="image-container">
        <img src="${image}" alt="image.jpeg">
      </div>
    </div>
    <div class="body-card">
      <h2 class="title">${title}</h2>
      <p class="description">${desc}</p>
      <span class="price">${price}</span>
      <div class="qty">
        <span class="quantity" id=${id}>Jumlah : 0</span>
        <div>
          <button class="button minus-button" onclick="kurang(${params})">-</button>
          <button class="button plus-button" onclick="beli(${params})">+</button>
        </div>
      </div>
    </div>
  </div>
</section>

  `;
}

menuSection.innerHTML = cardMenu;

const beli = (menuKey) => {
  const pilihan = menus.find((menu) => menu.id === menuKey);

  const data = JSON.parse(localStorage.getItem("dataPembelian")) || {};

  if (!data[menuKey]) {
    data[menuKey] = {
      quantity: 0,
      totalHarga: 0,
    };
  }

  // console.log(pilihan);

  data[menuKey].quantity >= pilihan.stock
    ? alert(`Stock yang tersedia hanya ${pilihan.stock}`)
    : data[menuKey].quantity++;

  const hargaSatuan = parseFloat(pilihan.price);
  const qty = data[menuKey].quantity;
  data[menuKey].totalHarga = hargaSatuan * qty;

  let totalPembayaran = 0;
  for (const key in data) {
    totalPembayaran += parseFloat(data[key].totalHarga);
  }
  localStorage.setItem("totalPembayaran", totalPembayaran);

  localStorage.setItem("dataPembelian", JSON.stringify(data));

  const jumlah = data[menuKey].quantity;

  document.getElementById(menuKey).innerHTML = `Jumlah: ${jumlah}`;
};

const kurang = (menuKey) => {
  const pilihan = menus.find((menu) => menu.id === menuKey);

  const data = JSON.parse(localStorage.getItem("dataPembelian")) || {};

  if (!data[menuKey]) {
    data[menuKey] = {
      quantity: 0,
      totalHarga: 0,
    };
  }

  data[menuKey].quantity <= 0 ? 0 : data[menuKey].quantity--;

  const hargaSatuan = parseFloat(pilihan.price);
  const qty = data[menuKey].quantity;
  data[menuKey].totalHarga = hargaSatuan * qty;

  let totalPembayaran = 0;
  for (const key in data) {
    totalPembayaran += parseFloat(data[key].totalHarga);
  }
  localStorage.setItem("totalPembayaran", totalPembayaran);

  localStorage.setItem("dataPembelian", JSON.stringify(data));

  const jumlah = data[menuKey].quantity;

  document.getElementById(menuKey).innerHTML = `Jumlah: ${jumlah}`;
};

menus.forEach((menu) => {
  const data = JSON.parse(localStorage.getItem("dataPembelian")) || {};
  const jumlah = data[menu.id] ? data[menu.id].quantity : 0;
  document.getElementById(menu.id).innerHTML = `Jumlah: ${jumlah}`;
});

const pesan = () => {
  const data = JSON.parse(localStorage.getItem("dataPembelian"));
  const totalPembayaran = localStorage.getItem("totalPembayaran");
  if (!data || !totalPembayaran || totalPembayaran === 0) {
    alert("Anda belum memesan apapun");
  } else {
    window.open("orderDetail.html", "_self");
  }
};
