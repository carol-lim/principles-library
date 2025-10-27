# Principles Library

A modern, interactive React application for organizing and learning about productivity principles, methodologies, and life philosophies. Features flip cards with categorized principles in an elegant autumn-themed design.

![Principles Library](https://img.shields.io/badge/React-18.2.0-blue) ![License](https://img.shields.io/badge/License-MIT-green) ![Responsive](https://img.shields.io/badge/Design-Responsive-orange)

## Features

- **Interactive Flip Cards**: Click to flip between principle names and definitions
- **Category Organization**: 5 color-coded categories for easy navigation
- **CRUD Operations**: Add, edit, and delete principles
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Autumn Color Theme**: Beautiful brownish-orangeish-muted greenish palette
- **Local Storage**: Data persists between sessions
- **Test-Driven Development**: Includes comprehensive test suite

## Live Demo

[View Live Site](https://carol-lim.github.io/principles-library)

## 📸 Screenshots

![App Screenshot](/public/screenshot.png)

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**

```bash
git clone https://github.com/carol-lim/principles-library.git
cd principles-library
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm start
```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Running Tests

```bash
# Run test suite
npm test

# Run with coverage
npm test -- --coverage

# Run in watch mode
npm test -- --watch
```

## Project Structure

```
principles-library/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PrincipleCard.js      # Flip card component
│   │   ├── AddCardModal.js       # Add/edit modal
│   │   └── FloatingActionButton.js
│   ├── data/
│   │   └── principles.js         # All principles data
│   ├── styles/
│   │   └── App.css              # Styling with autumn theme
│   ├── tests/
│   │   └── PrincipleCard.test.js # Component tests
│   ├── App.js                   # Main application
│   └── index.js                 # Entry point
├── package.json
└── README.md
```

## Categories

The principles are organized into 5 color-coded categories:

| Category                        | Color        | Description                              |
| ------------------------------- | ------------ | ---------------------------------------- |
| **Problem Solving & Deep Work** | Muted Brown  | Thinking frameworks and focus techniques |
| **Productivity & Execution**    | Orange       | Getting things done efficiently          |
| **Learning & Adaptability**     | Muted Green  | Knowledge acquisition and growth         |
| **Emotional Mastery & Mindset** | Brownish Red | Mental frameworks and self-awareness     |
| **Strategy & Social Dynamics**  | Golden Brown | Interpersonal and strategic thinking     |

## Usage

### Adding a New Principle

1. Click the floating `+` button in the bottom right
2. Fill in the principle name and definition
3. Select the appropriate category
4. Click "Save" to add to your library

### Viewing Principles

- **Click any card** to flip and see the definition
- **Click again** to flip back to the principle name
- **Use the three-dots menu** on each card to edit or delete

### Managing Principles

- **Edit**: Update existing principles through the card menu
- **Delete**: Remove principles you no longer need
- **Organize**: Principles are automatically sorted by category

## Deployment

### Deploy to GitHub Pages

1. **Install gh-pages**

```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**

```json
"homepage": "https://yourusername.github.io/principles-library",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. **Deploy**

```bash
npm run deploy
```

### Deploy to Other Platforms

**Netlify:**

```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

**Vercel:**

```bash
npm install -g vercel
vercel
```

## 🐛 Troubleshooting

### Common Issues & Solutions

| Problem                  | Solution                                               |
| ------------------------ | ------------------------------------------------------ |
| **Build fails**          | Check console for errors, verify all imports           |
| **Cards not flipping**   | Check CSS perspective and transform properties         |
| **Mobile layout issues** | Test with different screen sizes, adjust media queries |
| **Data not persisting**  | Implement localStorage in App.js                       |
| **Tests failing**        | Update test cases to match current component structure |

### Adding Local Storage Persistence

Add this to `App.js` to save principles to localStorage:

```javascript
// Load from localStorage on component mount
React.useEffect(() => {
  const savedPrinciples = localStorage.getItem("principles");
  if (savedPrinciples) {
    setPrinciples(JSON.parse(savedPrinciples));
  }
}, []);

// Save to localStorage when principles change
React.useEffect(() => {
  localStorage.setItem("principles", JSON.stringify(principles));
}, [principles]);
```

## 🧪 Testing

The project includes Jest and React Testing Library for comprehensive testing:

```bash
# Run specific test file
npm test PrincipleCard.test.js

# Run with verbose output
npm test -- --verbose

# Update snapshots
npm test -- -u
```

## Core Principles Included

The app comes pre-loaded with 40 powerful principles including:

- **First-Principles Thinking** - Break down complex problems
- **Pareto Principle (80/20 Rule)** - Focus on what matters
- **Stoicism & Memento Mori** - Remember what's important
- **Game Theory** - Find win-win solutions
- **Atomic Habits** - Small changes, big results

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various productivity methodologies and personal development frameworks
- Built with React.js and modern CSS
- Autumn color palette inspired by nature's elegance

---

**Built with ❤️ using React.js**
