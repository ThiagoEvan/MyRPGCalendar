const items = [
    {
        id: 0,
        nome: "armadura couro",
        img: "armadura couro.png",
        preco: 20,
        tipo: "roupa",
        quantidade: 0
    },
    {
        id: 1,
        nome: "armadura ferro",
        img: "armadura ferro.png",
        preco: 25,
        tipo: "roupa",
        quantidade: 0
    },
    {
        id: 2,nome: "armadura ouro",
        img: "armadura ouro.png",
        tipo: "roupa",
        preco: 30,
        quantidade: 0
        
    },
    {
        id: 3,
        nome: "espada madeira",
        img: "espada madeira.png",
        preco: 20,
        tipo: "arma",
        quantidade: 0
    },
    {
        id: 4,
        nome: "espada ferro",
        img: "espada ferro.png",
        preco: 30,
        tipo: "arma",
        quantidade: 0
    },
    {
        id: 5,
        nome: "espada ouro",
        img: "espada ouro.png",
        preco: 25,
        tipo: "arma",
        quantidade: 0
    }
]

function Loja(){
    var containerMer = document.getElementById('mer');
    
    var divRoupa = `
    <h2> Roupas </h2>
    <div class="roupa">
    `;

    var divArma = `

    <h2> Armas </h2>
    <div class="arma">
    `;

    items.map(function(produto){

        if (produto.tipo == 'arma') {
            divArma += ` 
            <div class="produto">
                <img src="./assets/images/`+produto.img+`"/>
                <span>`+produto.nome+`</span>
                <p>Preço:`+produto.preco+`</p>
                <button key="`+produto.id+`" class="compra"> Comprar </button> 
            </div>

        `
        }
        if (produto.tipo =='roupa'){

            divRoupa += ` 
            <div class="produto">
                <img src="./assets/images/`+produto.img+`"/>
                <span>`+produto.nome+`</span>
                <p>Preço:`+produto.preco+`</p>
                <button key="`+produto.id+`"> Comprar </button> 
            </div>

        `
        }}) 

        divArma += '</div>';
        divRoupa += '</div>'; 

    containerMer.innerHTML += divArma + divRoupa

}


function Inventario(){

    var containerInv = document.getElementById('inv');

    containerInv.innerHTML = "";

    var divRoupa = `
    <h2> Roupas </h2>
    <div class="roupa">
    `;

    var divArma = `
    <h2> Armas </h2>
    <div class="arma">
    `;

    items.map(function(produto){

        if (produto.tipo == 'arma') {
            divArma += ` 
            <div class="produto">
                <img src="./assets/images/`+produto.img+`"/>
                <span>`+produto.nome+`</span>
                <span>quantidade:`+produto.quantidade+` </span>
            </div>

        `
        }
        if (produto.tipo =='roupa'){

            divRoupa += ` 
            <div class="produto">
                <img src="./assets/images/`+produto.img+`"/>
                <span>`+produto.nome+`</span>
                <span>quantidade:`+produto.quantidade+` </span>
            </div>
        `
        }}) 

        divArma += '</div>';
        divRoupa += '</div>'; 

    containerInv.innerHTML +=  divArma + divRoupa
}

Inventario();
Loja();


var links = document.getElementsByClassName("compra")

for (let i = 0; i < links.length; i++) {

    links[i].addEventListener("click", function(){
    
        let key = this.getAttribute("key")
    
        items[key].quantidade++;
    
        Inventario();
        alert("Compra feita!!")
    
        return false;
    })
}

var b = document.querySelector(".mercados")

b.addEventListener("click",function(){
    document.querySelector('#mer').classList.toggle("hide")
})

var inv = document.querySelector(".inventario")
inv.addEventListener("click",function(){
    document.querySelector("#mer").classList.toggle("hide")
})

