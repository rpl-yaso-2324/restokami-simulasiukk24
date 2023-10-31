

var menu = [
    {
        id: 0,
        name: "Paket 1",
        desc: "Nasi Timbel + Ayam (bakar/goyeng)+ Tahu & Tempe + Sambal + Teh",
        price: 36000,
        count: 0
    },
    {
        id: 1,
        name: "Paket 1",
        desc: "Nasi Timbel + Ayam (bakar/goyeng)+ Tahu & Tempe + Sambal + Teh",
        price: 36000,
        count: 0
    },
    {
        id: 1,
        name: "Paket 1",
        desc: "Nasi Timbel + Ayam (bakar/goyeng)+ Tahu & Tempe + Sambal + Teh",
        price: 36000,
        count: 0
    },
];

// add menu card

const menuSection = document.querySelector(".menu-section");
let card = ``;
menu.map((data) => {
    card += innerCardMenu(data.name,data.desc,data.price,data.count,data.id);
    menuSection.innerHTML = card;
});

function innerCardMenu(name,desc,price,count,id) {
    return `
    <div class="card-menu">
    <h3 >Paket</h3>
    <hr>
    <div class="menu-option">
        <div class="img-menu">
        <img src="/images/example-product/nasi.jpeg" alt=""></div>
        <div class="text-menu">
            <h4>${name}</h4>
            <p>${desc}</p>
    <h5>${price}</h5>
    <span class="btn-menu">
        <p >jumlah:<p id="count${id}">${count}</p> </p>
        <button class="plus" id="addCount${id}">+</button>
    </span>
</div>
</div>
</div>
    `
}

// add Count

let order = [];

menu.map((data) => {
    data.count = 0;

    const addButton = document.getElementById(`addCount${data.id}`);
    const countElement = document.getElementById(`count${data.id}`);

    addButton.addEventListener("click", function (event)  {
        event.preventDefault();
        data.count++;
        countElement.innerHTML = data.count;

        const subtotal = data.price * data.count;

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
            window.location.href = "pages/pesanPage.html"
        } else {
            alert();
            console.log("data tidak boleh kosong");
        }
    })
}