import React, { useState } from 'react';
import Context from './context';
import response from '../data/tempdata';

const ContextProvider = ({ children }) => {
  // Initialize state with the imported response data
  const [responseData, setResponseData] = useState(response);
  // Store original data separately for reset functionality
  const [originalData] = useState(response);

  // Value object to be provided to consumers
  const value = {
    responseData,
    setResponseData,
    originalData
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;