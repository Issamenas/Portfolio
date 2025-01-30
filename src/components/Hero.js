import React from 'react';
import { linkedin} from 'lucide-react';
import {Mail} from 'lucide-react';
import {github} from 'lucide-react';

const Hero = ({ name, title, profilePicture, social }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-16">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{name}</h1>
                <h2 className="text-xl md:text-2xl opacity-90 mb-8">{title}</h2>
                <div className="flex gap-4">
                <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/20 rounded-full transition-colors">
                    <github size={24} />
                </a>
                <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/20 rounded-full transition-colors">
                    <linkedin size={24} />
                </a>
                <a
                    href={`mailto:${social.email}`}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors">
                    <Mail size={24} />
                </a>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img src={profilePicture} alt={name} className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;