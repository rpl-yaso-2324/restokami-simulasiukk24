const user = {
	usrname: "raincala",
	pass: "123",
};

/**
 * login page
 */
document
	.getElementById("loginForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const name = document.getElementById("name").value;
		const pass = document.getElementById("pass").value;
		const validName = name == user.usrname;
		const validPass = pass == user.pass;

		if (name.trim() === "" || pass.trim() === "") {
			window.alert("Username dan Password harus diisi.");
		} else {
			console.log(validName);
			console.log(validPass);
			if (validName === false || validPass === false) {
				window.alert("Username dan Password salah!");
				document.getElementById("name").value = "";
				document.getElementById("pass").value = "";
			} else {
				location.href = "menu.html";
			}
		}
	});
