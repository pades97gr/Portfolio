import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Pantelis Nikolaidis. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;