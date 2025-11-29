<?php
$pageTitle = 'Orientación Temporo-espacial - ¡Aprende Jugando!';
include 'includes/header.php';
?>

<main>
    <section class="tema-header">
        <div class="container">
            <h1>🧭 Orientación Temporo-espacial</h1>
            <p class="intro-text">La orientación temporo-espacial es la capacidad de entender dónde estás en el espacio y cómo el tiempo pasa.</p>
        </div>
    </section>

    <section class="contenido-tema">
        <div class="container">
            <div class="contenido-grid">
                <div class="info-box">
                    <h2>¿Qué es la Orientación Espacial?</h2>
                    <p>La orientación espacial es saber dónde están las cosas en relación contigo. Por ejemplo, saber que algo está arriba, abajo, a la izquierda o a la derecha.</p>
                    <div class="imagen-ilustrativa">
                        <div class="placeholder-imagen">🗺️</div>
                        <p class="imagen-descripcion">Mapa mostrando orientación espacial</p>
                    </div>
                </div>

                <div class="info-box">
                    <h2>¿Qué es la Orientación Temporal?</h2>
                    <p>La orientación temporal es entender el tiempo: saber qué hora es, qué día de la semana, qué estación del año, y cómo pasa el tiempo (antes, ahora, después).</p>
                    <div class="imagen-ilustrativa">
                        <div class="placeholder-imagen">⏰</div>
                        <p class="imagen-descripcion">Reloj mostrando el concepto de tiempo</p>
                    </div>
                </div>
            </div>

            <div class="video-container">
                <h2>Video Educativo</h2>
                <div class="video-wrapper">
                    <iframe 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="Video sobre Orientación Temporo-espacial"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <p class="video-nota">Nota: Este es un video de ejemplo. Reemplázalo con un video educativo apropiado.</p>
            </div>

            <div class="actividades-section">
                <h2>🎮 Actividades Interactivas</h2>
                <div class="actividad-box">
                    <h3>Juego de Direcciones</h3>
                    <p>¡Practica tu orientación espacial siguiendo las direcciones!</p>
                    <div id="juego-direcciones" class="juego-container">
                        <div class="juego-direcciones-area">
                            <p>Haz clic en las flechas para mover al personaje:</p>
                            <div class="grid-direcciones" id="grid-direcciones">
                                <div class="celda" data-x="0" data-y="0"></div>
                                <div class="celda" data-x="1" data-y="0"></div>
                                <div class="celda" data-x="2" data-y="0"></div>
                                <div class="celda" data-x="0" data-y="1"></div>
                                <div class="celda" data-x="1" data-y="1"></div>
                                <div class="celda" data-x="2" data-y="1"></div>
                                <div class="celda" data-x="0" data-y="2"></div>
                                <div class="celda" data-x="2" data-y="2"></div>
                            </div>
                            <div class="controles-direcciones">
                                <button class="btn-direccion" onclick="moverPersonaje('arriba')">⬆️ Arriba</button>
                                <button class="btn-direccion" onclick="moverPersonaje('abajo')">⬇️ Abajo</button>
                                <button class="btn-direccion" onclick="moverPersonaje('izquierda')">⬅️ Izquierda</button>
                                <button class="btn-direccion" onclick="moverPersonaje('derecha')">➡️ Derecha</button>
                            </div>
                            <div class="resultado-juego" id="resultado-direcciones"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>🧩 Cuestionario</h2>
                <div class="quiz-container" id="quiz-temporo">
                    <div class="pregunta">
                        <h3>Pregunta 1: ¿Qué es la orientación espacial?</h3>
                        <div class="opciones">
                            <label><input type="radio" name="p1t" value="a"> Saber dónde están las cosas en relación contigo</label>
                            <label><input type="radio" name="p1t" value="b"> Saber qué hora es</label>
                            <label><input type="radio" name="p1t" value="c"> Saber leer</label>
                        </div>
                    </div>
                    <div class="pregunta">
                        <h3>Pregunta 2: ¿Qué es la orientación temporal?</h3>
                        <div class="opciones">
                            <label><input type="radio" name="p2t" value="a"> Saber dónde estás</label>
                            <label><input type="radio" name="p2t" value="b"> Entender el tiempo y cómo pasa</label>
                            <label><input type="radio" name="p2t" value="c"> Saber dibujar</label>
                        </div>
                    </div>
                    <button class="btn-primary" onclick="verificarQuiz('temporo')">Verificar Respuestas</button>
                    <div class="resultado-quiz" id="resultado-quiz-temporo"></div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>

