import React from 'react';

function Profile() {
  return (
    <div className="Profile">Profile</div>
  );
}

function Room() {
  return (
    <div className="Room">Room</div>
  )
}

function App() {
  return (
    <div className="App">
      Hello
      <Profile />
      <Room />
    </div>
  );
}

export default App;