import React from 'react';
import Header from './Components/Header';
import CryptoList from './Components/CryptoList';
import SearchComponent from './SearchComponent'; 
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <CryptoList />
    </div>
  );
};
export default App;