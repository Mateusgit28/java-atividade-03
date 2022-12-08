function a() {
    let numero = document.getElementById("numero").value
    let positivo = numero * 2
    let negativo = numero * 3

    if (numero > 0) {

        document.getElementById('resposta').innerHTML= " o numero é positivo e o seu dobro é" + positivo
    } else {
        document.getElementById('resposta').innerHTM = " o numero é NEGATIVO e seu TRIPLO è"+ negativo;
    }
}