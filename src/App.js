import React, { useState, useEffect } from 'react';
import './App.css';
import Topo from './componentes/TopoMenu/Topo';
import SobreNos from './componentes/sobreSessao1/sobreNos';
import { Servicos } from './componentes/servicosSessao2/servicos';

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
        <>
          <Topo />
          <SobreNos />
          <Servicos/>
        </>
      )}
    </div>
  );
}

export default App;
