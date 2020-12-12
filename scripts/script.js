
let admissao 
let demissao 
let salario 
let dataDem
let lastMonthDaysWorked


document.querySelector("button").addEventListener("click", function(){
    
 admissao = document.getElementById("adm").value;
 demissao = document.getElementById("dem").value;
 salario = document.getElementById("sal").value;
    calcSaldo()

   


})

function calcSaldo(){
    dataDem = new Date(demissao);
    console.log(dataDem)
    let lastMonthDaysWorked = dataDem.getDate() +1; 
    let lastMonthDays = new Date(dataDem.getFullYear(), dataDem.getMonth() +1, 0)
    console.log(lastMonthDays.getDate());
    let saldoSal = (salario/lastMonthDays.getDate()) * lastMonthDaysWorked; 
    console.log(saldoSal.toFixed(2))
    document.getElementById("saldoDeSalario").innerHTML = saldoSal.toFixed(2)
}

function calcAvPrev(){
    let dataAdm = new Date(admissao)
    let anoDem = dataDem.getFullYear()
    let anoAdm = dataAdm.getFullYear()
    for( let i = anoAdm; i < anoDem; i++){

    }
}

