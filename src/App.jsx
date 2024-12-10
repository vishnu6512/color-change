import { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('white'); 

  
  const changeBackgroundColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Change Background Color</h1>
      <button
        onClick={changeBackgroundColor}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;
