import React from 'react';

const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button"
  >
    {text}
  </button>
);

export default Button;
