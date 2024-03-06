import React, { useState, useEffect } from 'react';
import './App.css';
import Topo from './componentes/TopoMenu/Topo';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando uma espera de 2 segundos para carregar
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-circle"></div>
      ) : (
        <Topo />
      )}
    </div>
  );
}

export default App;
