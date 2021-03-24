let key = [];
let total = 0;
let price = 0;
let lastAddInCart = 0;

const tBody = document.querySelector("tbody");
const deleteBtn = document.createElement("button");


cart = () => {

    

    for( let b = 1; b <= localStorage.length; b++){

        key = window.localStorage.getItem(b);
        key = JSON.parse(key);
        
        price = key.price / 100;

        total = price + total;

        const tr = document.createElement("tr");

        tr.innerHTML += "<td>" + key.name + "</td>";
        tr.innerHTML += "<td>" + key.lenses + "</td>";
        tr.innerHTML += "<td>" + "&#163;" + price.toFixed(2) + "</td>" ;
        
        //Button to edit item
        const editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.classList.add("btn", "btn-warning");
        editBtn.innerHTML = "Edit";

        editBtn.onclick = () => {
            window.location.assign("item.html?id="+ key._id);
        }

        tr.appendChild(editBtn);

        //button to delete item
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.classList.add("btn", "btn-danger");
        deleteBtn.innerHTML = "Delete";

        deleteBtn.onclick = (event) => {
            event.preventDefault();
            localStorage.removeItem(key._id);
            history.go(0);
        }

        tr.appendChild(deleteBtn);

        tBody.appendChild(tr);

        if(b == localStorage.length){

            const tr2 = document.createElement("tr");

            tBody.appendChild(tr2);

            tr2.innerHTML += "<td colspan='3'>" + " " + "</td>";

            const tr3 = document.createElement("tr");

            tBody.appendChild(tr3);

            tr3.innerHTML += "<td colspan='2'>" + "Total " + "</td>";
            tr3.innerHTML += "<td>" + "&#163;" + total.toFixed(2) + "</td>";
        }
    }
}

init = async () => {
    try{
        cart();
    }catch(error){
        console.log(error);
    }
}
init();

const codeBuy = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);

document.getElementById("buyNow").addEventListener('click', (event) => {
    event.preventDefault();

    const namee = document.getElementById("formName").value;
    const email = document.getElementById("inputEmail4").value;
    const address = document.getElementById("inputAddress").value;
    const address2 = document.getElementById("inputAddress2").value;
    const city = document.getElementById("inputCity").value;
    const zip = document.getElementById("inputZip").value;

   const data = { 
        name: namee,
        email: email,
        address: address,
        address2: address2,
        city: city,
        zip: zip,
        code: codeBuy,
        total: total.toFixed(2),
        paid: "PAID BY CARD",
        itens: localStorage.length
    };
    lastAddInCart = localStorage.length + 1;
    localStorage.setItem(lastAddInCart, JSON.stringify(data));

    window.location.assign("confirmation.html");
})