const arr = ["piedra", "papel", "tijera"]
const max = arr.length

const juego = Math.floor(Math.random() * max)

const piedraPapelTijera = (prompt("Piedra, papel o tijera: "))


//if (piedraPapelTijera !== arr[juego]) {
//    alert("Escribiste " + piedraPapelTijera + " elige: piedra, papel o tijera")
//}


//el ususario elige piedra
if (piedraPapelTijera === "piedra" && arr[juego] === "piedra") {
    alert("Ambos quedan empatados con piedra")
} else {
    if (piedraPapelTijera === "piedra" && arr[juego] === "papel") {
        alert("Elegiste piedra, la maquina gana con papel")
    }
    else {
        if (piedraPapelTijera === "piedra" && arr[juego] === "tijera") {
            alert("Elegiste piedra, la maquina pierde con tijera")
        }
    }
}

//el usuario elige papel
if (piedraPapelTijera === "papel" && arr[juego] === "papel") {
    alert("Elegiste papel, ambos quedan empatados con papel")
} else {
    if (piedraPapelTijera === "papel" && arr[juego] === "piedra") {
        alert("Elegiste papel, la maquina pierde con piedra")
    }
    else {
        if (piedraPapelTijera === "papel" && arr[juego] === "tijera") {
            alert("Eleiste papel, la maquina gana con tijera")
        }
    }
}

//el usuario elige tijera 
if (piedraPapelTijera === "tijera" && arr[juego] === "tijera") {
    alert("Elegiste tijera, ambos quedan empatados con tijera")
} else {
    if (piedraPapelTijera === "tijera" && arr[juego] === "piedra") {
        alert("Elegiste tijera, la maquina gana con piedra")
    }
    else {
        if (piedraPapelTijera === "tijera" && arr[juego] === "papel") {
            alert("Elegiste tijera, la maquina pierde con papel")
        }
    }
}