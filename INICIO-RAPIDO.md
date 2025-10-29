# 🚀 Inicio Rápido - Portafolio IA

## Paso 1: Edita tu Información Personal

Abre el archivo `src/lib/config.ts` y reemplaza con tu información:

```typescript
name: "Catalina Olivares Maturana",  // ← Tu nombre aquí
title: "Ingeniera de IA",
email: "tu@email.com",  // ← Tu email
linkedin: "https://www.linkedin.com/in/catalina-olivares-maturana/",
github: "https://github.com/tu-usuario",  // ← Tu GitHub
```

## Paso 2: Agrega tus Proyectos

En el mismo archivo, edita la sección de proyectos:

```typescript
projects: [
  {
    id: 1,
    title: "Nombre de tu Proyecto Real",
    description: "Descripción detallada...",
    image: "/projects/proyecto1.jpg",  // ← Agrega la imagen
    technologies: ["Python", "TensorFlow", "etc"],
    github: "https://github.com/tu-usuario/tu-proyecto",
    demo: "URL de la demo si tienes",
  },
  // Agrega más proyectos...
]
```

## Paso 3: Agrega las Imágenes

1. Coloca tus imágenes en: `public/projects/`
2. Nómbralas: `proyecto1.jpg`, `proyecto2.jpg`, etc.

## Paso 4: Actualiza tus Habilidades

```typescript
skills: {
  languages: ["Python", "JavaScript", "tus lenguajes"],
  frameworks: ["TensorFlow", "PyTorch", "tus frameworks"],
  tools: ["Docker", "AWS", "tus herramientas"],
  specialties: ["Machine Learning", "NLP", "tus especialidades"],
}
```

## Paso 5: Ejecuta el Proyecto

```bash
cd portfolio-ia
npm install  # Solo la primera vez
npm run dev
```

Visita: http://localhost:3000

## 🎨 Personalización Opcional

### Cambiar Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: "#00d9ff",    // Azul cian (por defecto)
  secondary: "#ff00ff",  // Magenta (por defecto)
}
```

Puedes cambiar a:
- Verde: `#00ff88`
- Morado: `#9d4edd`
- Naranja: `#ff6b35`

## 📦 Desplegar a Producción

### Opción 1: Vercel (Gratis y Fácil)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. ¡Despliega! (automático)

### Opción 2: Build Manual

```bash
npm run build
npm start
```

## ✅ Checklist

- [ ] Edité mi información en `config.ts`
- [ ] Agregué mis proyectos reales
- [ ] Subí las imágenes de proyectos
- [ ] Actualicé mis habilidades
- [ ] El sitio corre en `npm run dev`
- [ ] Personalicé los colores (opcional)
- [ ] Listo para desplegar

---

**¿Preguntas?** Lee el `README.md` completo para más detalles.
