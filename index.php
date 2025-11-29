<?php
$pageTitle = '¡Aprende Jugando! - Sitio Educativo';
include 'includes/header.php';
?>

<main>
    <section class="hero">
        <div class="container">
            <h2>¡Bienvenido al Mundo del Aprendizaje!</h2>
            <p>Descubre y aprende sobre diferentes habilidades mientras te diviertes</p>
        </div>
    </section>

    <section class="temas-grid">
        <div class="container">
            <h2 class="section-title">Elige un Tema para Empezar</h2>
            <div class="cards-container">
                <div class="card tema-card" onclick="window.location.href='coordinacion-motriz.php'">
                    <div class="card-icon">🏃</div>
                    <h3>Coordinación Motriz</h3>
                    <p>Aprende sobre el movimiento y la coordinación de tu cuerpo</p>
                    <button class="btn-primary">Explorar</button>
                </div>

                <div class="card tema-card" onclick="window.location.href='coordinacion-viso.php'">
                    <div class="card-icon">👀✋</div>
                    <h3>Coordinación Viso-pédica y Viso-manual</h3>
                    <p>Descubre cómo tus ojos trabajan con tus manos y pies</p>
                    <button class="btn-primary">Explorar</button>
                </div>

                <div class="card tema-card" onclick="window.location.href='orientacion-temporo-espacial.php'">
                    <div class="card-icon">🧭</div>
                    <h3>Orientación Temporo-espacial</h3>
                    <p>Aprende sobre el tiempo y el espacio que te rodea</p>
                    <button class="btn-primary">Explorar</button>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>

