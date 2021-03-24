let getUrl = "";
let getUrlId = "";
let getLenses = "";
let cartProductId = "";
let cartProductLense = "";
let optionSelect = "";
let cameraName = "";
let cameraPrice = "";
let camId = "";
let localStorageKey = "";



getUrl = window.location.href;
getUrlId = getUrl.split('id=');


const imgCard = document.getElementById("imgCard");
const cardText = document.getElementById("cardText");
const divSelect = document.getElementById("inlineFormCustomSelectPref");
const buyButton = document.getElementById("buyItem");
const cartCameraName = document.getElementById("cameraName");



itemCard = (response) => {

    quantityItens = window.localStorage.length
    cartQuantityItens.innerHTML = quantityItens;

    for(let i in response){

        if(getUrlId[1] == response[i]._id){

            camId = response[i]._id;

            imgCard.src = response[i].imageUrl;

            cartCameraName.innerHTML += "<p>" + "<b>" + response[i].name + "</b>" + "</p>" + "</br>";
            cardText.innerHTML = response[i].description;
            cardText.innerHTML += "<p>" + "</br>" + "<b>" + "	&#163;" + response[i].price / 100 + "</b>" + "</p>";

            getLenses = response[i].lenses

            cameraName = response[i].name;
            cameraPrice = response[i].price;
            
            for(let a in getLenses){
                let separeLenses = getLenses[a].split(',');
                optionSelect = document.createElement("option");
                optionSelect.innerHTML = separeLenses;
                optionSelect.setAttribute("value", separeLenses);
                
                let valueSelect = document.createElement("value");
                divSelect.appendChild(optionSelect);                
            }
        }
    }
    for(let c = 1; c <= localStorage.length; c++){
        localStorageKey = c;
    }
    localStorageQtt = localStorageKey + 1;

    buyButton.addEventListener('click', (event) => {
        event.preventDefault();
        cartProductLense = document.querySelector('select').value;
        console.log(cartProductLense);   
        
        const data = {
            name: cameraName,
            price: cameraPrice,
            lenses: cartProductLense,
            _id: getUrlId[1]
        };
        localStorage.setItem(localStorageQtt, JSON.stringify(data));
        window.location.assign("./shop.html");
    });
}

init = async () => {
    try{
        const requestPromise = getApi();
        const response = await requestPromise;
        itemCard(response);
    }catch(error){
        console.log(error);
    }
}
init();
