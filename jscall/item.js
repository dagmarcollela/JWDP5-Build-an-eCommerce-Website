let getUrl = "";
let getUrlId = "";
let getLenses = "";
let cartProductId = "";
let cartProductLense = "";
let optionSelect = "";
let cameraName = "";
let cameraPrice = "";



getUrl = window.location.href;
getUrlId = getUrl.split('id=');


const imgCard = document.getElementById("imgCard");
const cardText = document.getElementById("cardText");
const divSelect = document.getElementById("inlineFormCustomSelectPref");
const buyButton = document.getElementById("buyItem");



itemCard = (response) => {

    for(let i in response){

        if(getUrlId[1] == response[i]._id){

            imgCard.src = response[i].imageUrl;
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
}

init = async () => {
    try{
        const requestPromise = getApi();
        const response = await requestPromise;
        itemCard(response);
    }catch(error){
        console.log(error +'aaa');
    }
}
init();

buyButton.addEventListener('click', (event) => {
    event.preventDefault();
    cartProductLense = document.querySelector('select').value;
    console.log(cartProductLense);   
    const data = {
        name: cameraName,
        price: cameraPrice,
        lenses: optionSelect.value
    };
    localStorage.setItem(cameraName + optionSelect.value + cameraPrice, JSON.stringify(data));
});


/*  ByteLengthQueuingStrategy.addEventListener('click',() => {       
        const data = {
            name: response.name,
            price: response.price
            };
            localStorage.setItem(response.name + optionSelect, JSON.stringify(data));
            }); */

