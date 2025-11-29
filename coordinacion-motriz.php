<?php
$pageTitle = 'Coordinación Motriz - ¡Aprende Jugando!';
include 'includes/header.php';
?>

<main>
    <section class="tema-header">
        <div class="container">
            <h1>🏃 Coordinación Motriz</h1>
            <p class="intro-text">La coordinación motriz es la capacidad de mover diferentes partes de tu cuerpo de manera coordinada y armoniosa.</p>
        </div>
    </section>

    <section class="contenido-tema">
        <div class="container">
            <div class="contenido-grid">
                <div class="info-box">
                    <h2>¿Qué es la Coordinación Motriz?</h2>
                    <p>La coordinación motriz es la habilidad que nos permite realizar movimientos precisos y controlados. Es como cuando bailas, corres o juegas fútbol: todas las partes de tu cuerpo trabajan juntas para hacer el movimiento correcto.</p>
                    <div class="imagen-ilustrativa">
                        <div class="placeholder-imagen">🏃‍♂️</div>
                        <p class="imagen-descripcion">Niños practicando coordinación motriz</p>
                    </div>
                </div>

                <div class="video-container">
                    <h2>Video Educativo</h2>
                    <div class="video-wrapper">
                        <iframe 
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="Video sobre Coordinación Motriz"
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <p class="video-nota">Nota: Este es un video de ejemplo. Reemplázalo con un video educativo apropiado sobre coordinación motriz.</p>
                </div>
            </div>

            <div class="actividades-section">
                <h2>🎮 Actividades Interactivas</h2>
                <div class="actividad-box">
                    <h3>Juego de Secuencias de Movimiento</h3>
                    <p>¡Practica tu coordinación siguiendo las secuencias!</p>
                    <div id="juego-coordinacion" class="juego-container">
                        <div class="secuencia-display">
                            <p>Haz clic en los botones en el orden correcto:</p>
                            <div class="botones-secuencia">
                                <button class="btn-movimiento" data-movimiento="saltar">Saltar</button>
                                <button class="btn-movimiento" data-movimiento="girar">Girar</button>
                                <button class="btn-movimiento" data-movimiento="aplaudir">Aplaudir</button>
                                <button class="btn-movimiento" data-movimiento="agacharse">Agacharse</button>
                            </div>
                            <button class="btn-primary" onclick="iniciarJuegoCoordinacion()">Iniciar Secuencia</button>
                            <div class="resultado-juego" id="resultado-coordinacion"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>🧩 Cuestionario</h2>
                <div class="quiz-container" id="quiz-coordinacion">
                    <div class="pregunta">
                        <h3>Pregunta 1: ¿Qué es la coordinación motriz?</h3>
                        <div class="opciones">
                            <label><input type="radio" name="p1" value="a"> La capacidad de leer rápido</label>
                            <label><input type="radio" name="p1" value="b"> La habilidad de mover el cuerpo de manera coordinada</label>
                            <label><input type="radio" name="p1" value="c"> La capacidad de recordar cosas</label>
                        </div>
                    </div>
                    <div class="pregunta">
                        <h3>Pregunta 2: ¿Cuál es un ejemplo de coordinación motriz?</h3>
                        <div class="opciones">
                            <label><input type="radio" name="p2" value="a"> Leer un libro</label>
                            <label><input type="radio" name="p2" value="b"> Bailar</label>
                            <label><input type="radio" name="p2" value="c"> Dormir</label>
                        </div>
                    </div>
                    <button class="btn-primary" onclick="verificarQuiz('coordinacion')">Verificar Respuestas</button>
                    <div class="resultado-quiz" id="resultado-quiz-coordinacion"></div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>

