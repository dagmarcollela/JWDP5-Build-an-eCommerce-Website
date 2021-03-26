const customerOrder = document.getElementById("customerOder");
const customerName = document.getElementById("customerName");
const customerPaid = document.getElementById("customerPaid");
const customerAddress = document.getElementById("customerAddress");
const customerAddress2 = document.getElementById("customerAddress2");
const city = document.getElementById("city");

let index = localStorage.length; // get the last item in the localStorage

let data = localStorage.getItem(index); // get the last data stored
data = JSON.parse(data);


customerOrder.innerHTML += "Your order number: " + "<b>" + data.code + "</b>";
customerName.innerHTML += "Customer name: " + "<b>" + data.name + "</b>";
customerPaid.innerHTML += "Order value: " + "<b>" + "&#36;" + data.total + "</b>";
customerAddress.innerHTML += "House number/name: " + "<b>" + data.address + "</b>";
customerAddress2.innerHTML += "Road name: " + "<b>" + data.address2 + "</b>";
city.innerHTML += "City: " + "<b>" + data.city + "</b>";

document.getElementById("finish").addEventListener('click', (event) => {
    event.preventDefault();

    localStorage.clear();
    window.location.assign("../index.html");
})