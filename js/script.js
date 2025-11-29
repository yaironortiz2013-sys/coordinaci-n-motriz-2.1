// Navegación móvil
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
});

// Juego de Coordinación Motriz
let secuenciaCorrecta = [];
let secuenciaUsuario = [];
let movimientos = ['saltar', 'girar', 'aplaudir', 'agacharse'];

function iniciarJuegoCoordinacion() {
    secuenciaCorrecta = [];
    secuenciaUsuario = [];
    
    // Generar secuencia aleatoria de 3-5 movimientos
    const longitud = Math.floor(Math.random() * 3) + 3;
    for (let i = 0; i < longitud; i++) {
        secuenciaCorrecta.push(movimientos[Math.floor(Math.random() * movimientos.length)]);
    }
    
    mostrarSecuencia();
}

function mostrarSecuencia() {
    const resultado = document.getElementById('resultado-coordinacion');
    if (resultado) {
        resultado.innerHTML = '<p>Observa la secuencia y luego repítela:</p>';
        resultado.className = 'resultado-juego';
        
        let indice = 0;
        const intervalo = setInterval(() => {
            if (indice < secuenciaCorrecta.length) {
                resultado.innerHTML = `<p>Movimiento ${indice + 1}: ${secuenciaCorrecta[indice]}</p>`;
                indice++;
            } else {
                clearInterval(intervalo);
                resultado.innerHTML = '<p>¡Ahora repite la secuencia!</p>';
                secuenciaUsuario = [];
            }
        }, 1000);
    }
}

// Event listeners para botones de movimiento
document.addEventListener('DOMContentLoaded', function() {
    const botonesMovimiento = document.querySelectorAll('.btn-movimiento');
    botonesMovimiento.forEach(boton => {
        boton.addEventListener('click', function() {
            const movimiento = this.getAttribute('data-movimiento');
            if (movimiento) {
                secuenciaUsuario.push(movimiento);
                verificarSecuencia();
            }
        });
    });
    
    // Asegurar que las funciones estén disponibles globalmente
    window.iniciarJuegoCoordinacion = iniciarJuegoCoordinacion;
    window.iniciarContador = iniciarContador;
    window.contarMovimiento = contarMovimiento;
    window.iniciarJuegoMemoria = iniciarJuegoMemoria;
    window.iniciarJuegoPrecision = iniciarJuegoPrecision;
    window.iniciarJuegoSeguimiento = iniciarJuegoSeguimiento;
    window.clickSeguimiento = clickSeguimiento;
    window.moverPersonaje = moverPersonaje;
    window.inicializarJuegoDirecciones = inicializarJuegoDirecciones;
    window.seleccionarEvento = seleccionarEvento;
    window.verificarSecuenciaTemporal = verificarSecuenciaTemporal;
    window.verificarPosicion = verificarPosicion;
    window.nuevaPosicion = nuevaPosicion;
    window.verificarQuiz = verificarQuiz;
});

function verificarSecuencia() {
    const resultado = document.getElementById('resultado-coordinacion');
    if (!resultado) return;

    if (secuenciaUsuario.length === secuenciaCorrecta.length) {
        let correcto = true;
        for (let i = 0; i < secuenciaCorrecta.length; i++) {
            if (secuenciaUsuario[i] !== secuenciaCorrecta[i]) {
                correcto = false;
                break;
            }
        }

        if (correcto) {
            resultado.innerHTML = '<p>¡Excelente! Has completado la secuencia correctamente. 🎉</p>';
            resultado.className = 'resultado-juego correcto';
            setTimeout(() => {
                iniciarJuegoCoordinacion();
            }, 3000);
        } else {
            resultado.innerHTML = '<p>Inténtalo de nuevo. La secuencia no fue correcta. Observa bien la secuencia.</p>';
            resultado.className = 'resultado-juego incorrecto';
            setTimeout(() => {
                secuenciaUsuario = [];
                resultado.innerHTML = '<p>Intenta de nuevo. Haz clic en "Iniciar Secuencia" para comenzar.</p>';
                resultado.className = 'resultado-juego';
            }, 2000);
        }
    }
}

