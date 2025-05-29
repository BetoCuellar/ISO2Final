import React, { useState } from 'react';

export default function NuevoReporte() {
  const [descripcion, setDescripcion] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje('Reporte creado con éxito');
    // Aquí enviarías a backend
  };

  return (
    <div>
      <h2>Nuevo Reporte</h2>
      <form onSubmit={handleSubmit}>
        <label>Descripción:</label>
        <textarea
          name="descripcion"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
          required
        />
        <label>Ubicación:</label>
        <input
          name="ubicacion"
          value={ubicacion}
          onChange={e => setUbicacion(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}
