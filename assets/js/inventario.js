var botaoInv = document.querySelector(".inv")
var botaoMer = document.querySelector(".mer")

botaoInv.addEventListener("click", function() {
    document.getElementsByClassName("mercado").style.display = "none";
    document.getElementsByClassName("inventario").style.display = "flex";
})

botaoMer.addEventListener("click", function(){
    document.getElementsByClassName("inventario").style.display = "none";
    document.getElementsByClassName("mercado").style.display = "flex"
})