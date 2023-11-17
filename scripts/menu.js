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
        id: 0,
        title: "Paket-01",
        name: "Nasi Timbel",
        desc: "Nasi Timbel + Ayam (bakar/goyeng)+ Tahu & Tempe + Sambal + Teh",
        price: formatUang(36000),
        count: 0
    },
    {
        id: 0,
        title: "Paket-01",
        name: "Nasi Timbel",
        desc: "Nasi Timbel + Ayam (bakar/goyeng)+ Tahu & Tempe + Sambal + Teh",
        price: formatUang(36000),
        count: 0
    },
    {
        id: 0,
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
        <h4>${name}</h4>
        <p>${desc}</p>
        
    <span class="btn-menu">
        <p>${price}</p>
        <button class="plus" id="addCount${id}">pesan</button>
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
            window.location.href = "pesanPage.html"
        } else {
            alert();
            console.log("data tidak boleh kosong");
        }
    })
}