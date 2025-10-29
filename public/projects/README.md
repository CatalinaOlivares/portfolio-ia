# 📸 Imágenes de Proyectos

Coloca aquí las imágenes de tus proyectos.

## Formato recomendado:

- **Nombres**: `project1.jpg`, `project2.jpg`, `project3.jpg`, etc.
- **Formatos**: `.jpg`, `.png`, `.webp`, `.gif`
- **Tamaño recomendado**: 1200x800px (ratio 3:2)
- **Peso**: Optimiza tus imágenes para web (max 500KB por imagen)

## Herramientas de optimización:

- [TinyPNG](https://tinypng.com/) - Compresión PNG/JPG
- [Squoosh](https://squoosh.app/) - Optimización avanzada
- [WebP Converter](https://developers.google.com/speed/webp) - Convertir a WebP

## Ejemplo:

```
public/
  projects/
    project1.jpg  ← Tu primera imagen
    project2.jpg  ← Tu segunda imagen
    project3.jpg  ← Tu tercera imagen
```

Luego, en `src/lib/config.ts`, referencia las imágenes así:

```typescript
projects: [
  {
    id: 1,
    image: "/projects/project1.jpg",
    // ...
  }
]
```
