function verificarpessoa(){
    let sexo = document.getElementById("sexo").value
    let  nome= document.getElementById("nome").value
    let civil = document.getElementById("civil").value

   
    if (sexo == "f" || civil == "casada") {
        
        document.getElementById("resposta").innerHTML = "quanto tempo de casada?"
        
    }



}