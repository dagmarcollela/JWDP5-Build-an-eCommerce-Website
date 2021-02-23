const apiAddress = "http://localhost:3000/api/cameras";

const imgCard = document.getElementById("img-card");

getApi = () => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("GET", apiAddress);
        request.send();
        request.onreadystatechange = () => {
            if(request.readyState === 4) {
                if(request.status === 200) {
                    resolve(JSON.parse(request.response));
                }else{
                    reject('Server is offline');
                    window.location.replace('../index.html');
                }
            }
        }
    });
}

fillTable = (response) => {

}