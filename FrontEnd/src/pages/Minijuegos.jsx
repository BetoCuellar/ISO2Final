import React, { useState } from 'react';

export default function Minijuegos() {
  const [mensaje, setMensaje] = useState('');
  const opciones = [
    { texto: 'Papel', correcta: true },
    { texto: 'Vidrio', correcta: true },
    { texto: 'Plástico', correcta: false },
  ];

  const handleFinalizar = () => {
    setMensaje('Puntaje obtenido: 20');
  };

  return (
    <div>
      <h2>Minijuegos Educativos</h2>
      <button
        onClick={() => alert('Juego de Clasificación iniciado')}
        className="juego-clasificacion"
      >
        Juego de Clasificación
      </button>
      <div>
        {opciones.map((opcion, i) => (
          <button
            key={i}
            className={`opcion ${opcion.correcta ? 'correct' : ''}`}
            onClick={() => {}}
          >
            {opcion.texto}
          </button>
        ))}
      </div>
      <button className="finalizar-juego" onClick={handleFinalizar}>
        Finalizar Juego
      </button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}
