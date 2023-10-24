const invoice1 = document.getElementById("RestoPay");
const invoice2 = document.getElementById("Cash");
const methodPay = localStorage.getItem("MethodPay");

if (methodPay == "Resto Pay") {
  invoice1.style.display = "block";
  invoice2.style.display = "none";
} else {
  invoice1.style.display = "none";
  invoice2.style.display = "block";
}
