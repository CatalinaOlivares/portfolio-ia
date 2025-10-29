# 🤖 Portafolio de Inteligencia Artificial

Un portafolio profesional y espectacular con diseño "Estética Neural", construido con Next.js, TypeScript, Tailwind CSS y Framer Motion.

## ✨ Características

- 🎨 **Diseño Minimalista y Moderno**: Inspirado en Neuweb Studio
- 🌙 **Tema Oscuro Profesional**: Optimizado para el campo de IA
- ⚡ **Animaciones Fluidas**: Usando Framer Motion
- 🔮 **Fondo Neural Interactivo**: Partículas y líneas animadas
- 📱 **Totalmente Responsive**: Se adapta a cualquier dispositivo
- 🚀 **Optimizado para SEO**: Built con Next.js 15
- ⚙️ **Fácil de Personalizar**: Un solo archivo de configuración

## 📁 Estructura del Proyecto

```
portfolio-ia/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Página principal
│   │   ├── layout.tsx        # Layout global
│   │   └── globals.css       # Estilos globales
│   ├── components/
│   │   ├── Hero.tsx          # Sección de inicio
│   │   ├── Projects.tsx      # Galería de proyectos
│   │   ├── About.tsx         # Sobre mí
│   │   ├── Skills.tsx        # Habilidades técnicas
│   │   ├── Contact.tsx       # Formulario de contacto
│   │   ├── Navbar.tsx        # Navegación
│   │   └── NeuralBackground.tsx  # Fondo animado
│   └── lib/
│       └── config.ts         # 🎯 TU CONFIGURACIÓN AQUÍ
├── public/
│   └── projects/             # Coloca aquí las imágenes de tus proyectos
└── README.md
```

## 🚀 Inicio Rápido

### 1. Instalar Dependencias

```bash
cd portfolio-ia
npm install
```

### 2. Personalizar tu Información

Edita el archivo `src/lib/config.ts` con tu información:

```typescript
export const personalData = {
  name: "Tu Nombre Completo",
  title: "Ingeniera de IA",
  email: "tu.email@example.com",
  linkedin: "https://www.linkedin.com/in/tu-usuario/",
  github: "https://github.com/tu-usuario",
  // ... etc
};
```

### 3. Agregar Imágenes de Proyectos

1. Coloca tus imágenes en la carpeta `public/projects/`
2. Nombra tus archivos como: `project1.jpg`, `project2.jpg`, etc.
3. Formatos aceptados: `.jpg`, `.png`, `.webp`, `.gif`

### 4. Ejecutar el Proyecto

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: "#00d9ff",    // Color principal (azul cian)
  secondary: "#ff00ff",  // Color secundario (magenta)
}
```

### Agregar Más Proyectos

En `src/lib/config.ts`, agrega más objetos al array `projects`:

```typescript
projects: [
  {
    id: 1,
    title: "Mi Nuevo Proyecto",
    description: "Descripción del proyecto...",
    image: "/projects/nuevo-proyecto.jpg",
    technologies: ["Python", "TensorFlow"],
    github: "https://github.com/...",
    demo: "https://...",
  },
  // ... más proyectos
]
```

### Modificar Habilidades

En `src/lib/config.ts`, edita el objeto `skills`:

```typescript
skills: {
  languages: ["Python", "JavaScript", "..."],
  frameworks: ["TensorFlow", "PyTorch", "..."],
  tools: ["Docker", "AWS", "..."],
  specialties: ["Machine Learning", "NLP", "..."],
}
```

## 📦 Construcción para Producción

```bash
npm run build
npm start
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Visita [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Vercel detectará Next.js automáticamente
5. ¡Despliega!

### Netlify

```bash
npm run build
```

Luego sube la carpeta `.next` a Netlify.

## 🛠️ Tecnologías Utilizadas

- **Next.js 16** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utility-first
- **Framer Motion 12** - Animaciones fluidas
- **React 19** - Biblioteca de UI

## 📝 Lista de Tareas Post-Instalación

- [ ] Editar `src/lib/config.ts` con tu información personal
- [ ] Agregar tus imágenes de proyectos en `public/projects/`
- [ ] Actualizar la información de tus proyectos
- [ ] Añadir tus habilidades técnicas
- [ ] Configurar el formulario de contacto (backend)
- [ ] Agregar tu foto de perfil (opcional)
- [ ] Configurar Google Analytics (opcional)
- [ ] Agregar meta tags personalizados en `layout.tsx`

## 💡 Consejos

1. **Imágenes**: Usa imágenes optimizadas (WebP) para mejor rendimiento
2. **SEO**: Actualiza los meta tags en `src/app/layout.tsx`
3. **Formulario**: Conecta el formulario de contacto con EmailJS, Formspree o tu backend
4. **Analytics**: Agrega Google Analytics o Vercel Analytics

## 🐛 Solución de Problemas

### El sitio no carga
```bash
rm -rf node_modules package-lock.json
npm install
```

### Errores de TypeScript
Revisa que todos los tipos estén correctamente definidos en `config.ts`

### Las animaciones no funcionan
Asegúrate de que Framer Motion esté instalado:
```bash
npm install framer-motion
```

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo para tu portafolio personal.

---

**¿Necesitas ayuda?** Abre un issue en el repositorio o contacta al creador.

Hecho con ❤️ usando la Estética Neural
