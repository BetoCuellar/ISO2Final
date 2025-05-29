import React from 'react';

export default function Perfil() {
  const puntajes = [100, 85, 90]; // Ejemplo estático

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <div className="historial-puntajes">
        {puntajes.map((p, i) => (
          <div key={i} className="puntaje">
            Puntaje: {p}
          </div>
        ))}
      </div>
    </div>
  );
}
