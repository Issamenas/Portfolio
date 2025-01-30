import React from 'react';
import { Mail } from 'lucide-react';

const Contact = ({ email }) => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Mail size={20} />
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;