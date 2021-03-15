const activeButton = document.getElementById("btn-goto-shopping");

activeHomePgButton = (response) => {
    if(response != null){
        activeButton.disabled = false;
    }else{
        console.log("Is not working");
        console.log(response);
    }
}

init = async () => {
    try{
        const requestPromise = getApi();
        const response = await requestPromise;
        activeHomePgButton(response);
    }catch(error){
        console.log(error);
    }
}
init();

activeButton.addEventListener('click', () => {
    window.location.assign("pages/shop.html");
})

document.getElementById("email").addEventListener('click',() => {
    window.open('mailto:dagmarcollela@gmail.com');
})