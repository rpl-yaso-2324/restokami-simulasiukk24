const menu = [
    {
        id: 0,
        paket: "Paket 1",
        namaProduk: "Nasi Timbel",
        deskripsi: "Nasi timbel + Sambal + Ayam Bakar",
        harga: "20.000",
        image: "/assets/img/timbel.jpeg"
    },
    {
        id: 1,
        paket: "Paket 2",
        namaProduk: "Nasi Goreng",
        deskripsi: "Nasi goreng dengan rempah rempah yang sedap",
        harga: "15.000",
        image: "/assets/img/goreng.jpeg"
    },
    {
        id: 2,
        paket: "Minuman",
        namaProduk: "Lemon tea",
        deskripsi: "Teh lemon yang segar",
        harga: "5.000",
        image: "/assets/img/lemon.jpeg"
    },
    {
        id: 3,
        paket: "Minuman",
        namaProduk: "Air putih",
        deskripsi: "Minuman dingin",
        harga: "2.000",
        image: "/assets/img/air.jpeg"
    },
    {
        id: 4,
        paket: "Minuman",
        namaProduk: "Teh manis",
        deskripsi: "Teh hangat",
        harga: "5.000",
        image: "/assets/img/tehmanis.jpeg"
    },
]

const Menusection = document.querySelector(".menu-section")
let cards = ``
menu.map((x) => {
    cards += card(x.id, x.paket, x.namaProduk, x.deskripsi, x.harga, x.image)
    Menusection.innerHTML = cards
})

function card(id, paket, nama, desc, harga, img) {
    return `
    <div class="card">
    <div class="menu">
        <img src="${img}" alt="">
        <div class="paket">
            <h5>${paket}</h5>
            <h2>${nama}</h2>
            <p>${desc}</p>
            <div class="button">
                <h4>Rp. ${harga}</h4>
                <button  id="pesan${id}">Pesan</button>
            </div>
        </div>
    </div>
</div>`
}