# Sitio Web Educativo Interactivo para Niños

## 📍 Ubicación del Proyecto

Este proyecto está guardado en:
```
C:\Users\admin\Downloads\sitio-web-educativo
```

**Nota:** Este es un proyecto independiente y no está relacionado con otros proyectos en tu PC.

## 📚 Descripción

Sitio web educativo interactivo diseñado para niños, enfocado en tres temas principales:
- **Coordinación Motriz**
- **Coordinación Viso-pédica y Viso-manual**
- **Orientación Temporo-espacial**

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura del sitio
- **CSS3**: Diseño responsivo y colorido
- **JavaScript**: Interactividad y juegos
- **PHP**: Estructura modular (sin base de datos)

## 📁 Estructura del Proyecto

```
sitio-web-educativo/
├── index.html / index.php          # Página principal
├── coordinacion-motriz.html/php    # Página de coordinación motriz
├── coordinacion-viso.html/php      # Página de coordinación viso-pédica/manual
├── orientacion-temporo-espacial.html/php  # Página de orientación temporo-espacial
├── css/
│   └── styles.css                 # Estilos principales
├── js/
│   └── script.js                  # JavaScript para interactividad
├── includes/
│   ├── header.php                 # Header reutilizable
│   └── footer.php                 # Footer reutilizable
└── README.md                       # Este archivo
```

## 🚀 Instalación y Uso

### Opción 1: Usando archivos HTML (sin servidor PHP)

1. Abre directamente los archivos `.html` en tu navegador
2. Todas las funcionalidades funcionarán excepto las características PHP

### Opción 2: Usando servidor PHP

1. **Instalar un servidor local:**
   - XAMPP (Windows/Mac/Linux)
   - WAMP (Windows)
   - MAMP (Mac)
   - O usar el servidor PHP integrado

2. **Usar servidor PHP integrado:**
   ```bash
   php -S localhost:8000
   ```
   Luego abre: `http://localhost:8000`

3. **Colocar archivos:**
   - Coloca la carpeta `sitio-educativo` en la carpeta `htdocs` (XAMPP/WAMP) o `www` (MAMP)
   - O ejecuta el servidor desde la carpeta del proyecto

4. **Acceder al sitio:**
   - Abre tu navegador y ve a `http://localhost:8000` (o el puerto que uses)

## ✨ Características

### 🎨 Diseño
- Interfaz colorida y amigable para niños
- Diseño responsivo (se adapta a móviles, tablets y escritorio)
- Animaciones suaves y atractivas
- Menú de navegación intuitivo

### 🎮 Interactividad
- **Juegos educativos** en cada sección:
  - Juego de secuencias de movimiento (Coordinación Motriz)
  - Juego de precisión (Coordinación Viso-manual)
  - Juego de direcciones (Orientación Temporo-espacial)
- **Cuestionarios interactivos** para reforzar el aprendizaje
- Navegación fluida entre páginas

### 📹 Contenido
- Videos educativos embebidos (YouTube)
- Imágenes ilustrativas
- Textos explicativos adaptados para niños
- Actividades prácticas

### ♿ Accesibilidad
- Diseño accesible
- Navegación por teclado
- Contraste adecuado de colores
- Estructura semántica HTML

## 📝 Personalización

### Cambiar Videos

Edita los archivos HTML/PHP y reemplaza la URL del iframe de YouTube:

```html
<iframe src="TU_URL_DE_YOUTUBE_AQUI" ...></iframe>
```

### Agregar Imágenes

1. Crea una carpeta `images/` en el proyecto
2. Reemplaza los placeholders de imágenes en el HTML
3. Actualiza las rutas en el código

### Modificar Colores

Edita `css/styles.css` y modifica las variables CSS en `:root`:

```css
:root {
    --color-primary: #FF6B6B;
    --color-secondary: #4ECDC4;
    /* ... más colores ... */
}
```

### Agregar Más Preguntas al Quiz

Edita `js/script.js` y agrega más preguntas en el objeto `respuestasCorrectas`:

```javascript
const respuestasCorrectas = {
    coordinacion: {
        p1: 'b',
        p2: 'b',
        p3: 'a'  // Nueva pregunta
    }
};
```

## 🌐 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Navegadores móviles modernos

## 📱 Responsive Design

El sitio se adapta automáticamente a:
- 📱 Teléfonos móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Escritorio (1024px+)

## 🔧 Solución de Problemas

### Los videos no se muestran
- Verifica que las URLs de YouTube sean correctas
- Asegúrate de tener conexión a internet
- Algunos videos pueden tener restricciones de región

### Los juegos no funcionan
- Verifica que `script.js` esté cargado correctamente
- Abre la consola del navegador (F12) para ver errores
- Asegúrate de que JavaScript esté habilitado

### El menú no se despliega en móvil
- Verifica que `script.js` esté cargado
- Asegúrate de que el botón de menú tenga la clase `menu-toggle`

## 📄 Licencia

Este proyecto es de uso educativo y puede ser modificado según las necesidades.

## 👨‍💻 Desarrollo

Para contribuir o modificar:
1. Mantén el código limpio y comentado
2. Prueba en diferentes navegadores
3. Verifica la accesibilidad
4. Optimiza imágenes y recursos

## 📞 Soporte

Para preguntas o problemas, revisa:
- La consola del navegador (F12) para errores
- Los archivos de configuración
- La documentación de HTML, CSS y JavaScript

---

**¡Disfruta aprendiendo! 🎓✨**

