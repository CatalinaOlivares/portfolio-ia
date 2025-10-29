# 🤖 AI Portfolio

A professional and spectacular portfolio with "Neural Aesthetics" design, built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## ✨ Features

- 🎨 **Minimalist & Modern Design**: Inspired by Neuweb Studio
- 🌙 **Professional Dark Theme**: Optimized for the AI field
- ⚡ **Smooth Animations**: Using Framer Motion
- 🔮 **Interactive Neural Background**: Animated particles and lines
- 📱 **Fully Responsive**: Adapts to any device
- 🚀 **SEO Optimized**: Built with Next.js 16
- ⚙️ **Easy to Customize**: Single configuration file

## 📁 Project Structure

```
portfolio-ia/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   ├── layout.tsx        # Global layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Projects.tsx      # Project gallery
│   │   ├── About.tsx         # About me
│   │   ├── Skills.tsx        # Technical skills
│   │   ├── Contact.tsx       # Contact form
│   │   ├── Navbar.tsx        # Navigation
│   │   └── NeuralBackground.tsx  # Animated background
│   └── lib/
│       └── config.ts         # 🎯 YOUR CONFIGURATION HERE
├── public/
│   └── projects/             # Place your project images here
└── README.md
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd portfolio-ia
npm install
```

### 2. Customize Your Information

Edit the `src/lib/config.ts` file with your information:

```typescript
export const personalData = {
  name: "Your Full Name",
  title: "AI Engineer",
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-username/",
  github: "https://github.com/your-username",
  // ... etc
};
```

### 3. Add Project Images

1. Place your images in the `public/projects/` folder
2. Name your files like: `project1.jpg`, `project2.jpg`, etc.
3. Accepted formats: `.jpg`, `.png`, `.webp`, `.gif`

### 4. Run the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "#00d9ff",    // Cyan blue (default)
  secondary: "#ff00ff",  // Magenta (default)
}
```

You can change to:
- Green: `#00ff88`
- Purple: `#9d4edd`
- Orange: `#ff6b35`

### Customize Sections

All sections are in `src/components/`:
- `Hero.tsx` - Main title and description
- `About.tsx` - Your biography
- `Skills.tsx` - Technical skills
- `Projects.tsx` - Your projects
- `Contact.tsx` - Contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Scripts

```bash
npm run dev      # Run development server
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Run linter
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! (automatic)

### Manual Build

```bash
npm run build
npm start
```

## 📝 Configuration File (`config.ts`)

```typescript
export const personalData = {
  // Personal Information
  name: "Your Name",
  title: "Your Title",
  tagline: "Your Tagline",
  bio: "Your Bio",

  // Contact
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/your-username",
  github: "https://github.com/your-username",

  // Projects
  projects: [
    {
      id: 1,
      title: "Project Name",
      description: "Project Description",
      image: "/projects/project1.jpg",
      technologies: ["Tech1", "Tech2", "Tech3"],
      github: "https://github.com/your-username/project",
      demo: "https://your-demo.com",
    },
    // Add more projects...
  ],

  // Skills
  skills: {
    languages: ["Python", "JavaScript", "etc"],
    frameworks: ["TensorFlow", "React", "etc"],
    tools: ["Docker", "AWS", "etc"],
    specialties: ["ML", "Deep Learning", "etc"],
  },

  // Experience
  experience: [
    {
      id: 1,
      role: "Your Role",
      company: "Company Name",
      period: "2023 - Present",
      description: "Description of your responsibilities and achievements.",
    },
    // Add more experience...
  ],

  // Education
  education: {
    degree: "Your Degree",
    institution: "Your University",
    period: "2020 - 2024",
    specialization: "Your Specialization",
  },
};
```

## 📸 Screenshots

### Hero Section
The main landing section with animated neural network background.

### Projects Section
Gallery showcasing your best AI/ML projects.

### Skills Section
Display your technical skills organized by categories.

### Contact Section
Easy way for recruiters and collaborators to reach you.

## 🎯 Best Practices

1. **Images**: Optimize your images before uploading (use WebP format)
2. **Projects**: Add 3-6 of your best projects
3. **Bio**: Keep it concise (2-3 sentences)
4. **Skills**: Only list skills you're confident in
5. **GitHub**: Make sure all GitHub links are public

## 🐛 Troubleshooting

### Images not showing
- Check that images are in `public/projects/`
- Verify the image path in `config.ts` starts with `/`
- Ensure images have the correct extension

### Animations not working
- Clear your browser cache
- Run `npm install` again
- Make sure Framer Motion is properly installed

### Build errors
- Check that all required fields in `config.ts` are filled
- Ensure TypeScript types are correct
- Run `npm run lint` to check for errors

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

## 👤 Author

**Catalina Olivares Maturana**
- LinkedIn: [@catalina-olivares-maturana](https://www.linkedin.com/in/catalina-olivares-maturana/)
- GitHub: [@CatalinaOlivares](https://github.com/CatalinaOlivares)

---

🤖 **Built with Claude Code** - AI-powered development assistant
