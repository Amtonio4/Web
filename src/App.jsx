import React from 'react';
import { useState } from 'react';
import Formulario from './components/Formulario.jsx';
import './css/App.css';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="contenedor-principal">
      
      <header className="app-header">
        <h1 className="header-title">Cotizador de Criptomonedas</h1>
      </header>
    
      <main className="App">
        <h1 className="titulo">Cotizador de Criptomonedas</h1>

        <div className="columna-formulario">
          <div className="tarjeta-formulario">

            <button 
              className="btn-cotizar" 
              onClick={() => setVisible(!visible)}
              style={{ width: '100%', marginBottom: '20px' }}
            >
              {visible ? 'Ocultar Formulario' : 'Mostrar Formulario'}
            </button>

            {visible && (
              <Formulario 
                visible={visible}
                setVisible={setVisible}
              />
            )}

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;