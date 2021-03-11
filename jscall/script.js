const apiAddress = "http://localhost:3000/api/cameras";
const activeLabel = document.getElementById("lb_msg_error");

let checkStatus = "";

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