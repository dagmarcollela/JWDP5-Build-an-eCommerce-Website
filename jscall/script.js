const apiAddress = "http://localhost:3000/api/cameras";
const activeLabel = document.getElementById("lb_msg_error");
const cartQuantityItens = document.getElementById("cartQttItens");

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
                    let quantityItens = window.localStorage.length
                    cartQuantityItens.innerHTML = quantityItens;
                }else{
                    reject('Server is offline');
                    activeLabel.style.display = "block";
                }
            }
        }
    });
}