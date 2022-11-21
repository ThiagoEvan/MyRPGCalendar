var calendarDays = document.getElementById("dias")
var calendarMonth = document.getElementById("mes")
var date = new Date()
var dayNow = date.getDate()

//Verificar o dia que começa e os dias do mês anterior
week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] //Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sabado
let w = week[date.getDay()]
var l = date.getDay()
for(let i = 0; i <= l; i++){
    date.setDate(-1)
    let previous_day = date.getDate()
    calendarDays.insertAdjacentHTML("afterbegin",`<div class="previous_day">${previous_day+1}</div>`)
}

//Verificar o limite de dias do Mês atual
date = new Date()
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var thirty_months = ["January","April","June","September","November"]
let month = months[date.getMonth()]
var limite = 31
for(let i = 0; i <= thirty_months.length - 1; i++){
    if (month == thirty_months[i]) {
        limite = 30
    } else {
        limite = 28
    }
}
//Coloca o Mês atual
calendarMonth.insertAdjacentHTML("beforeend",`<h2 class="month">${mes}</h2>`)

//Coloca os Dias do Mês
for(let day = 1; day <= limite; day++){
    if (day == dayNow) {
        calendarDays.insertAdjacentHTML("beforeend",`<div class="dayNow">${day}</div>`)
    } else {
        calendarDays.insertAdjacentHTML("beforeend",`<div class="day">${day}</div>`)
    }
}

//Verificar os proximos dias do proximo mês (testing...)
var m = date.getMonth()
date.setMonth(m+1)
for(let i = l; i <= 3; i++){
    calendarDays.insertAdjacentHTML("beforeend",`<div class="dayNow">${l}</div>`)
}