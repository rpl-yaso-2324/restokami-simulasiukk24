const menuSection = document.querySelector(".menu-section");
let card = ``;


let menu = [
    {
      id: 0,
      img: "../assets/img/ayam.jpeg",
      name: "Nasi Ayam Bakar",
      desc: "Nasi + Ayam bakar + lalap + Sambal",
      price: 30000,
    },
    {
      id: 1,
      img: "../assets/img/jus.jpeg",
      name: "Jus Strawberry",
      desc: "Dengan buah strawberry pilihan",
      price: 15000,
    },
    {
      id: 2,
      img: "../assets/img/lemon.jpeg",
      name: "Lemon Tea",
      desc: "Teh + Perasan lemon",
      price: 12000,
    },
    {
      id: 3,
      img: "../assets/img/mujair.jpeg",
      name: "Ikan Mujair Bakar",
      desc: "Nasi + Ikan bakar",
      price: 28000,
    },
    {
      id: 4,
      img: "../assets/img/sate.jpeg",
      name: "Sate Ayam Madura",
      desc: "Nasi + Sate ayam",
      price: 30000,
    },
    {
      id: 5,
      img: "../assets/img/soto.jpeg",
      name: "Soto Bandung",
      desc: "Nasi + Soto",
      price: 25000,
    },
]

menu.map((data) => {
    card += kartu(data.id, data.img, data.name, data.desc, data.price);
  });
  
  menuSection.innerHTML = card;
  function kartu(id, img, name, desc, price) {
    return `<!-- card -->
    <div class="card bg-gray-100 rounded-md p-4 mt-4">
        <div class="container-content flex items-center justify-between">
            <div>
                <img src="${img}" alt="${name}" class="produk-img w-24 h-24 rounded-md">
            </div>
            <div class="flex-1 ml-4 content">
                <p class="namep text-lg font-bold">${name}</p>
                <p class="text-sm">${desc}</p>
                <div class="content2 flex items-center justify-between mt-2">
                    <p class="hrg text-lg font-semibold">Rp. ${price}</p>
                    <button class="tambah bg-red-500 text-white text-sm rounded-full px-2 py-1" id="pesan${id}">Pesan</button>
                </div>
            </div>
        </div>
    </div>
    
    `;
}
