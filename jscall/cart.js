let key = [];
let total = 0;
let price = "";

const tBody = document.querySelector("tbody");

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
cart();

const namee = document.getElementById("formName");
const email = document.getElementById("inputEmail4");
const address = document.getElementById("inputAddress");
const address2 = document.getElementById("inputAddress");
const city = document.getElementById("inputCity");
const zip = document.getElementById("inputZip");

const codeBuy = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

document.getElementById("buyNow").addEventListener('click', (event) => {
   const formData = { 
        name: namee,
        email: email,
        address: address,
        address2: address2,
        city: city,
        zip: zip,
        code: codeBuy
    }
    localStorage.setItem(namee + codeBuy, JSON.stringify(formData));
    popUp();
})

popUp = (URL) =>{
    window.open(URL, 'janela','width=660, height=510, top=100, left=699, scrollbars=yes, status=no, toolbar=no, location=no, directories=no, menubar=no,resizable=no, fullscreen=no');
}
