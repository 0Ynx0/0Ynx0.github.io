import React from 'react';
import { TowerControl as GameController } from 'lucide-react';

interface Game {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={game.imageUrl} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
          {game.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{game.title}</h3>
        <p className="text-gray-600 mb-4">{game.description}</p>
        <div className="flex justify-between items-center">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition flex items-center space-x-1">
            <GameController className="h-4 w-4" />
            <span>Play Now</span>
          </button>
          <div className="text-gray-500 text-sm">Free</div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;