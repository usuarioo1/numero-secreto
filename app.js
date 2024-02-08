// let titulo = document.querySelector('h1');

// titulo.innerHTML = 'juego del numero secreto'

let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

let numeroSecreto = generarNumeroSecreto(); // Llamada a generarNumeroSecreto() después de asignar un valor a numeroMaximo

let instruccion = document.querySelector('p');
instruccion.innerHTML = 'escoje un numero del 1 al 10';

function asignarTextElemento(elemento, texto) {

    let elementoHTML = document.querySelector(elemento);

    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {


    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario)
    //console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextElemento('p', 'el numero secrero es menor ')
        } else {
            asignarTextElemento('p', ' el numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }

    return
}

function limpiarCaja() {

    document.querySelector('#valorUsuario').value = ''

}


function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1

    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextElemento('p', ' ya se sortearon todos los numeros posibles')
    } else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
    // si el numero generado esta incluido en la lista 

    

}

function condicionesIniciales() {
    asignarTextElemento('h1', 'juego del numero secreto!')
    asignarTextElemento('p', ` indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {

    //limpar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //genrar numero random
    //deshabilitar el boton de nuevo juego
    //inicializar el numero de intentos
    

    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


