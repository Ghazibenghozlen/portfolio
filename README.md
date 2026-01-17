# Animated Portfolio

A modern, interactive personal portfolio website featuring smooth animations, 3D elements, and an AI/ML quiz system.

## 🌟 Features

- **Interactive 3D Hero Section**: Spline 3D robot animation with smooth interactions
- **Dynamic Header**: Glassmorphic header with scroll effects
- **ML/DL Quiz System**: Interactive quiz with 100 questions across Machine Learning and Deep Learning topics
  - Topic toggle between ML and DL
  - Randomized questions (10 from 50+ pool)
  - Score tracking and feedback
  - Reset and retry functionality
- **Project Showcase**: Highlighting AI/ML projects
- **Experience Timeline**: Professional experience display
- **Skills Section**: Technical skills categorization
- **Smooth Scrolling**: Lenis smooth scroll integration
- **Custom Cursor**: Interactive cursor effects
- **Tilt Effects**: 3D tilt on cards using Vanilla-Tilt
- **Responsive Design**: Mobile-friendly navigation and layout

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, animations, glassmorphism
- **JavaScript (ES6+)**: Interactive features and quiz logic

### Libraries & Tools
- **Spline**: 3D scene integration
- **Lenis**: Smooth scrolling
- **Vanilla-Tilt.js**: 3D tilt effects
- **Google Fonts**: Inter & Space Grotesk

### Design
- **Color Scheme**: Dark theme with cyan (#64ffda) and purple (#bd34fe) accents
- **Typography**: Space Grotesk (headings), Inter (body)
- **Effects**: Glassmorphism, gradients, smooth transitions

## 📁 Project Structure

```
animated-portfolio/
├── index.html              # Home page with hero section
├── cv-5.pdf               # Resume/CV file
├── README.md              # Project documentation
├── assets/
│   ├── css/
│   │   └── global.css     # Global styles and utilities
│   ├── js/
│   │   └── global.js      # Global JavaScript (cursor, animations)
│   ├── images/
│   │   └── favicon.svg    # Custom favicon
│   └── hero-bg.png       # Hero background image
├── academic/
│   ├── index.html        # Academic background page
│   ├── script.js         # Page-specific scripts
│   └── style.css         # Page-specific styles
├── skills/
│   ├── index.html        # Skills showcase page
│   ├── script.js         # Page-specific scripts
│   └── style.css         # Page-specific styles
├── experience/
│   ├── index.html        # Work experience page
│   ├── script.js         # Page-specific scripts
│   └── style.css         # Page-specific styles
├── projects/
│   ├── index.html        # Projects portfolio page
│   ├── script.js         # Page-specific scripts
│   └── style.css         # Page-specific styles
├── quiz/
│   ├── index.html        # Interactive ML/DL quiz
│   ├── script.js         # Quiz logic and questions (100+ questions)
│   └── style.css         # Quiz-specific styles
└── contact/
    ├── index.html        # Contact information page
    ├── script.js         # Page-specific scripts
    └── style.css         # Page-specific styles
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local server (optional, for development)

### Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/Ghazibenghozlen/portfolio.git
   cd portfolio
   ```

2. **Open with a local server** (recommended)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using VS Code Live Server
   # Right-click on index.html → Open with Live Server
   ```

3. **Or simply open `index.html` in your browser**
   - Note: Some features may require a local server due to CORS policies

## ⚙️ Configuration

### Customizing Content

1. **Personal Information**
   - Edit `index.html` for hero section content
   - Update name in header: Search for "Ghazi Ben Ghozlen"
   - Modify typing animation text in data-rotate attribute

2. **CV/Resume**
   - Replace `cv-5.pdf` with your own PDF
   - Update the filename in `index.html` if needed

3. **Projects**
   - Edit `projects/index.html` to add/modify projects
   - Update project cards with your own work

4. **Quiz Questions**
   - Add/modify questions in `quiz/script.js`
   - Questions are in `mlQuestions` and `dlQuestions` arrays
   - Each question has: `q` (question), `options` (array), `correct` (index)

### Spline 3D Scene

The hero section uses a Spline 3D scene. To use your own:

1. Create a scene at [spline.design](https://spline.design)
2. Export and get the embed URL
3. Update in `index.html`:
   ```html
   <spline-viewer url="YOUR_SPLINE_URL"></spline-viewer>
   ```

### Color Scheme

Edit CSS variables in `assets/css/global.css`:

```css
:root {
    --bg-color: #050510;
    --primary-color: #64ffda;
    --accent-color: #bd34fe;
    --text-main: #e6f1ff;
    --text-muted: #8892b0;
}
```

## 🎨 Key Features Breakdown

### Quiz System
- **50 ML Questions**: Covering algorithms, metrics, and concepts
- **50 DL Questions**: Covering neural networks, architectures, and techniques
- **Dynamic Title**: Changes based on selected topic
- **Score System**: Real-time grading with visual feedback
- **Randomization**: Different questions each time

### Animations
- **Scroll Reveal**: Elements fade in on scroll
- **Typing Effect**: Rotating text in hero subtitle
- **Card Tilt**: 3D hover effects on project cards
- **Header Transform**: Transparent to glassmorphic on scroll

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal and educational use.

## 🙏 Credits

- **Spline** - 3D scene creation
- **Lenis** - Smooth scrolling library
- **Vanilla-Tilt.js** - Tilt effects
- **Google Fonts** - Typography

## 👤 Author

**Ghazi Ben Ghozlen**
- Engineering Student & AI Researcher
- Focus: Computer Vision, Deep Learning, Web Development

---

Made with ❤️ and modern web technologies
