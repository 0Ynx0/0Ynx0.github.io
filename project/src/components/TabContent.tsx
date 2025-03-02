import React from 'react';
import GameCard from './GameCard';

interface Game {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface TabContentProps {
  activeTab: string;
  games: Game[];
  bgColor: string;
  textColor: string;
  onColorChange: (type: string, color: string) => void;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab, games, bgColor, textColor, onColorChange }) => {
  const colorOptions = [
    { name: 'Gray', bg: 'bg-gray-100', text: 'text-gray-900' },
    { name: 'White', bg: 'bg-white', text: 'text-gray-900' },
    { name: 'Blue', bg: 'bg-blue-50', text: 'text-blue-900' },
    { name: 'Green', bg: 'bg-green-50', text: 'text-green-900' },
    { name: 'Yellow', bg: 'bg-yellow-50', text: 'text-yellow-900' },
    { name: 'Red', bg: 'bg-red-50', text: 'text-red-900' },
    { name: 'Purple', bg: 'bg-purple-50', text: 'text-purple-900' },
    { name: 'Pink', bg: 'bg-pink-50', text: 'text-pink-900' },
    { name: 'Indigo', bg: 'bg-indigo-50', text: 'text-indigo-900' },
  ];

  const textColorOptions = [
    { name: 'Gray', color: 'text-gray-900' },
    { name: 'Blue', color: 'text-blue-900' },
    { name: 'Green', color: 'text-green-900' },
    { name: 'Yellow', color: 'text-yellow-900' },
    { name: 'Red', color: 'text-red-900' },
    { name: 'Purple', color: 'text-purple-900' },
    { name: 'Pink', color: 'text-pink-900' },
    { name: 'Indigo', color: 'text-indigo-900' },
  ];

  if (activeTab === 'games') {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (activeTab === 'about') {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">About MP</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                MP is your ultimate destination for free online games. We offer a wide variety of games across different categories to ensure there's something for everyone.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Our Mission</h3>
              <p className="mb-4">
                Our mission is to provide high-quality, entertaining games that are accessible to everyone. We believe gaming should be fun, engaging, and available to all, regardless of device or location.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Game Selection</h3>
              <p className="mb-4">
                We carefully curate our game selection to ensure variety and quality. From action-packed adventures to brain-teasing puzzles, our collection is constantly growing to bring you the best gaming experience.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Community</h3>
              <p className="mb-4">
                MP is more than just a gaming platform; it's a community. We encourage players to share their experiences, compete with friends, and discover new games together.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Accessibility</h3>
              <p className="mb-4">
                All our games are designed to be played directly in your browser, with no downloads required. This makes gaming accessible anytime, anywhere, on any device with an internet connection.
              </p>
              
              <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-indigo-700">Join Us Today!</h3>
                <p className="text-indigo-700">
                  Start playing our collection of free online games and become part of the MP community. New games are added regularly, so there's always something exciting to discover!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (activeTab === 'settings') {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Customize Your Experience</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Background Color</h3>
              <p className="mb-4 text-gray-600">Choose a background color for the website. This will change the main background color of the site.</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {colorOptions.map((option) => (
                  <button
                    key={option.bg}
                    className={`${option.bg} p-4 rounded-md border-2 ${bgColor === option.bg ? 'border-indigo-600' : 'border-gray-200'} hover:border-indigo-400 transition-colors duration-200`}
                    onClick={() => onColorChange('bg', option.bg)}
                    aria-label={`Set background color to ${option.name}`}
                  >
                    <span className="block text-center font-medium">{option.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Text Color</h3>
              <p className="mb-4 text-gray-600">Choose a text color for the website. This will change the main text color of the site.</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {textColorOptions.map((option) => (
                  <button
                    key={option.color}
                    className={`bg-white p-4 rounded-md border-2 ${textColor === option.color ? 'border-indigo-600' : 'border-gray-200'} hover:border-indigo-400 transition-colors duration-200 ${option.color}`}
                    onClick={() => onColorChange('text', option.color)}
                    aria-label={`Set text color to ${option.name}`}
                  >
                    <span className="block text-center font-medium">{option.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">Preview</h3>
              <div className={`p-4 rounded-md ${bgColor} ${textColor}`}>
                <p className="font-medium">This is how your text will look with the selected colors.</p>
                <p>The background and text colors you choose will be saved and applied throughout the site.</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg text-yellow-800">
              <p className="font-medium">Note: Background and text colors cannot be the same to ensure readability.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default fallback
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Select a tab to view content</h2>
      </div>
    </section>
  );
};

export default TabContent;