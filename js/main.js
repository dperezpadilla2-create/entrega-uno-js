
 // SIMULADOR COMPRA DE ENTRADAS

// TARIFA DE ENTRADAS
const tarifaNino = 5000
const tarifaAdulto = 10000
const tarifaAdultoMayor = 7000

// ARRAY DE EVENTOS DISPONIBLES
let eventosDisponibles = [
    "Concierto",
    "Teatro",
    "Cine",
    "Deportes",
    "Festival"
]

// FUNCIÓN PARA CALCULAR PRECIO DE ENTRADA
function calcularPrecio(edad) {
    let precioEntrada = 0

    if (edad >= 0 && edad < 3) {
        precioEntrada = 0
    } else if (edad >= 3 && edad <= 12) {
        precioEntrada = tarifaNino
    } else if (edad >= 13 && edad <= 64) {
        precioEntrada = tarifaAdulto
    } else if (edad >= 65) {
        precioEntrada = tarifaAdultoMayor
    } else {
        console.log("Edad no válida")
        return -1
    }

    return precioEntrada
}

// FUNCIÓN FLECHA PARA SUMAR EL PRECIO DE LAS ENTRADAS
const sumarEntrada = (total, precio) => {
    return total + precio
}

// FUNCIÓN PARA MOSTRAR EL RESUMEN DE LA COMPRA
function mostrarResumen(nombre, evento, cantidadEntradas, totalPagar) {
    console.log(nombre + ", reservaste " + cantidadEntradas + " entradas para " + evento + ". El total a pagar es: $" + totalPagar)
}

// FUNCIÓN PARA MOSTRAR EVENTOS DISPONIBLES
function mostrarEventos(lista) {
    console.log("EVENTOS DISPONIBLES:")

    for (const evento of lista) {
        console.log("Evento: " + evento)
    }

    console.log("Total de eventos: " + lista.length)
}

// MANIPULACIÓN DE EVENTOS
eventosDisponibles.push("Comedia")

eventosDisponibles.unshift("Estreno VIP")

let eventoEliminado = eventosDisponibles.pop()

console.log("Se ha eliminado el evento: " + eventoEliminado)

// BÚSQUEDA DE EVENTOS
let eventoBuscado = prompt("¿Qué evento desea buscar?")

if (eventosDisponibles.includes(eventoBuscado)) {
    let posicionEvento = eventosDisponibles.indexOf(eventoBuscado)

    console.log("El evento " + eventoBuscado + " está disponible en la posición " + posicionEvento)
} else {
    console.log("El evento " + eventoBuscado + " no está disponible")
}

// ACTUALIZACIÓN DE EVENTOS
eventosDisponibles.splice(3, 1, "Cine 3D")

console.log("Se ha actualizado el evento Cine por Cine 3D")

// MOSTRAR CARTELERA ACTUALIZADA
mostrarEventos(eventosDisponibles)

// INICIO
let nombre = prompt("Ingrese su nombre: ")
console.log("Ahora puedes iniciar tu reserva, " + nombre)

// SELECCIÓN DE EVENTO
let evento = ""

do {
    evento = prompt(
        "Ingrese el nombre del evento al que desea asistir:\n" +
        eventosDisponibles.join("\n")
    )

    if (!eventosDisponibles.includes(evento)) {
        console.log("El evento ingresado no está disponible")
    }

} while (!eventosDisponibles.includes(evento))

console.log(nombre + " ha seleccionado el evento: " + evento)

// CANTIDAD DE ENTRADAS
let cantidadEntradas = Number(prompt("Ingrese la cantidad de entradas que desea comprar: "))

while (cantidadEntradas <= 0 || cantidadEntradas > 4) {
    console.log("Debe ingresar una cantidad mayor a 0 y máximo 4")

    cantidadEntradas = Number(
        prompt("Ingrese nuevamente la cantidad de entradas: ")
    )
}

console.log("Ha seleccionado " + cantidadEntradas + " entradas")

// TOTAL A PAGAR
let totalPagar = 0

// TIPO DE ASISTENTE Y PRECIO DE ENTRADA
for (let i = 1; i <= cantidadEntradas; i++) {
    let edad = Number(prompt("Ingrese la edad del asistente " + i + ": "))

    let precioEntrada = calcularPrecio(edad)

    if (precioEntrada === -1) {
        i--
        continue
    }

    console.log("El asistente " + i + " paga: $" + precioEntrada)

    totalPagar = sumarEntrada(totalPagar, precioEntrada)
}

// FINALIZACIÓN DE LA COMPRA
mostrarResumen(nombre, evento, cantidadEntradas, totalPagar)
