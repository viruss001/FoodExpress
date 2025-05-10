import React, { useState } from 'react';

const Count = ({counter,setCounter}) => {
    
    
    const increment = () => {
        setCounter(prev => prev + 1);
    };
    
    const decrement = () => {
        setCounter(prev => (prev > 1 ? prev - 1 : 1));
    };
    
    return (
        <div className="w-full flex ">
            <label htmlFor="quantity-input" className="block mb-2 mt-2 mr-5 text-lg  font-medium text-gray-700">
                Choose quantity:
            </label>
            <div className="flex items-center border rounded-lg">
                      <button 
                        onClick={() => decrement()}
                        className="px-3 py-1 text-lg"
                      >
                        -
                      </button>
                      <span className="px-3">{counter}</span>
                      <button 
                        onClick={() => increment()}
                        className="px-3 py-1 text-lg"
                      >
                        +
                      </button>
                    </div>

        </div>
    );
};

export default Count;