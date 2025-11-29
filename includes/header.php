<?php
// Header reutilizable para todas las páginas
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($pageTitle) ? $pageTitle : '¡Aprende Jugando! - Sitio Educativo'; ?></title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1 class="logo">🎓 ¡Aprende Jugando!</h1>
            <nav class="main-nav">
                <ul class="nav-menu">
                    <li><a href="index.php" class="nav-link <?php echo ($currentPage == 'index.php') ? 'active' : ''; ?>">Inicio</a></li>
                    <li><a href="coordinacion-motriz.php" class="nav-link <?php echo ($currentPage == 'coordinacion-motriz.php') ? 'active' : ''; ?>">Coordinación Motriz</a></li>
                    <li><a href="coordinacion-viso.php" class="nav-link <?php echo ($currentPage == 'coordinacion-viso.php') ? 'active' : ''; ?>">Coordinación Viso-pédica y Viso-manual</a></li>
                    <li><a href="orientacion-temporo-espacial.php" class="nav-link <?php echo ($currentPage == 'orientacion-temporo-espacial.php') ? 'active' : ''; ?>">Orientación Temporo-espacial</a></li>
                </ul>
                <button class="menu-toggle" aria-label="Menú">☰</button>
            </nav>
        </div>
    </header>

