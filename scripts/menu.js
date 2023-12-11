const formatUang = (Rp) => {
    return Rp.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      });
}

var menu = [
    {
        id: 0,
        title: "Paket-01",
        name: "Nasi Timbel",
        desc: "Nasi Timbel + Ayam (bakar/goyeng)+ Tahu & Tempe + Sambal + Teh",
        price: formatUang(36000),
        count: 0
    },
    {
        id: 1,
        title: "Paket-01",
        name: "Nasi Timbel",
        desc: "Nasi Timbel + Ayam (bakar/goyeng)+ Tahu & Tempe + Sambal + Teh",
        price: formatUang(36000),
        count: 0
    },
    {
        id: 2,
        title: "Paket-01",
        name: "Nasi Timbel",
        desc: "Nasi Timbel + Ayam (bakar/goyeng)+ Tahu & Tempe + Sambal + Teh",
        price: formatUang(36000),
        count: 0
    },
    {
        id: 3,
        title: "Paket-01",
        name: "Nasi Timbel",
        desc: "Nasi Timbel + Ayam (bakar/goyeng)+ Tahu & Tempe + Sambal + Teh",
        price: formatUang(36000),
        count: 0
    },
    {
        id: 4,
        title: "Paket-01",
        name: "Nasi Timbel",
        desc: "Nasi Timbel + Ayam (bakar/goyeng)+ Tahu & Tempe + Sambal + Teh",
        price: formatUang(36000),
        count: 0
    },
    
];

// add menu card

const menuSection = document.querySelector(".menu-section");
let card = ``;
menu.map((data) => {
    card += innerCardMenu(data.title,data.name,data.desc,data.price,data.count,data.id);
    menuSection.innerHTML = card;
});

function innerCardMenu(title,name,desc,price,count,id) {
    return `
    <div class="card-menu">
    <div class="menu-option">
        <div class="img-menu">
        <img src="/assets/img/baso.jpeg" alt=""></div>
        <div class="text-menu">
        <h5>${title}</h5>
        <h3>${name}</h3>
        <p>${desc}</p>
        
    <span class="btn-menu">
        <h4>${price}</h4>
        <button id="pesan${id}">Pesan</button>
    </span>
</div>
</div>
</div>
    `
}

// add Count

// add count
menu.map((data) => {
    const pesan = document.getElementById(`pesan${data.id}`);
    pesan.addEventListener("click", function (event) {
      event.preventDefault();
      const jumlah = prompt("masukan jumlah pesanan");
      const total = data.price * jumlah; // Hitung subtotal hanya untuk item saat ini
      let totalPrice = 0;
      localStorage.setItem("total", total);
      window.location.href = "pesanPage.html";
      localStorage.setItem("nama", data.name);
      localStorage.setItem("pesanan", data.desc);
    });
  });
  const pesan = () => {};