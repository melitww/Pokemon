let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    
    let botonMascotaJugador = document.getElementById('boton-pokemon')
    botonMascotaJugador.addEventListener('click', seleccionarPokemonJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonViento = document.getElementById('boton-viento')
    botonViento.addEventListener('click', ataqueViento)
    let botonRayo = document.getElementById('boton-rayo')
    botonRayo.addEventListener('click', ataqueRayo)
    let botonFlechas = document.getElementById('boton-flechas')
    botonFlechas.addEventListener('click', ataqueFlechas)
    let botonHielo = document.getElementById('boton-hielo')
    botonHielo.addEventListener('click', ataqueHielo)
    let botonAlmohadas = document.getElementById('boton-almohadas')
    botonAlmohadas.addEventListener('click', ataqueAlmohadas)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarPokemonJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-pokemon')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    let inputCharmander = document.getElementById('charmander')
    let inputSquirtle = document.getElementById('squirtle')
    let inputBulbasaur = document.getElementById('bulbasaur')
    let inputButterfree = document.getElementById('butterfree')
    let inputKirby = document.getElementById('kirby')
    let inputPikachu = document.getElementById('pikachu')
    let inputPsyduck = document.getElementById('psyduck')
    let inputSnorlax = document.getElementById('snorlax')
    let spanPokemonJugador = document.getElementById('pokemon-jugador')
    
    if (inputCharmander.checked) {
        spanPokemonJugador.innerHTML = 'Charmander'
    } else if (inputSquirtle.checked) {
        spanPokemonJugador.innerHTML = 'Squirtle'
    } else if (inputBulbasaur.checked) {
        spanPokemonJugador.innerHTML = 'Bulbasaur'
    } else if (inputButterfree.checked) {
        spanPokemonJugador.innerHTML = 'Butterfree'
    } else if (inputKirby.checked) {
        spanPokemonJugador.innerHTML = 'Kirby'
    } else if (inputPikachu.checked) {
        spanPokemonJugador.innerHTML = 'Pikachu'
    } else if (inputPsyduck.checked) {
        spanPokemonJugador.innerHTML = 'Psyduck'
    } else if (inputSnorlax.checked) {
        spanPokemonJugador.innerHTML = 'Snorlax'
    } else {
         alert('Selecciona un Pokemon')
    }

    seleccionarPokemonEnemigo()

}

const tarjetas = 
document.querySelectorAll('.tarjetas')
;
tarjetas.forEach(op => {
    op.addEventListener('click', () =>
{
      alert('Seleccionaste: ' +
        op.tarjetas);
     });
    });

function seleccionarPokemonEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('pokemon-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Charmander'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Squirtle'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Bulbasaur'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Butterfree'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Kirby'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Psyduck'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Pikachu'
    } else {
        spanMascotaEnemigo.innerHTML = 'Snorlax'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
function ataqueRayo() {
    ataqueJugador = 'RAYO'
    ataqueAleatorioEnemigo()
}
function ataqueHielo() {
    ataqueJugador = 'HIELO'
    ataqueAleatorioEnemigo()
}
function ataqueFlechas() {
    ataqueJugador = 'FLECHAS'
    ataqueAleatorioEnemigo()
}
function ataqueAlmohadas() {
    ataqueJugador = 'ALMOHADAS'
    ataqueAleatorioEnemigo()
}
function ataqueViento() {
    ataqueJugador = 'VIENTO'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,8)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'TIERRA'
    } else if (ataqueAleatorio == 4) {
        ataqueEnemigo = 'VIENTO'
    } else if (ataqueAleatorio == 5) {
        ataqueEnemigo = 'RAYO'
    } else if (ataqueAleatorio == 6) {
        ataqueEnemigo = 'HIELO'
    } else if (ataqueAleatorio == 7) {
        ataqueEnemigo = 'FLECHAS'
    } else {
        ataqueEnemigo = 'ALMOHADAS'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'VIENTO' && ataqueEnemigo == 'FLECHAS') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'VIENTO' && ataqueEnemigo == 'ALMOHADAS') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'VIENTO' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'VIENTO' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'HIELO' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'HIELO' && ataqueEnemigo == 'ALMOHADAS') {
        crearMensaje("EMPATE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'HIELO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'RAYO' && ataqueEnemigo == 'HIELO') {
        crearMensaje("EMPATE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'RAYO' && ataqueEnemigo == 'FLECHAS') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'RAYO' && ataqueEnemigo == 'AGUA') {
        crearMensaje("EMPATE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'RAYO' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("EMPATE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'RAYO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'ALMOHADAS' && ataqueEnemigo == 'RAYO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'ALMOHADAS' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'ALMOHADAS' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("EMPATE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'RAYO' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'RAYO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'ALMOHADAS' && ataqueEnemigo == 'RAYO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'ALMOHADAS' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'ALMOHADAS' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("EMPATE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'FLECHAS' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'FLECHAS' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'FLECHAS' && ataqueEnemigo == '') {
        crearMensaje("GANSTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'ALMOHADAS' && ataqueEnemigo == 'FLECHAS') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'ALMOHADAS' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let botonViento = document.getElementById('boton-viento')
    botonViento.disabled = true
    let botonRayo = document.getElementById('boton-rayo')
    botonRayo.disabled = true
    let botonHielo = document.getElementById('boton-hielo')
    botonHielo.disabled = true
    let botonFlechas = document.getElementById('boton-flechas')
    botonFlechas.disabled = true
    let botonAlmohadas = document.getElementById('boton-almohadas')
    botonAlmohadas.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
