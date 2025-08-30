import React from 'react';

const PrimarySemiRoundedButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573015655047', '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className='bg-indigo-600 border border-indigo-600 rounded-2xl flex-1 py-4 px-6 text-center text-sm font-semibold text-white hover:bg-indigo-700 transition dark:bg-gradient-to-r dark:from-indigo-500 dark:to-blue-500 dark:border-transparent dark:hover:from-indigo-600 dark:hover:to-blue-600 dark:text-white flex items-center justify-center gap-2'
    >
      <i className="fab fa-whatsapp text-lg"></i>
     Chat
    </button>
  );
};

export default PrimarySemiRoundedButton;