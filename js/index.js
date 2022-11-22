var calendarDays = document.getElementById("dias")
var calendarMonth = document.getElementById("mes")
var date = new Date()
var dayNow = date.getDate()

//Verificar o dia que começa e os dias do mês anterior
week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] //Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sabado
let w = week[date.getDay()]
var l = date.getDay()
for(let i = 0; i <= l -1 ; i++){
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
calendarMonth.insertAdjacentHTML("beforeend",`<h2 class="month">${month}</h2>`)

//Coloca os Dias do Mês
for(let day = 1; day <= limite; day++){
    if (day == dayNow) {
        calendarDays.insertAdjacentHTML("beforeend",`<div class="dayNow">${day}</div>`)
    } else {
        calendarDays.insertAdjacentHTML("beforeend",`<div class="day">${day}</div>`)
    }
}

//Verificar os proximos dias do proximo mês (testing...)
date.setDate(limite+1)
w = week[date.getDay()]
for(let i = 0; i <= week.length - 1; i++){
    if(w == week[i]){
        limite = 7 - i
    }
    
}
for(let i = date.getDate(); i <= limite; i++){
    calendarDays.insertAdjacentHTML("beforeend",`<div class="next_day">${i}</div>`)
}

//Mostrar tarefea
calendarDays.addEventListener("click",function(){
    document
    .getElementById("modal")
    .classList
    .toggle("hide")
})

//Adicionar tarefa
var form_task = document.forms["form-tarefa"];
form_task.addEventListener("submit", function () {
    let fname = document.forms["form-tarefa"]["name"].value;
    let fdate = document.forms["form-tarefa"]["date"].value;
    let ftime = document.forms["form-tarefa"]["time"].value;
    let flocal = document.forms["form-tarefa"]["local"].value;
    let fdesc = document.forms["form-tarefa"]["description"].value;
    alert(`Nome:${fname} 
    \nData:${fdate}
    \nHorario:${ftime}
    \nLocal:${flocal}
    \nDescrição${fdesc}`)
})