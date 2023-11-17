document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Mendapatkan nilai dari input username dan password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Pemrosesan login sederhana (contoh saja, ini bukan cara yang aman untuk autentikasi)
    if (username === "kiydom23" && password === "123") {
      alert("Login berhasil!");
      
      // Di sini bisa dilakukan redirect ke halaman lain atau tindakan setelah login berhasil
    } else {
      alert("Login gagal. Silakan coba lagi!");
      
    }
  });