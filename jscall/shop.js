let price = 0;

const imgCard = document.getElementById("img-card");
const main = document.querySelector("main");
const cardTitle = document.getElementById("card-title");
const cardDescritption = document.getElementById("card-description");

let aLink = document.createElement("a");


fillTable = (response) => {

    quantityItens = window.localStorage.length
    cartQuantityItens.innerHTML = quantityItens;

    for(let i in response){

        const card = document.createElement("article");
        const cardImg = document.createElement("img");
        let aLink = document.createElement("a");

        card.classList.add("card");
        card.style.width = "18rem";
        card.style.border = "none";
        aLink.setAttribute("href", "item.html?id=" + response[i]._id);
        card.style.textDecoration = 'none';
        cardImg.classList.add("img", "card-img-top");
        cardImg.setAttribute("width", "100%");
        cardImg.setAttribute("src", response[i].imageUrl);
        
        aLink.appendChild(card);
        card.appendChild(cardImg);
        main.appendChild(aLink);

        price = response[i].price / 100;

        card.innerHTML += "<h2>" + response[i].name +"</h2>";
        card.innerHTML += "<p>" + response[i].description + "</p>";
        card.innerHTML += "<p>" + "Price " + "	&#163;" + price.toFixed(2) + "</p>";
    }
}

init = async () => {
    try{
        const requestPromise = getApi();
        const response = await requestPromise;
        fillTable(response);

        aLink.addEventListener('click', () => {
            window.location.assign("item.html");
        });
    }catch(error){
        console.log(error);
    }
}
init();
