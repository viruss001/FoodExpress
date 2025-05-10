import { createContext } from 'react';

const Context = createContext({
  responseData: [],
  setResponseData: () => {},
  originalData: [],
});

export default Context;