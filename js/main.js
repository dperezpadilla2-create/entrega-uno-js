//SIMULADOR COMPRA DE ENTRADAS

//INICIO
let nombre = prompt("Ingrese su nombre: ")
console.log("Ahora puedes iniciar tu reserva, " + nombre)

//EVENTOS DISPONIBLES
let evento = ""
do{ evento = prompt("Ingrese el evento al que desea asistir: 1. Concierto 2. Teatro 3. Cine 4. Deportes")
} while (evento !== "1" && 
    evento !== "2" && 
    evento !== "3" && 
    evento !== "4")

    switch (evento) {
        case "1":
            console.log(nombre + " ha seleccionado el evento: Concierto")
            break;
        case "2":
            console.log(nombre + " ha seleccionado el evento: Teatro")
            break;
        case "3":
            console.log(nombre + " ha seleccionado el evento: Cine")
            break;
        case "4":
            console.log(nombre + " ha seleccionado el evento: Deportes")
            break;
        default: 
            console.log("No ha seleccionado un evento válido")
    }

//CANTIDAD DE ENTRADAS
let cantidadEntradas = Number(prompt("Ingrese la cantidad de entradas que desea comprar: "))

while (cantidadEntradas <= 0 || cantidadEntradas > 4) {
    console.log("Debe ingresar una cantidad mayor a 0 y máximo 4")

    cantidadEntradas = Number(
        prompt("Ingrese nuevamente la cantidad de entradas: "))
    }
    console.log("Ha seleccionado " + cantidadEntradas + " entradas")

//TARIFA DE ENTRADAS
const tarifaNino = 5000
const tarifaAdulto = 10000
const tarifaAdultoMayor = 7000

//TOTAL A PAGAR
let totalPagar = 0


//TIPO DE ASISTENTE Y PRECIO DE ENTRADA
for (let i = 1; i <= cantidadEntradas; i++) {
    let edad = Number(prompt("Ingrese la edad del asistente " + i + ": "))
    let precioEntrada = 0

    if (edad >= 0 && edad < 3) {
        precioEntrada = 0
        console.log("El asistente " + i + " Gratis, no paga entrada")
        }else if (edad >= 3 && edad <= 12) {
            precioEntrada = tarifaNino
            console.log("El asistente " + i + " paga entrada de niño: $" + tarifaNino)
        }else if (edad >= 13 && edad <= 64) {
            precioEntrada = tarifaAdulto
            console.log("El asistente " + i + " paga entrada de adulto: $" + tarifaAdulto)
        }else if (edad > 65) {
            precioEntrada = tarifaAdultoMayor
            console.log("El asistente " + i + " paga entrada de adulto mayor: $" + tarifaAdultoMayor)
        }else {
            console.log("El asistente " + i + " no tiene edad válida")
        }
    
  totalPagar = totalPagar + precioEntrada
}

//FINALIZACIÓN DE LA COMPRA
console.log(nombre + ", reservaste " + cantidadEntradas + " entradas. El total a pagar es: $" + totalPagar)