// Juego de Memoria de Movimientos
function iniciarJuegoMemoria() {
    const resultado = document.getElementById('resultado-memoria');
    if (!resultado) return;
    
    resultado.innerHTML = '<p>🎮 Este juego está en desarrollo. Por ahora, practica con el juego de secuencias arriba.</p>';
    resultado.className = 'resultado-juego';
}

// Juego de Precisión (Coordinación Viso-manual)
let puntosPrecision = 0;
let tiempoPrecision = 30;
let intervaloPrecision = null;
let intervaloObjetivos = null;
let juegoActivo = false;

function iniciarJuegoPrecision() {
    // Limpiar juego anterior si existe
    if (intervaloPrecision) {
        clearInterval(intervaloPrecision);
    }
    if (intervaloObjetivos) {
        clearInterval(intervaloObjetivos);
    }
    
    if (juegoActivo) {
        alert('El juego ya está en curso. Espera a que termine.');
        return;
    }
    
    juegoActivo = true;
    puntosPrecision = 0;
    tiempoPrecision = 30;
    
    const puntosElement = document.getElementById('puntos-precision');
    const tiempoElement = document.getElementById('tiempo-precision');
    const areaJuego = document.getElementById('area-precision');
    const resultadoElement = document.getElementById('resultado-precision');
    
    if (!puntosElement || !tiempoElement || !areaJuego) {
        console.error('Elementos del juego no encontrados');
        return;
    }
    
    // Limpiar área y resultados
    puntosElement.textContent = puntosPrecision;
    tiempoElement.textContent = tiempoPrecision;
    areaJuego.innerHTML = '';
    if (resultadoElement) {
        resultadoElement.innerHTML = '';
        resultadoElement.className = '';
    }
    
    // Crear objetivos aleatorios
    const crearObjetivo = () => {
        if (!juegoActivo) return;
        
        const objetivo = document.createElement('button');
        objetivo.className = 'objetivo';
        objetivo.innerHTML = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>';
        objetivo.setAttribute('aria-label', 'Objetivo');
        
        // Calcular posición aleatoria
        const maxX = Math.max(0, areaJuego.offsetWidth - 70);
        const maxY = Math.max(0, areaJuego.offsetHeight - 70);
        objetivo.style.left = Math.random() * maxX + 'px';
        objetivo.style.top = Math.random() * maxY + 'px';
        objetivo.style.position = 'absolute';
        objetivo.style.cursor = 'pointer';
        
        objetivo.addEventListener('click', function() {
            objetivoClickado(this);
        });
        
        areaJuego.appendChild(objetivo);
        
        // Eliminar objetivo después de 2 segundos si no se hace clic
        setTimeout(() => {
            if (objetivo.parentNode && juegoActivo) {
                objetivo.remove();
            }
        }, 2000);
    };
    
    // Crear objetivo cada 1.5 segundos
    intervaloObjetivos = setInterval(() => {
        if (juegoActivo) {
            crearObjetivo();
        } else {
            clearInterval(intervaloObjetivos);
        }
    }, 1500);
    
    // Timer
    intervaloPrecision = setInterval(() => {
        tiempoPrecision--;
        if (tiempoElement) {
            tiempoElement.textContent = tiempoPrecision;
        }
        
        if (tiempoPrecision <= 0) {
            clearInterval(intervaloPrecision);
            if (intervaloObjetivos) {
                clearInterval(intervaloObjetivos);
            }
            juegoActivo = false;
            areaJuego.innerHTML = '';
            
            if (resultadoElement) {
                resultadoElement.innerHTML = `<p>¡Tiempo terminado! Puntuación final: ${puntosPrecision} puntos</p>`;
                if (puntosPrecision >= 20) {
                    resultadoElement.className = 'resultado-juego correcto';
                    resultadoElement.innerHTML += '<p>¡Excelente trabajo!</p>';
                } else if (puntosPrecision >= 10) {
                    resultadoElement.className = 'resultado-juego';
                    resultadoElement.innerHTML += '<p>¡Buen trabajo! Sigue practicando.</p>';
                } else {
                    resultadoElement.className = 'resultado-juego incorrecto';
                    resultadoElement.innerHTML += '<p>¡Sigue practicando para mejorar!</p>';
                }
            }
        }
    }, 1000);
    
    // Crear primer objetivo inmediatamente
    setTimeout(() => {
        crearObjetivo();
    }, 500);
}

