import React, { useState, useEffect } from 'react';

export default function ListaReportes() {
  const [reportes, setReportes] = useState([
    { id: 1, descripcion: 'Basura acumulada cerca del parque', ubicacion: 'Campus Central' }
  ]);

  // Podrías cargar los reportes desde backend con useEffect

  return (
    <div>
      <h2>Lista de Reportes</h2>
      {reportes.length === 0 && <p>No hay reportes.</p>}
      {reportes.map((reporte) => (
        <div key={reporte.id} className="reporte-item">
          <p>{reporte.descripcion}</p>
          <p>{reporte.ubicacion}</p>
        </div>
      ))}
    </div>
  );
}
