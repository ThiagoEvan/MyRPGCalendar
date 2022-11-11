var calendarDays = document.getElementById("dias")
var calendarMonth = document.getElementById("mes")
var data = new Date()
var dayNow = data.getDate()
limite = 31

meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let mes = meses[data.getMonth()]

//Verificar qual o Mês e mudar o limite de dias
mesesL = ["January","April","June","September","November"]
for(let i = 0; i <= mesesL.length - 1; i++){
    if (mes == mesesL[i]) {
        limite = 30
    } else {
        limite = 28
    }
}

//Coloca o Mes
calendarMonth.insertAdjacentHTML("beforeend",`<h2 class="month">${mes}</h2>`)

//Coloca os Dias do Mês
for(let day = 1; day <= limite; day++){
    if (day == dayNow) {
        calendarDays.insertAdjacentHTML("beforeend",`<div class="dayNow">${day}</div>`)
    } else {
        calendarDays.insertAdjacentHTML("beforeend",`<div class="day">${day}</div>`)
    }
}