function objetivoClickado(objetivo) {
    if (!juegoActivo || !objetivo) return;
    
    puntosPrecision++;
    const puntosElement = document.getElementById('puntos-precision');
    if (puntosElement) {
        puntosElement.textContent = puntosPrecision;
    }
    
    // Efecto visual antes de eliminar
    objetivo.style.transform = 'scale(1.5)';
    objetivo.style.opacity = '0.5';
    
    setTimeout(() => {
        if (objetivo.parentNode) {
            objetivo.remove();
        }
    }, 200);
}

// Juego de Direcciones (Orientación Temporo-espacial)
let posicionPersonaje = { x: 0, y: 0 };
let posicionMeta = { x: 2, y: 2 };

function inicializarJuegoDirecciones() {
    const grid = document.getElementById('grid-direcciones');
    if (!grid) return;
    
    // Resetear posiciones
    posicionPersonaje = { x: 0, y: 0 };
    posicionMeta = { x: 2, y: 2 };
    
    // Limpiar grid
    const celdas = grid.querySelectorAll('.celda');
    celdas.forEach(celda => {
        celda.classList.remove('personaje', 'meta');
        celda.textContent = '';
    });
    
    // Colocar personaje
    const personajeCelda = grid.querySelector(`[data-x="${posicionPersonaje.x}"][data-y="${posicionPersonaje.y}"]`);
    if (personajeCelda) {
        personajeCelda.classList.add('personaje');
        personajeCelda.innerHTML = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>';
    }
    
    // Colocar meta
    const metaCelda = grid.querySelector(`[data-x="${posicionMeta.x}"][data-y="${posicionMeta.y}"]`);
    if (metaCelda) {
        metaCelda.classList.add('meta');
        metaCelda.innerHTML = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>';
    }
}

function moverPersonaje(direccion) {
    const grid = document.getElementById('grid-direcciones');
    if (!grid) return;
    
    const nuevaPosicion = { ...posicionPersonaje };
    
    switch(direccion) {
        case 'arriba':
            if (nuevaPosicion.y > 0) nuevaPosicion.y--;
            break;
        case 'abajo':
            if (nuevaPosicion.y < 2) nuevaPosicion.y++;
            break;
        case 'izquierda':
            if (nuevaPosicion.x > 0) nuevaPosicion.x--;
            break;
        case 'derecha':
            if (nuevaPosicion.x < 2) nuevaPosicion.x++;
            break;
    }
    
    // Verificar si hay una celda en esa posición
    const celdaNueva = grid.querySelector(`[data-x="${nuevaPosicion.x}"][data-y="${nuevaPosicion.y}"]`);
    if (!celdaNueva) return;
    
    // Limpiar posición anterior
    const celdaAnterior = grid.querySelector(`[data-x="${posicionPersonaje.x}"][data-y="${posicionPersonaje.y}"]`);
    if (celdaAnterior) {
        celdaAnterior.classList.remove('personaje');
        celdaAnterior.textContent = '';
    }
    
    // Mover personaje
    posicionPersonaje = nuevaPosicion;
    celdaNueva.classList.add('personaje');
    celdaNueva.innerHTML = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>';
    
    // Verificar si llegó a la meta
    if (posicionPersonaje.x === posicionMeta.x && posicionPersonaje.y === posicionMeta.y) {
        const resultado = document.getElementById('resultado-direcciones');
        if (resultado) {
            resultado.innerHTML = '<p>¡Felicidades! Has llegado a la meta.</p>';
            resultado.className = 'resultado-juego correcto';
        }
        
        // Reiniciar juego después de 2 segundos
        setTimeout(() => {
            inicializarJuegoDirecciones();
            if (resultado) {
                resultado.innerHTML = '';
                resultado.className = '';
            }
        }, 2000);
    }
}

