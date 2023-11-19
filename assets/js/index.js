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

// console.log(menusByCategory);

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
      <div class="action">
          <span class="price">${price}</span>
          <button onclick="beli(${params})" data-modal-target="static-modal" data-modal-toggle="static-modal">Pesan</button>
      </div>
    </div>
  </div>
</section>

  `;
}

menuSection.innerHTML = cardMenu;

let pilihanMenu = {};
const jumlahBeli = document.getElementById("input-jumlah");

const beli = (menuKey) => {
  const pilihan = menus.find((menu) => menu.id === menuKey);
  console.log(pilihan);

  pilihanMenu = { ...pilihan };

  // console.log(pilihan);
};

const pesan = () => {
  const data = JSON.parse(localStorage.getItem("dataPembelian")) || {};

  if (!data[pilihanMenu.id]) {
    data[pilihanMenu.id] = {
      id: pilihanMenu.id,
      menu: pilihanMenu.title,
      harga: pilihanMenu.price,
      jumlahBeli: Number(jumlahBeli.value),
    };
  }

  let totalHarga = jumlahBeli.value * pilihanMenu.price;
  console.log(totalHarga);

  localStorage.setItem("dataPembelian", JSON.stringify(data));
  localStorage.setItem("totalPembayaran", totalHarga);
  jumlahBeli.value = ''
  window.location.href = "orderDetail.html"
};
