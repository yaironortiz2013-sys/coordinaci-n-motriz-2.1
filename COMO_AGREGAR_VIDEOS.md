# 📹 Cómo Agregar Videos Educativos en Español

## ⚠️ IMPORTANTE: Los videos actuales son PLACEHOLDERS

Los videos en el sitio tienen IDs de ejemplo (VIDEO_ID_1, VIDEO_ID_2, etc.). **DEBES reemplazarlos** con videos educativos reales en español.

## 📋 Pasos para Agregar Videos Reales

### Paso 1: Buscar Videos Educativos en Español en YouTube

Busca videos educativos en español usando estos términos:

**Para Coordinación Motriz:**
- "coordinación motriz niños español"
- "motricidad gruesa niños español"
- "ejercicios coordinación motriz niños"

**Para Coordinación Viso-manual:**
- "coordinación viso-manual niños español"
- "motricidad fina niños español"
- "coordinación ojo-mano niños"

**Para Orientación Temporo-espacial:**
- "orientación espacial niños español"
- "conceptos temporales niños español"
- "derecha izquierda niños español"

### Paso 2: Obtener el ID del Video

1. Abre el video en YouTube
2. Mira la URL del video. Ejemplo: `https://www.youtube.com/watch?v=ABC123xyz`
3. El **ID del video** es la parte después de `v=`
   - En el ejemplo: `ABC123xyz`

### Paso 3: Reemplazar en el Código HTML

Abre el archivo HTML correspondiente y busca:

```html
src="https://www.youtube.com/embed/VIDEO_ID_1"
```

Reemplaza `VIDEO_ID_1` con el ID real del video.

**Ejemplo:**
- Video encontrado: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID del video: `dQw4w9WgXcQ`
- Código a usar: `src="https://www.youtube.com/embed/dQw4w9WgXcQ"`

### Paso 4: Verificar que Funcione

1. Guarda el archivo HTML
2. Abre la página en tu navegador
3. Los videos deben aparecer en cajas negras
4. Al hacer clic, deben reproducirse **directamente en la página** (sin salir del sitio)

## 🎯 Canales Educativos Recomendados en Español

- **Happy Learning Español**: Videos educativos para niños
- **Smile and Learn - Español**: Contenido educativo interactivo
- **El Reino Infantil**: Canciones y videos educativos
- **Aula365**: Videos educativos escolares
- **Blippi Español**: Videos educativos para niños pequeños

## ✅ Verificación

Después de agregar los videos, verifica:

- ✅ Los videos se ven en la página (cajas negras con el reproductor)
- ✅ Al hacer clic, se reproducen directamente en la página
- ✅ Los videos están en español
- ✅ El contenido es educativo y apropiado para niños
- ✅ Los videos funcionan en diferentes navegadores

## 🔧 Solución de Problemas

**Si los videos no se ven:**
1. Verifica que el ID del video sea correcto
2. Asegúrate de que el video permita ser embebido (algunos videos tienen restricciones)
3. Verifica que tengas conexión a internet
4. Prueba en otro navegador

**Si los videos no se reproducen:**
1. Verifica que el video no tenga restricciones de edad
2. Asegúrate de que el video esté disponible en tu región
3. Verifica que el código del iframe esté completo

## 📝 Archivos a Editar

- `coordinacion-motriz.html` - Reemplaza VIDEO_ID_1, VIDEO_ID_2, VIDEO_ID_3
- `coordinacion-viso.html` - Reemplaza VIDEO_ID_1, VIDEO_ID_2, VIDEO_ID_3
- `orientacion-temporo-espacial.html` - Reemplaza VIDEO_ID_1, VIDEO_ID_2, VIDEO_ID_3

¡Una vez que reemplaces los IDs, los videos se reproducirán directamente en la página!