// Inicializar juego de direcciones cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('grid-direcciones')) {
        inicializarJuegoDirecciones();
    }
});

// Sistema de Cuestionarios
const respuestasCorrectas = {
    coordinacion: {
        p1: 'b',
        p2: 'b',
        p3: 'b',
        p4: 'b',
        p5: 'b'
    },
    viso: {
        p1v: 'a',
        p2v: 'b',
        p3v: 'b',
        p4v: 'b',
        p5v: 'a'
    },
    temporo: {
        p1t: 'a',
        p2t: 'b',
        p3t: 'b',
        p4t: 'b',
        p5t: 'b'
    }
};

// Contador de Movimientos
let contadorMovimientos = 0;
let tiempoContador = 10;
let intervaloContador = null;
let contadorActivo = false;

function iniciarContador() {
    if (contadorActivo) return;
    
    contadorActivo = true;
    contadorMovimientos = 0;
    tiempoContador = 10;
    
    const tiempoElement = document.getElementById('tiempo-contador');
    const contadorElement = document.getElementById('contador-movimientos');
    const btnContar = document.getElementById('btn-contar');
    const resultado = document.getElementById('resultado-contador');
    
    if (tiempoElement) tiempoElement.textContent = tiempoContador;
    if (contadorElement) contadorElement.textContent = contadorMovimientos;
    if (btnContar) btnContar.disabled = false;
    if (resultado) resultado.innerHTML = '';
    
    intervaloContador = setInterval(() => {
        tiempoContador--;
        if (tiempoElement) tiempoElement.textContent = tiempoContador;
        
        if (tiempoContador <= 0) {
            clearInterval(intervaloContador);
            contadorActivo = false;
            if (btnContar) btnContar.disabled = true;
            
            if (resultado) {
                if (contadorMovimientos >= 15) {
                    resultado.innerHTML = `<p>¡Excelente! Realizaste ${contadorMovimientos} movimientos.</p>`;
                    resultado.className = 'resultado-juego correcto';
                } else if (contadorMovimientos >= 10) {
                    resultado.innerHTML = `<p>¡Buen trabajo! Realizaste ${contadorMovimientos} movimientos.</p>`;
                    resultado.className = 'resultado-juego';
                } else {
                    resultado.innerHTML = `<p>Realizaste ${contadorMovimientos} movimientos. ¡Sigue practicando!</p>`;
                    resultado.className = 'resultado-juego incorrecto';
                }
            }
        }
    }, 1000);
}

function contarMovimiento() {
    if (!contadorActivo) return;
    contadorMovimientos++;
    const contadorElement = document.getElementById('contador-movimientos');
    if (contadorElement) {
        contadorElement.textContent = contadorMovimientos;
    }
}

function verificarQuiz(tema) {
    const respuestas = respuestasCorrectas[tema];
    if (!respuestas) return;
    
    let correctas = 0;
    let total = 0;
    
    // Verificar cada pregunta
    for (const [pregunta, respuestaCorrecta] of Object.entries(respuestas)) {
        total++;
        const respuestaSeleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
        
        if (respuestaSeleccionada && respuestaSeleccionada.value === respuestaCorrecta) {
            correctas++;
        }
    }
    
    // Mostrar resultado
    const resultadoElement = document.getElementById(`resultado-quiz-${tema}`);
    if (resultadoElement) {
        const porcentaje = Math.round((correctas / total) * 100);
        let mensaje = '';
        let clase = '';
        
        if (porcentaje === 100) {
            mensaje = `¡Perfecto! Has respondido correctamente todas las preguntas (${correctas}/${total}). 🎉`;
            clase = 'correcto';
        } else if (porcentaje >= 50) {
            mensaje = `Buen trabajo. Has respondido correctamente ${correctas} de ${total} preguntas. ¡Sigue practicando!`;
            clase = 'correcto';
        } else {
            mensaje = `Has respondido correctamente ${correctas} de ${total} preguntas. ¡No te desanimes, sigue aprendiendo!`;
            clase = 'incorrecto';
        }
        
        resultadoElement.innerHTML = `<p>${mensaje}</p>`;
        resultadoElement.className = `resultado-quiz ${clase}`;
    }
}

