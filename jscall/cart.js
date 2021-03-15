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

            tr2.innerHTML += "<td colspan='3'>" + " ________________________________________________________________________________________________" + "</td>";

            const tr3 = document.createElement("tr");

            tBody.appendChild(tr3);

            tr3.innerHTML += "<td colspan='2'>" + "Total " + "</td>";
            tr3.innerHTML += "<td>" + "&#163;" + total.toFixed(2) + "</td>";
        }
        
    }

}
cart();