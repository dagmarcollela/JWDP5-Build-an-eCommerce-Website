const apiAddress = "http://localhost:3000/api/cameras";

const activeButton = document.getElementById("btn-goto-shopping");
const activeLabel = document.getElementById("lb_msg_error");

getApi = () => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("GET", apiAddress);
        request.send();
        request.onreadystatechange = () => {
            if(request.readyState === 4) {
                if(request.status === 200) {
                    resolve(JSON.parse(request.response));
                    activeLabel.style.display = "none";
                }else{
                    reject('Server is offline');
                    activeLabel.style.display = "block";
                }
            }
        }
    });
}

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
        console.log(error + requestPromise + response);
    }
}
init();

activeButton.addEventListener('click', () => {
    window.location.assign("pages/shop.html");
})