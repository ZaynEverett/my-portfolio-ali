QUICK START GUIDE - Ali Ahmed Portfolio

IMPORTANT: Due to system execution policy restrictions, you need to manually install dependencies.

Steps to get the project running:

1. OPEN COMMAND PROMPT (CMD, NOT PowerShell)
   - Press Windows + R
   - Type: cmd
   - Press Enter

2. NAVIGATE TO PROJECT:
   cd d:\Ali Ahmed\Portfolio ali ahmed

3. INSTALL DEPENDENCIES:
   npm install

   This will install all the required packages:
   - React 18
   - Tailwind CSS
   - Framer Motion (for animations)
   - React Icons
   - TypeScript
   - Vite (build tool)

4. START DEVELOPMENT SERVER:
   npm run dev

   The application will open in your browser at http://localhost:3000/

5. BUILD FOR PRODUCTION:
   npm run build

   This creates a production-ready build in the 'dist' folder.

---

PROJECT FEATURES INCLUDED:
✓ Animated hero section with typing effect
✓ Advanced skills section with progress bars and circular indicators
✓ Dynamic project showcase with hover effects
✓ Professional services section with animated cards
✓ Experience timeline with glassmorphism
✓ Education section with certifications tracking
✓ Modern contact form with validation
✓ Floating chatbot interface
✓ Navigation with active section highlighting
✓ Custom animated cursor
✓ Back-to-top button
✓ Animated page loader
✓ Particle background effects
✓ Fully responsive design
✓ Dark mode with neon glow effects

---

CUSTOMIZATION:

1. Update Personal Info:
   - Open: src/components/Hero.tsx
   - Replace name, tagline, and description

2. Update Contact Email & Phone:
   - Open: src/components/Contact.tsx
   - Update email and phone number
   - Add social media links

3. Update Skills:
   - Open:  src/components/Skills.tsx
   - Modify the skillCategories array with your skills

4. Update Projects:
   - Open: src/components/Projects.tsx
   - Update the projects array with your portfolio projects
   - Add real image URLs instead of placeholders
   - Update GitHub and Live Demo links

5. Update Experience:
   - Open: src/components/Experience.tsx
   - Update positions, companies, and descriptions

6. Update Education:
   - Open: src/components/Education.tsx
   - Add your education background and certifications

7. Change Colors:
   - Open: tailwind.config.js
   - Modify the colors section if you want different neon colors

---

FILE STRUCTURE:

Project/
├── src/
│   ├── components/       # All React components
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration

---

TROUBLESHOOTING:

Q: npm command not found?
A: Use Command Prompt (CMD) instead of PowerShell. PowerShell has execution policy restrictions.

Q: Port 3000 already in use?
A: Vite will automatically use a different port (like 3001). Just use that URL.

Q: Getting build errors?
A: Make sure npm install completed successfully and all dependencies are installed.

Q: Need to change port?
A: Edit vite.config.ts and change the server.port value.

---

DEPLOYMENT:

After building with `npm run build`, the contents of the 'dist' folder can be deployed to:
- Vercel (✓ Recommended)
- Netlify  
- GitHub Pages
- Any static host

---

For questions or issues, ensure all dependencies are installed via npm install first!
