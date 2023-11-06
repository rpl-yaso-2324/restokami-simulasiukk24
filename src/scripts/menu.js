/**
 * menu page
 */
var menu = [
  {
    id: 0,
    name: "Paket 1",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 36000,
    count: 0,
  },
  {
    id: 1,
    name: "Paket 2",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 36000,
    count: 0,
  },
  {
    id: 2,
    name: "Paket 3",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 36000,
    count: 0,
  },
];

// add menu card
const menuSection = document.querySelector(".menu-section");
let card = ``;
menu.map((data) => {
  card += innerCardMenu(data.name, data.desc, data.price, data.count, data.id);
  menuSection.innerHTML = card;
});

function innerCardMenu(name, desc, price, count, id) {
  return `<!-- card -->
	<div class="card">
		<button class="kategori" aria-readonly="true">Paket</button>
		<hr class="line" />
		<div class="container-content">
			<div>
				<img
					src="./assets/img/example-product/indomie.jpg"
					alt=""
					class="produk-img"
				/>
			</div>
			<div class="content">
				<p>${name}</p>
				<p>${desc}</p>
				<p>${price}</p>
				<div class="content2">
					<p>Jumlah:</p>
					<p id="count${id}">${count}</p>
					<button class="tambah" id="addCount${id}">+</button>
				</div>
			</div>
		</div>
	</div>`;
}

// add count
let order = [];

menu.map((data) => {
  data.count = 0; // Inisialisasi jumlah untuk setiap item menjadi 0

  const addButton = document.getElementById(`addCount${data.id}`);
  const countElement = document.getElementById(`count${data.id}`);

  addButton.addEventListener("click", function (event) {
    event.preventDefault();
    data.count++; // Tambahkan jumlah hanya untuk item saat ini
    countElement.innerHTML = data.count;

    const subtotal = data.price * data.count; // Hitung subtotal hanya untuk item saat ini
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

    // Hitung total harga
    let totalPrice = 0;
    order.map((item) => {
      totalPrice += item.price * item.count;
    });

    console.log(`Total Price: ${totalPrice}`);
    localStorage.setItem("total", totalPrice);
  });
});
const pesan = () => {
  order.map((item) => {
    if (item.count != null) {
      console.log(item.count);
      window.location.href = "order.html";
    } else {
      alert();
      console.log("data tidak boleh kosong");
    }
  });
};
