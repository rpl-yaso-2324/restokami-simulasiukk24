const menu = [
    {
        id: 0,
        title: "Minuman-01",
        name: "Lemon tea",
        desc: "Teh manis + perasan lemon",
        price: 20000
    },
    {
        id: 1,
        title: "Minuman-02",
        name: "Lemon tea",
        desc: "Teh manis + perasan lemon",
        price: 20000
    },
    {
        id: 2,
        title: "minuman",
        name: "Lemon tea",
        desc: "Teh manis + perasan lemon",
        price: 20000
    },
]

const menusection = document.querySelector('.sectionmenu')

menu.map((data) => {
    menusection.innerHTML += card(data.id, data.title, data.name, data.desc, data.price)
})

function card(id,title,name,desc,price) {
    return`
    <div class="menulist">
    <div class="menu-option">
        <img class="img-menu" src="/assets/img/sate.jpeg">
        <div class="text-menu">
            <h4>${title}</h4>
            <h3>${name}</h3>
            <p>${desc}</p>
            <span class="btn">
                <h3 class="rp">${price}</h3>
                <button class="btn-psn" id="pesan${id}">Pesan</button>
            </span>
        </div>
    </div>
</div>
    `
}

menu.map((data) => {
    const pesan = document.getElementById(`pesan${data.id}`)
    pesan.addEventListener('click', function (event) {
        event.preventDefault()
        const jumlah = prompt('masukan jumlah pesanan')
        const total = jumlah * data.price
        localStorage.setItem('total', total)
        localStorage.setItem('desc', data.desc)
        location.href = "pesananpage.html"
    })

})