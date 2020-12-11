

 

document.querySelector("button").addEventListener("click", function(){
    let admissao = document.getElementById("adm").value;
    let demissao = document.getElementById("dem").value;
    let salario = document.getElementById("sal").value;

    let dataDem = new Date(demissao);
    let lastMonthDays = dataDem.getDate() +1; 
    console.log(lastMonthDays)

    let saldoSal = salario/30 * lastMonthDays; 
    console.log(saldoSal)


})


