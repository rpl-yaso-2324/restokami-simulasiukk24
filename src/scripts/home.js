        // menu page
var menu = [
    {
        id: 0,
        name: "Paket 1",
        desc: "Nasi timbel + ayam bakar",
        price: 3000,
        count: 0,
    },
    {
        id: 1,
        name: "Paket 2",
        desc: "Nasi timbel + ayam bakar",
        price: 36000,
        count: 0,
    },
    {
        id: 2,
        name: "Paket 3",
        desc: "Nasi timbel + ayam bakar",
        price: 36000,
        count: 0,
    },
];

// add menu card
const menuSection = document.querySelector(".menu-section");
let card = "";
menu.map((data) => {
    card += innerCardMenu(data.name, data.desc, data.price, data.count, data.id);
    menuSection.innerHTML = card;
});

function innerCardMenu(name, desc, price, count, id) {
    return `<div class="card ml-3">
    <button class="kategori mt-5 mb-2 w-16 rounded-lg text-lg bg-slate-300 font-semibold" aria-readonly="true">paket</button>
    <hr class="line mb-2 bg-yellow-400" />
    <div class="container-content flex">
        <div>
            <img src="/assets/img/paket nasi.jfif" alt="paket" class="produk-img">
        </div>
        <div class="content ml-10">
            <p>${name}</p>
            <p>${desc}</p>
            <p>${price}</p>
            <div class="content2 flex justify-between">
                <p class="">Jumlah :</p>
                <button class="tambah bg-slate-300 w-2/12" id="minCount${id}">-</button>
                <p id="tambah${id}">${count}</p>
                <button class="tambah bg-slate-300 w-2/12" id="addCount${id}">+</button>
            </div>
        </div>
    </div>
</div>`;
}


//add count
let order = [];

menu.map((data) => {
    data.count = 0;

    const addButton = document.getElementById(`addCount${data.id}`);
    const minButton = document.getElementById(`minCount${data.id}`);
    const countElement = document.getElementById(`tambah${data.id}`);

    addButton.addEventListener("click", function (event) {
        event.preventDefault();
        data.count++; // tambakan jumlah hanya item saat ini
        countElement.innerHTML = data.count;

        const subtotal = data.price * data.count; // Hitung subtotal
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

        //Hitung Mundur
        let totalPrice = 0;
        order.map((item) => {
            totalPrice += item.price * item.count;
        });

        console.log(`Total Price: ${totalPrice}`);
        localStorage.setItem("total", totalPrice);
    });

    minButton.addEventListener("click", function (event) {
        event.preventDefault();
        data.count--; // tambakan jumlah hanya item saat ini
        countElement.innerHTML = data.count;
    
        const subtotal = data.price * data.count; // Hitung subtotal
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
    
        //Hitung Mundur
        let totalPrice = 0;
        order.map((item) => {
            totalPrice -= item.price * item.count;
        });
    
        console.log(`Total Price: ${totalPrice}`);
        localStorage.setItem("total", totalPrice);
    });
});

const pesan = () => {
    order.map((item) => {
        if (item.count != null) {
            console.log(item.count);
            window.location.href = "orderDetail.html";
        } else {
            alert("Pilih Menu Terlebih Dahulu");
            console.log("data tidak boleh kosong");
        }
    });
};
