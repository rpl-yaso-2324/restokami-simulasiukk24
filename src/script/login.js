      function login() {
          // Mendapatkan nilai username dan password dari input
          var username = document.getElementById('username').value;
          var password = document.getElementById('pass').value;

          // Contoh validasi sederhana (ganti dengan validasi yang lebih aman)
          if (username === 'afif' && password === 'pip') {
              // Menyimpan informasi login di local storage
              localStorage.setItem('Telah login', 'true');
              localStorage.setItem('username', username);

              // Redirect atau lakukan aksi setelah login berhasil
              alert('Login berhasil!');
              window.open('/src/pages/menu/menu.html')
          } else if (username === '' && password === ''){
              alert('isi Username dan password');
          } else if ( username !== 'afif' || password !== 'pip'){
            alert('username dan password kurang tepat')
          }
      }