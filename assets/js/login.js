function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toglepop() {
    var x = document.getElementsByClassName("container-pop");
    x = x[0];
    var y = document.getElementsByClassName("container");
    y = y[0]; 
    if (x.style.display === "none") {
        x.style.display = "flex";
        y.style.display = "none";
        document.getElementById("confirma-login").innerHTML = ""
    } else {
        x.style.display = "none";
        y.style.display = "flex";
        document.getElementById("confirma-login").innerHTML = ""
    }
}

function storeAccount(){
    var x = document.getElementsByClassName("container-pop");
    x = x[0];
    var y = document.getElementsByClassName("container");
    y = y[0];

    let usuario = document.querySelectorAll("input")[2].value;
    let arr = [];
    let email = document.querySelectorAll("input")[3].value;
    let senha = document.querySelectorAll("input")[4].value;
    if (usuario !== null && senha !== null && email !== null && usuario !== "" && senha !== "" && email !== ""){
        if (localStorage.getItem(usuario) === null){
            console.log(usuario, email, senha);

            document.querySelectorAll("input")[2].value = "";
            document.querySelectorAll("input")[3].value = "";
            document.querySelectorAll("input")[4].value = "";
    
            arr.push(email);
            arr.push(senha);
    
            localStorage.setItem(usuario, JSON.stringify(arr));
            x.style.display = "none";
            y.style.display = "flex";
        }
        document.getElementById("confirma-registro").innerHTML = "Esse nome de usuário já está em uso!!"
    }
}

function logar(){
    let usuario = document.querySelectorAll("input")[0].value;
    let senha = document.querySelectorAll("input")[1].value;

    console.log(usuario, senha);

    let autenticar = localStorage.getItem(usuario)
    autenticar = autenticar.replaceAll("[","").replaceAll("]","").replaceAll('"','').split(",")
    autenticar = autenticar[1]
    console.log(autenticar[1]);
    if (autenticar === senha){
        console.log("logado")
        document.querySelectorAll("input")[0].value = "";
        document.querySelectorAll("input")[1].value = "";
        document.getElementById("confirma-login").innerHTML = "Logado com sucesso!"
        sleep(200)
        window.location.href = "./index.html";
    } else {
        document.querySelectorAll("input")[0].value = "";
        document.querySelectorAll("input")[1].value = "";
        document.getElementById("confirma-login").innerHTML = "Senha ou usuário errado!"
    }
    

}

localStorage.removeItem("")