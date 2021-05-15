import React from 'react';
import './App.css'
import Header from './components/Header';
import MainSection from './components/MainSection';
import AddNewRoomBtn from './components/AddNewRoomBtn';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <AddNewRoomBtn />
    </div>
  );
}

export default App;