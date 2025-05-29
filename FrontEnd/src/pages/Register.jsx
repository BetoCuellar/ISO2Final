import React, { useState } from 'react';

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('Estudiante');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registrando: ${nombre}, ${email}, ${rol}`);
    // Aquí iría la llamada a backend para registro real
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <label>Nombre:</label>
      <input
        name="nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <label>Contraseña:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <label>Rol:</label>
      <select name="rol" value={rol} onChange={e => setRol(e.target.value)}>
        <option>Estudiante</option>
        <option>Docente</option>
        <option>Administrador</option>
      </select>
      <button type="submit">Registrar</button>
    </form>
  );
}