// Juego de Secuencias Temporales
let secuenciaTemporalSeleccionada = [];
let secuenciaTemporalCorrecta = [1, 2, 3, 4, 5, 6, 7]; // Despertarse, Desayunar, Ir a escuela, Almorzar, Jugar, Cenar, Dormir

function seleccionarEvento(numero) {
    if (secuenciaTemporalSeleccionada.includes(numero)) return;
    
    secuenciaTemporalSeleccionada.push(numero);
    const contenedor = document.getElementById('secuencia-seleccionada');
    if (contenedor) {
        const eventos = ['Despertarse', 'Desayunar', 'Ir a la escuela', 'Almorzar', 'Jugar', 'Cenar', 'Dormir'];
        contenedor.innerHTML = '<p><strong>Secuencia seleccionada:</strong> ' + 
            secuenciaTemporalSeleccionada.map(n => eventos[n-1]).join(' → ') + '</p>';
    }
}

function verificarSecuenciaTemporal() {
    const resultado = document.getElementById('resultado-temporal');
    if (!resultado) return;
    
    if (secuenciaTemporalSeleccionada.length !== secuenciaTemporalCorrecta.length) {
        resultado.innerHTML = '<p>Debes seleccionar todos los eventos.</p>';
        resultado.className = 'resultado-juego incorrecto';
        return;
    }
    
    let correcto = true;
    for (let i = 0; i < secuenciaTemporalCorrecta.length; i++) {
        if (secuenciaTemporalSeleccionada[i] !== secuenciaTemporalCorrecta[i]) {
            correcto = false;
            break;
        }
    }
    
    if (correcto) {
        resultado.innerHTML = '<p>¡Excelente! Has ordenado la secuencia correctamente.</p>';
        resultado.className = 'resultado-juego correcto';
    } else {
        resultado.innerHTML = '<p>La secuencia no es correcta. Inténtalo de nuevo.</p>';
        resultado.className = 'resultado-juego incorrecto';
    }
    
    setTimeout(() => {
        secuenciaTemporalSeleccionada = [];
        const contenedor = document.getElementById('secuencia-seleccionada');
        if (contenedor) contenedor.innerHTML = '';
        resultado.innerHTML = '';
        resultado.className = '';
    }, 3000);
}

// Juego de Posiciones Espaciales
let posicionCorrecta = 'arriba';
let posiciones = ['arriba', 'abajo', 'izquierda', 'derecha', 'dentro'];

function nuevaPosicion() {
    posicionCorrecta = posiciones[Math.floor(Math.random() * posiciones.length)];
    const objeto = document.getElementById('objeto-posicion');
    if (objeto) {
        objeto.className = 'objeto-posicion ' + posicionCorrecta;
    }
    const resultado = document.getElementById('resultado-posiciones');
    if (resultado) {
        resultado.innerHTML = '';
        resultado.className = '';
    }
}

function verificarPosicion(posicion) {
    const resultado = document.getElementById('resultado-posiciones');
    if (!resultado) return;
    
    if (posicion === posicionCorrecta) {
        resultado.innerHTML = '<p>¡Correcto! Has identificado la posición correctamente.</p>';
        resultado.className = 'resultado-juego correcto';
    } else {
        resultado.innerHTML = '<p>Incorrecto. Inténtalo de nuevo.</p>';
        resultado.className = 'resultado-juego incorrecto';
    }
    
    setTimeout(() => {
        nuevaPosicion();
    }, 2000);
}

// Inicializar juego de posiciones
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('juego-posiciones-container')) {
        nuevaPosicion();
    }
});

// Juego de Seguimiento Visual
let seguimientoActivo = false;
let aciertosSeguimiento = 0;
let fallosSeguimiento = 0;
let intervaloColor = null;
let puedeClick = false;

