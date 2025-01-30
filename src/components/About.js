import React from 'react';

const About = ({ about }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-gray-600 text-lg max-w-2xl">{about}</p>
      </div>
    </section>
  );
};

export default About;