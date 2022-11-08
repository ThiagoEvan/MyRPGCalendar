var calendarioDias = document.getElementById("dias")
var data = new Date()
var dayNow = data.getDate()
// console.log(day)
// for(let day = 1; day >= 31; day++){
//     calendarioDias.insertAdjacentHTML("beforeend",`<div class="day">${day}</div>`)
// }
//Listar Dias do Mês
for(let day = 1; day <= 31; day++){
    
    if (day == dayNow) {
        calendarioDias.insertAdjacentHTML("beforeend",`<div class="dayNow">${day}</div>`)
    } else {
        calendarioDias.insertAdjacentHTML("beforeend",`<div class="day">${day}</div>`)
    }
}