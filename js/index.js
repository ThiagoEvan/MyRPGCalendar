var calendarDays = document.getElementById("dias")
var calendarMonth = document.getElementById("mes")
var d = new Date()
var full_year = d.getFullYear()
var month = d.getMonth() + 1
var date = new Date(`${full_year} ${month} 01`)
var dayNow = date.getDate()
limite = 31

meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let mes = meses[d.getMonth()]

//Verificar o dia que começas
week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] //Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sabado
let w = date.toDateString().slice(0,3)
for(let i = 0; i <= week.length - 1; i++){
    if (w == week[i]) {
        console.log(`O 1° dia do mês começa em ${w}`)
    }
}
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