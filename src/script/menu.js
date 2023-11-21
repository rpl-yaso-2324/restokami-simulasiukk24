var menu = [
  {
    id: 0,
    name: "Paket kentang",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 20000,
    count: 0,
    img_path: "https://via.placeholder.com/300", //optional
  },
  {
    id: 1,
    name: "Paket cakue",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 10000,
    count: 0,
    img_path: "https://via.placeholder.com/300",
  },
  {
    id: 2,  
    name: "Paket udang",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 100000,
    count: 0,
    img_path: "https://via.placeholder.com/300",
  },
];

//menambahkan card menu
const menuSection = document.querySelector(".menu-section");
let card = ``;
menu.map((data) => {
  card += innerCardMenu(
    data.name,
    data.desc,
    data.price,
    data.count,
    data.id,
    data.img_path
  );
  menuSection.innerHTML = card;
});

function innerCardMenu(name, desc, price, count, id, image) {
  return `<!-- card -->
    <div class="card p-4">
    <div class="flex flex-row gap-7">
    <img src="${image}" class="max-w h-28 rounded-lg" alt="">
    <div>
        <h1 class="font-semibold">${name}</h1>
        <div class="text-xs">
        <p>${desc}</p>
        </div>
        <div class="font-semibold flex gap-5">
        <p>${price}</p>
        <button class="bg-cyan-400 w-14 rounded-lg text-white " id="pesan${id}">pesan</button>
        </div>
    </div>
    </div>
</div>
</div>`;
}

//add count
let order = [];
console.log(order);
menu.map((data) => {
  const addButton = document.getElementById(`pesan${data.id}`);
  // const countElement = document.getElementById(`count${data.id}`);

  addButton.addEventListener("click", function (event) {
    // event.preventDefault();
    // data.count++; // Tambahkan jumlah hanya untuk item saat ini
    // countElement.innerHTML = data.count;

    const subtotal = data.price * data.count;
    console.log(`Subtotal for ${data.name}: ${subtotal}`);

    //Hitung total harga
    let total = prompt("Isi ini");
      totalPrice = data.price * total;

    console.log(`Total price: ${totalPrice}`);
    window.location.href = "/src/pages/order/order.html";
    localStorage.setItem("total", totalPrice);
    localStorage.setItem("name", data.name);
    localStorage.setItem("desc", data.desc);
  });
});
// const pesan = () => {
//   order.map((item) => {
//     if (item.count != null) {
//       console.log(item.count);
//       window.location.href = "/src/pages/order/order.html";
//     } else {
//       alert();
//       console.log("data tidak boleh kosong");
//     }
//   });
// };
