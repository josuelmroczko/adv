import React, { useState, useEffect } from 'react';
import './App.css';
import Topo from './componentes/TopoMenu/Topo';
import SobreNos from './componentes/sobreSessao1/sobreNos';
import { Servicos } from './componentes/servicosSessao2/servicos';
import Navbar from './componentes/barraMenu/barra';
import { StyleProficionais } from './componentes/proficionaisSessao3/profiStyle';
import Proficionais from './componentes/proficionaisSessao3/proficionais';
import FaleConosco from './componentes/faleConoscoSessao4/faleConosco';

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
          <Navbar/>
          <SobreNos />
          <Servicos/>
           <Proficionais/>
           <FaleConosco/>
        </>
      )}
    </div>
  );
}

export default App;
