# Instrucciones para Agregar Videos Educativos en Español

## Cómo Reemplazar los Videos

Los videos actuales son ejemplos. Para agregar videos educativos reales en español:

### Paso 1: Buscar Videos en YouTube

Busca videos educativos en español sobre:
- **Coordinación Motriz**: Busca "coordinación motriz niños", "motricidad gruesa niños", "ejercicios coordinación motriz"
- **Coordinación Viso-manual**: Busca "coordinación viso-manual niños", "motricidad fina niños", "coordinación ojo-mano"
- **Orientación Temporo-espacial**: Busca "orientación espacial niños", "conceptos temporales niños", "derecha izquierda niños"

### Paso 2: Obtener el ID del Video

1. Abre el video en YouTube
2. Copia la URL del video (ejemplo: `https://www.youtube.com/watch?v=ABC123xyz`)
3. El ID del video es la parte después de `v=` (en este caso: `ABC123xyz`)

### Paso 3: Reemplazar en el Código

En cada archivo HTML (coordinacion-motriz.html, coordinacion-viso.html, orientacion-temporo-espacial.html), busca:

```html
<iframe 
    src="https://www.youtube.com/embed/ID_DEL_VIDEO" 
    ...
</iframe>
```

Reemplaza `ID_DEL_VIDEO` con el ID real del video.

### Ejemplo:

Si el video es: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`

El código sería:
```html
<iframe 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    ...
</iframe>
```

## Canales Educativos Recomendados en Español

- **Happy Learning Español**: Videos educativos para niños
- **Smile and Learn - Español**: Contenido educativo interactivo
- **El Reino Infantil**: Canciones y videos educativos
- **Aula365**: Videos educativos escolares

## Verificar que los Videos Funcionen

1. Abre la página en tu navegador
2. Los videos deben aparecer en cajas negras
3. Al hacer clic, deben reproducirse directamente en la página
4. Si no se ven, verifica que el ID del video sea correcto