function iniciarJuegoSeguimiento() {
    if (seguimientoActivo) return;
    
    seguimientoActivo = true;
    aciertosSeguimiento = 0;
    fallosSeguimiento = 0;
    puedeClick = false;
    
    const circulo = document.getElementById('circulo-seguimiento');
    const aciertosElement = document.getElementById('aciertos-seguimiento');
    const fallosElement = document.getElementById('fallos-seguimiento');
    const resultado = document.getElementById('resultado-seguimiento');
    
    if (aciertosElement) aciertosElement.textContent = aciertosSeguimiento;
    if (fallosElement) fallosElement.textContent = fallosSeguimiento;
    if (resultado) resultado.innerHTML = '';
    
    if (circulo) {
        circulo.style.background = 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))';
    }
    
    intervaloColor = setInterval(() => {
        if (!seguimientoActivo) {
            clearInterval(intervaloColor);
            return;
        }
        
        if (circulo) {
            puedeClick = true;
            circulo.style.background = 'linear-gradient(135deg, var(--color-success), var(--color-secondary))';
            circulo.style.transform = 'scale(1.2)';
            
            setTimeout(() => {
                if (circulo && puedeClick) {
                    puedeClick = false;
                    circulo.style.background = 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))';
                    circulo.style.transform = 'scale(1)';
                    fallosSeguimiento++;
                    if (fallosElement) fallosElement.textContent = fallosSeguimiento;
                }
            }, 1500);
        }
    }, 3000);
    
    setTimeout(() => {
        clearInterval(intervaloColor);
        seguimientoActivo = false;
        puedeClick = false;
        if (circulo) {
            circulo.style.background = 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))';
            circulo.style.transform = 'scale(1)';
        }
        
        if (resultado) {
            const total = aciertosSeguimiento + fallosSeguimiento;
            const porcentaje = total > 0 ? Math.round((aciertosSeguimiento / total) * 100) : 0;
            
            if (porcentaje >= 70) {
                resultado.innerHTML = `<p>¡Excelente! Acertaste ${aciertosSeguimiento} de ${total} intentos (${porcentaje}%).</p>`;
                resultado.className = 'resultado-juego correcto';
            } else if (porcentaje >= 50) {
                resultado.innerHTML = `<p>¡Buen trabajo! Acertaste ${aciertosSeguimiento} de ${total} intentos (${porcentaje}%).</p>`;
                resultado.className = 'resultado-juego';
            } else {
                resultado.innerHTML = `<p>Acertaste ${aciertosSeguimiento} de ${total} intentos (${porcentaje}%). ¡Sigue practicando!</p>`;
                resultado.className = 'resultado-juego incorrecto';
            }
        }
    }, 30000); // 30 segundos
}

function clickSeguimiento() {
    if (!seguimientoActivo) return;
    
    const circulo = document.getElementById('circulo-seguimiento');
    const aciertosElement = document.getElementById('aciertos-seguimiento');
    
    if (puedeClick && circulo) {
        aciertosSeguimiento++;
        puedeClick = false;
        circulo.style.background = 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))';
        circulo.style.transform = 'scale(1)';
        if (aciertosElement) aciertosElement.textContent = aciertosSeguimiento;
    }
}

// Smooth scroll para mejor UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Asegurar que todas las funciones estén disponibles globalmente
window.iniciarJuegoCoordinacion = iniciarJuegoCoordinacion;
window.iniciarContador = iniciarContador;
window.contarMovimiento = contarMovimiento;
window.iniciarJuegoMemoria = iniciarJuegoMemoria;
window.iniciarJuegoPrecision = iniciarJuegoPrecision;
window.iniciarJuegoSeguimiento = iniciarJuegoSeguimiento;
window.clickSeguimiento = clickSeguimiento;
window.moverPersonaje = moverPersonaje;
window.inicializarJuegoDirecciones = inicializarJuegoDirecciones;
window.seleccionarEvento = seleccionarEvento;
window.verificarSecuenciaTemporal = verificarSecuenciaTemporal;
window.verificarPosicion = verificarPosicion;
window.nuevaPosicion = nuevaPosicion;
window.verificarQuiz = verificarQuiz;

