const auth = () => {
    const username = document.getElementById('username').value
    const pass = document.getElementById('password').value
    
    if (username == 'user123' && pass == '12345'){
        alert("Login success")

        localStorage.setItem('username', username)
        localStorage.setItem('password', pass)
        window.open("/menu/menu.html")
    } else {
        alert("Username or password is incorrect");
    }
}

const count = () => {
    const min = document.getElementById('min')
    const plus = document.getElementById('plus')
    const num = document.getElementById('count')

    min.addEventListener('click', () => {
        if (num.value > 0) {
            num.value--

        }
    })

    plus.addEventListener('click', () => {
        num.value++
    })

    const parse = parseInt(num)
    localStorage.setItem('Total Barang', parse)
    console.log(num);
}

count()

// pesanan
const pesan = () => {
    const num = document.getElementById('count').value;
    const total = num * 30000;
    console.log(total);
    return total;
}

const btnPesan = document.getElementById('pesan');

btnPesan.addEventListener('click', () => {
    const totalHarga = pesan();
    alert(`Total harga adalah ${totalHarga}`);
    window.open('/order/order.html')
});
