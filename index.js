import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import fruits from './dictionary.json';
import App from './App';
import Hell from './sept13';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const FruitContext=createContext()
root.render(
  <FruitContext.Provider value={{fruits}}>
    <Hell/>
  </FruitContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
