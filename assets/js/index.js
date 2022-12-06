var calendarDays = document.getElementById("dias")
var calendarMonth = document.getElementById("mes")
var date = new Date()
var year = date.getFullYear()
var task = []

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", 	"December"];
var month = date.getMonth() + 1
var nMonth;
var lMonth;
if (month == 12){
	nMonth = 1
	lMonth = month - 1
} else if (month == 1) {
	nMonth = month + 1
	lMonth = 12
} else {
	nMonth = month + 1
	lMonth = month - 1
}
var lastdate = new Date(`${year},${lMonth},01`)
var nextdate = new Date(`${year},${nMonth},01`)

var week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] //Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sabado
var thirty_months = ["January","April","June","September","November"]

//Verificar o dia que começa e os dias do mês anterior
function laterMonth() {
	date.setDate(0)
	let w = week[date.getDay()]
	var l = date.getDay()
	for(let i = 0; i <= week.indexOf(w); i++){
    	calendarDays.insertAdjacentHTML("afterbegin",`<div class="previous_day">${date.getDate()-i}</div>`)
	}
	reset()
}


//Verificar o limite de dias do Mês atual
function monthLimit(){
	nextdate.setDate(0)
	var limit = nextdate.getDate()
	
	reset()
	return limit
}

function getMonth(){
	var month = months[date.getMonth()]
	
	//Coloca o Mês atual
	calendarMonth.insertAdjacentHTML("beforeend",`<h2 class="month">${month}</h2>`)

}


//Coloca os Dias do Mês
function generateDays(){	
	var dayNow = date.getDate()
	var limit = monthLimit()
	for(let day = 1; day <= limit; day++){
    	if (day == dayNow) {
        	calendarDays.insertAdjacentHTML("beforeend",`<div class="dayNow">${day}</div>`)
    	} else {
        	calendarDays.insertAdjacentHTML("beforeend",`<div class="day">${day}</div>`)
    	}
	}
}


//Verificar os proximos dias do proximo mês
function nextMonth(){
	let count = 0
	for(let i = nextdate.getDay(); i <= week.indexOf("Sat") - 1; i++){
	 	calendarDays.insertAdjacentHTML("beforeend",`<div class="next_day">${count+=1}</div>`)
	}
}
//Mostrar tarefa
calendarDays.addEventListener("click",function(){
    document
    .getElementById("modal-setTask")
    .classList
    .toggle("hide")
})

//Adicionar tarefa
document.querySelector(".save").addEventListener("click", function () {
    let fname = document.getElementById("name").value
    let fdate = document.getElementById("date").value
    let ftime = document.getElementById("time").value
    let flocal = document.getElementById("local").value
    let fdesc = document.getElementById("description").value
	let arr = []
	setTask(fname,fdate,ftime,flocal,fdesc)
	document.getElementById("modal-setTask").classList.toggle("hide")
})

//cancelar tarefa
document.querySelector(".cancel").addEventListener("click",function() {
	    document
    .getElementById("modal-setTask")
    .classList
    .toggle("hide")
})

//Colocar tarefa no calendario
function setTask(name,date,time,local,desc){
	var days = document.querySelectorAll("div.day")
	if (date < 10){
		date = date.toString().slice(1)
	}
	for(var i = 0;i <= days.length - 1;i++){
		if(date.toString().slice(8) == days[i].innerHTML){
			days[i].style.backgroundColor = "cyan"
			days[i].classList.add(`evento-${i}`)
		}
	}
	getTask(name,date,time,local,desc)
}
function getTask(name,date,time,local,desc) {
	var create = document.querySelector("#modal-getTask .content main")
	create.insertAdjacentHTML("beforeend","<h3>Evento</h3>")
	create.insertAdjacentHTML("beforeend","<button class='addBar>+</button>")
	create.insertAdjacentHTML("beforeend",`<p>Nome:${name}</p>`)
	create.insertAdjacentHTML("beforeend",`<p>Dia:${date}</p>`)
	create.insertAdjacentHTML("beforeend",`<p>Horario:${time}</p>`)
	create.insertAdjacentHTML("beforeend",`<p>Local:${local}</p>`)
	create.insertAdjacentHTML("beforeend",`<p>Descrição:${desc}</p>`)
}

//Botoes de mostar as tarefas
document.querySelector("button.getTask").addEventListener("click",function (){
	document.getElementById("modal-getTask").classList.toggle("hide")
})
document.querySelector("button.close").addEventListener("click", function() {
	document.getElementById("modal-getTask").classList.toggle("hide")
})

let width = document.querySelector(".bar").style.width = "70%"
function addXp(){
	width = document.querySelector(".bar").style.width.slice(0,2)
	width = parseInt(width)
	width += 10
	if(width == 100) {
		width = 0
	}
	document.querySelector(".bar").style.width = `${width}%`
}

function removeLife(){

}
function reset() {
	date = new Date()
}

function init() {
	getMonth()
	laterMonth()
	generateDays()
	nextMonth()
}

init()
