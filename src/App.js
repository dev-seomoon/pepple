import { React, useState } from 'react';
import './App.css'
import Header from './components/Header';
import MainSection from './components/MainSection';
import AddNewRoomBtn from './components/AddNewRoomBtn';
import AddNewRoomModal from './components/AddNewRoomModal';

function App() {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  }

  const closeModal = () => {
    setModalState(false);
  }

  return (
    <div className="App">
      <Header />
      <MainSection />
      <AddNewRoomBtn onClick={openModal}/>
      <AddNewRoomModal state={modalState} closeModal={closeModal}/>
    </div>
  );
}

export default App;