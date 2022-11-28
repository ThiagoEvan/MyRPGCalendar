const items = [
    {
        id: 0,
        nome: "armadura couro",
        img: "img.jpg",
        preco: 20,
        tipo: "roupa",
        quantidade: 0
    },
    {
        id: 1,
        nome: "armadura ouro",
        img: "img.jpg",
        tipo: "roupa",
        preco: 30,
        quantidade: 0
    },
    {
        id: 2,
        nome: "armadura ferro",
        img: "img.jpg",
        preco: 25,
        tipo: "roupa",
        quantidade: 0
    },
    {
        id: 3,
        nome: "espada madeira",
        img: "img.jpg",
        preco: 20,
        tipo: "arma",
        quantidade: 0
    },
    {
        id: 4,
        nome: "armadura ferro",
        img: "img.jpg",
        preco: 30,
        tipo: "arma",
        quantidade: 0
    },
    {
        id: 5,
        nome: "armadura ouro",
        img: "img.jpg",
        preco: 25,
        tipo: "arma",
        quantidade: 0
    }
]

function InicializarLoja(){
    var containerMer = document.getElementById('mer');

    items.map(function(produto){
        containerMer.innerHTML += ` 

            <div class="produto">
                <img src="./images/`+produto.img+`"/>
                <span>`+produto.nome+`</span>
                <a key="`+produto.id+`" href="#"> Comprar </a> 
            </div>
        `
    }) 
}
InicializarLoja();

function atualizarInv(){
    var containerMer = document.getElementById('inv');

    items.map(function(produto){
        containerMer.innerHTML += ` 

            <div class="produto">
                <img src="./images/`+produto.img+`"/>
                <span>`+produto.nome+`</span>
                
            </div>
        `
    })

}

var links = document.getElementsByTagName("a")

for (var i = 0; i < links.length; i++) {

    links[i].addEventListener("click", function(){
    
        let key = this.getAttribute("key")
    
        items[key].quantidade++;
    
        atualizarInv();
    
        return false;
    })
}