import React, { useState, useEffect } from 'react';
import { Menu, X, Github, TowerControl as GameController, Home, Info, Settings } from 'lucide-react';
import GameCard from './components/GameCard';
import Footer from './components/Footer';
import TabContent from './components/TabContent';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('games');
  const [bgColor, setBgColor] = useState('bg-gray-100');
  const [textColor, setTextColor] = useState('text-gray-900');

  // Load saved color preferences from localStorage
  useEffect(() => {
    const savedBgColor = localStorage.getItem('bgColor');
    const savedTextColor = localStorage.getItem('textColor');
    
    if (savedBgColor) setBgColor(savedBgColor);
    if (savedTextColor) setTextColor(savedTextColor);
  }, []);

  // Save color preferences to localStorage
  useEffect(() => {
    localStorage.setItem('bgColor', bgColor);
    localStorage.setItem('textColor', textColor);
  }, [bgColor, textColor]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleColorChange = (type, color) => {
    if (type === 'bg') {
      // Don't allow same colors for background and text
      if (color.replace('bg-', 'text-') === textColor) {
        alert("Background and text colors cannot be the same!");
        return;
      }
      setBgColor(color);
    } else {
      // Don't allow same colors for background and text
      if (color.replace('text-', 'bg-') === bgColor) {
        alert("Background and text colors cannot be the same!");
        return;
      }
      setTextColor(color);
    }
  };

  const games = [
    {
      id: 1,
      title: 'Space Adventure',
      description: 'Explore the vast universe in this exciting space adventure game.',
      imageUrl: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Adventure'
    },
    {
      id: 2,
      title: 'Puzzle Master',
      description: 'Test your brain with challenging puzzles and mind-bending riddles.',
      imageUrl: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Puzzle'
    },
    {
      id: 3,
      title: 'Racing Legends',
      description: 'Race against time and opponents in this high-speed racing game.',
      imageUrl: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Racing'
    },
    {
      id: 4,
      title: 'Fantasy Quest',
      description: 'Embark on an epic journey through magical lands and mythical creatures.',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'RPG'
    },
    {
      id: 5,
      title: 'Zombie Survival',
      description: 'Survive in a post-apocalyptic world filled with zombies and danger.',
      imageUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Survival'
    },
    {
      id: 6,
      title: 'Strategy Empire',
      description: 'Build your empire and conquer the world with strategic planning.',
      imageUrl: 'https://images.unsplash.com/photo-1533662635785-9050eaf9a49d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Strategy'
    }
  ];

  return (
    <div className={`min-h-screen ${bgColor} flex flex-col ${textColor}`}>
      {/* Header */}
      <header className="bg-indigo-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">MP</span>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="flex items-center space-x-1 hover:text-indigo-200 transition">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </a>
            <a 
              href="#" 
              className={`flex items-center space-x-1 hover:text-indigo-200 transition ${activeTab === 'games' ? 'border-b-2 border-white' : ''}`}
              onClick={(e) => {e.preventDefault(); setActiveTab('games');}}
            >
              <GameController className="h-5 w-5" />
              <span>Games</span>
            </a>
            <a 
              href="#" 
              className={`flex items-center space-x-1 hover:text-indigo-200 transition ${activeTab === 'about' ? 'border-b-2 border-white' : ''}`}
              onClick={(e) => {e.preventDefault(); setActiveTab('about');}}
            >
              <Info className="h-5 w-5" />
              <span>About</span>
            </a>
            <a 
              href="#" 
              className={`flex items-center space-x-1 hover:text-indigo-200 transition ${activeTab === 'settings' ? 'border-b-2 border-white' : ''}`}
              onClick={(e) => {e.preventDefault(); setActiveTab('settings');}}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </nav>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800 text-white">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="flex items-center space-x-2 py-2 hover:bg-indigo-700 px-2 rounded">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </a>
              <a 
                href="#" 
                className={`flex items-center space-x-2 py-2 hover:bg-indigo-700 px-2 rounded ${activeTab === 'games' ? 'bg-indigo-700' : ''}`}
                onClick={(e) => {e.preventDefault(); setActiveTab('games'); setIsMenuOpen(false);}}
              >
                <GameController className="h-5 w-5" />
                <span>Games</span>
              </a>
              <a 
                href="#" 
                className={`flex items-center space-x-2 py-2 hover:bg-indigo-700 px-2 rounded ${activeTab === 'about' ? 'bg-indigo-700' : ''}`}
                onClick={(e) => {e.preventDefault(); setActiveTab('about'); setIsMenuOpen(false);}}
              >
                <Info className="h-5 w-5" />
                <span>About</span>
              </a>
              <a 
                href="#" 
                className={`flex items-center space-x-2 py-2 hover:bg-indigo-700 px-2 rounded ${activeTab === 'settings' ? 'bg-indigo-700' : ''}`}
                onClick={(e) => {e.preventDefault(); setActiveTab('settings'); setIsMenuOpen(false);}}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </a>
            </nav>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to MP</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Your one-stop destination for the best online games. Play, compete, and have fun!</p>
          <button className="bg-white text-indigo-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-100 transition">
            Play Now
          </button>
        </div>
      </section>
      
      {/* Tab Content */}
      <TabContent 
        activeTab={activeTab} 
        games={games} 
        bgColor={bgColor}
        textColor={textColor}
        onColorChange={handleColorChange}
      />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;