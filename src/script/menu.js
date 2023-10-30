var menu = [
  {
    id: 0,
    name: "Paket kentang",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 20000,
    count: 0,
  },
  {
    id: 1,
    name: "Paket cakue",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 10000,
    count: 0,
  },
  {
    id: 2,
    name: "Paket udang",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 100000,
    count: 0,
  },
];

//menambahkan card menu
const menuSection = document.querySelector(".menu-section");
let card = ``;
menu.map((data) => {
  card += innerCardMenu(data.name, data.desc, data.price, data.count, data.id);
  menuSection.innerHTML = card;
});

function innerCardMenu(name, desc, price, count, id) {
  return `<!-- card -->
    <div class="card p-4">
    <h1 class="bg-pink-200 rounded-2xl mt-6 w-[80px] h-[30px] items-center flex justify-center text-xl text-white">Paket</h1>
    <hr class="pb-1 mt-1 flex justify-center bg-yellow-400">
    <div class="mt-4 flex flex-row gap-7">
    <img src="https://via.placeholder.com/300" class="max-w h-28 rounded-lg" alt="">
    <div>
        <h1 class="font-semibold">${name}</h1>
        <div class="text-xs">
        <p>${desc}</p>
        </div>
        <div class="font-semibold">
        <p class="my-2">${price}</p>
        <div class="flex flex-row gap-2">
        <button class="bg-cyan-400 w-14 rounded-xl text-white" id="addCount${id}">+</button>
        <p id="count${id}">${count}</p>
        <button class="bg-red-400 w-14 rounded-xl text-white">-</button>
        </div>
    </div>
    </div>
</div>
</div>`;
}

//add count
let order = [];

menu.map((data) => {
  data.count = 0; // Inisialisasi jumlah untuk setiap item menjadi 0

  const addButton = document.getElementById(`addCount${data.id}`);
  const countElement = document.getElementById(`count${data.id}`);

  addButton.addEventListener("click", function (event) {
    event.preventDefault();
    data.count++; // Tambahkan jumlah hanya untuk item saat ini
    countElement.innerHTML = data.count;

    const subtotal = data.count * data.count;
    console.log(`Subtotal for ${data.name}: ${subtotal}`);

    if (order[data.id] == null) {
      order[data.id] = {
        id: data.id,
        name: data.name,
        desc: data.desc,
        price: data.price,
        count: data.count,
      };
    } else {
      order[data.id].count = data.count;
    }

    //Hitung total harga
    let totalPrice = 0;
    order.map((item) => {
      totalPrice = +item.price * item.count;
    });

    console.log(`Total price: ${totalPrice}`);
    localStorage.setItem("total", totalPrice);
  });
});
const pesan = () => {
  order.map((item) => {
    if (item.count != null) {
      console.log(item.count);
      window.location.href = "/src/pages/order/order.html";
    } else {
      alert();
      console.log("data tidak boleh kosong");
    }
  });
};
