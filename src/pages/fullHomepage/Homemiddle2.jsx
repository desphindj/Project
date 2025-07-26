import React, { useEffect, useState } from 'react';
import './App.css';
import dataana from '../../assets/images/dataana.jpeg';
const images = [
  'dataana.jpeg',
  'dataana.jpeg',
  'dataana.jpeg',
  'dataana.jpeg',
];

function App() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDrop = {
        id: Date.now(),
        src: images[Math.floor(Math.random() * images.length)],
        left: Math.floor(Math.random() * window.innerWidth),
      };
      setDrops((prev) => [...prev, newDrop]);

      
      setTimeout(() => {
        setDrops((prev) => prev.filter((d) => d.id !== newDrop.id));
      }, 2000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {drops.map((drop) => (
        <img
          key={drop.id}
          src={drop.src}
          className="image-drop"
          style={{ left: drop.left }}
          alt=""
        />
      ))}
    </div>
  );
}

export default App;
