<?php
$pageTitle = 'Coordinación Viso-pédica y Viso-manual - ¡Aprende Jugando!';
include 'includes/header.php';
?>

<main>
    <section class="tema-header">
        <div class="container">
            <h1>👀✋ Coordinación Viso-pédica y Viso-manual</h1>
            <p class="intro-text">Esta coordinación es la capacidad de usar tus ojos junto con tus manos o pies para realizar actividades precisas.</p>
        </div>
    </section>

    <section class="contenido-tema">
        <div class="container">
            <div class="contenido-grid">
                <div class="info-box">
                    <h2>¿Qué es la Coordinación Viso-manual?</h2>
                    <p>La coordinación viso-manual es cuando tus ojos y tus manos trabajan juntos. Por ejemplo, cuando escribes, dibujas, o atrapas una pelota, estás usando esta coordinación.</p>
                    <div class="imagen-ilustrativa">
                        <div class="placeholder-imagen">✍️</div>
                        <p class="imagen-descripcion">Niño dibujando con coordinación viso-manual</p>
                    </div>
                </div>

                <div class="info-box">
                    <h2>¿Qué es la Coordinación Viso-pédica?</h2>
                    <p>La coordinación viso-pédica es cuando tus ojos y tus pies trabajan juntos. Esto es muy importante cuando juegas fútbol, saltas la cuerda o subes escaleras.</p>
                    <div class="imagen-ilustrativa">
                        <div class="placeholder-imagen">⚽</div>
                        <p class="imagen-descripcion">Niño pateando un balón con coordinación viso-pédica</p>
                    </div>
                </div>
            </div>

            <div class="video-container">
                <h2>Video Educativo</h2>
                <div class="video-wrapper">
                    <iframe 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="Video sobre Coordinación Viso-pédica y Viso-manual"
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
                    <h3>Juego de Precisión</h3>
                    <p>¡Practica tu coordinación viso-manual haciendo clic en los objetivos!</p>
                    <div id="juego-precision" class="juego-container">
                        <div class="juego-precision-area">
                            <p>Haz clic en los círculos que aparezcan lo más rápido posible:</p>
                            <div class="area-juego" id="area-precision">
                                <button class="objetivo" onclick="objetivoClickado(this)">🎯</button>
                            </div>
                            <div class="puntuacion">
                                <p>Puntos: <span id="puntos-precision">0</span></p>
                                <p>Tiempo: <span id="tiempo-precision">30</span>s</p>
                            </div>
                            <button class="btn-primary" onclick="iniciarJuegoPrecision()">Iniciar Juego</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>🧩 Cuestionario</h2>
                <div class="quiz-container" id="quiz-viso">
                    <div class="pregunta">
                        <h3>Pregunta 1: ¿Qué es la coordinación viso-manual?</h3>
                        <div class="opciones">
                            <label><input type="radio" name="p1v" value="a"> Cuando tus ojos y manos trabajan juntos</label>
                            <label><input type="radio" name="p1v" value="b"> Cuando solo usas tus manos</label>
                            <label><input type="radio" name="p1v" value="c"> Cuando solo usas tus ojos</label>
                        </div>
                    </div>
                    <div class="pregunta">
                        <h3>Pregunta 2: ¿Cuál es un ejemplo de coordinación viso-pédica?</h3>
                        <div class="opciones">
                            <label><input type="radio" name="p2v" value="a"> Escribir</label>
                            <label><input type="radio" name="p2v" value="b"> Patear un balón</label>
                            <label><input type="radio" name="p2v" value="c"> Leer</label>
                        </div>
                    </div>
                    <button class="btn-primary" onclick="verificarQuiz('viso')">Verificar Respuestas</button>
                    <div class="resultado-quiz" id="resultado-quiz-viso"></div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>

