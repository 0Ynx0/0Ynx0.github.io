# GameHub

A modern, responsive game website built with React and Tailwind CSS. This project features a sandwich menu for mobile devices and is designed to be easily editable through GitHub.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Sandwich menu (hamburger menu) for mobile navigation
- Game cards with images, descriptions, and categories
- GitHub integration for easy editing and contributions
- Modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/gamehub.git
   cd gamehub
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## How to Edit

This project is designed to be easily editable. Here are some common changes you might want to make:

### Adding New Games

Edit the `games` array in `src/App.tsx`:

```jsx
const games = [
  {
    id: 7, // Make sure to use a unique ID
    title: 'Your New Game',
    description: 'Description of your new game',
    imageUrl: 'https://images.unsplash.com/photo-...',
    category: 'Your Category'
  },
  // ... existing games
];
```

### Changing the Color Scheme

The color scheme is based on Tailwind CSS classes. The primary color is currently indigo (`bg-indigo-700`, `text-indigo-600`, etc.). To change it, replace "indigo" with your preferred color (e.g., "blue", "green", "red").

### Modifying the Navigation Menu

Edit the navigation links in the `<header>` section of `src/App.tsx`.

## Project Structure

- `src/App.tsx` - Main application component
- `src/components/` - Reusable components
  - `GameCard.tsx` - Component for displaying game information
  - `Footer.tsx` - Website footer component
- `public/` - Static assets

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/)