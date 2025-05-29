import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import NuevoReporte from './pages/NuevoReporte'
import ListaReportes from './pages/ListaReportes'
import Minijuegos from './pages/Minijuegos'
import Perfil from './pages/Perfil'
import Dashboard from './pages/Dashboard' // Si lo tienes o crea uno básico

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reportes/nuevo" element={<NuevoReporte />} />
        <Route path="/reportes" element={<ListaReportes />} />
        <Route path="/minijuegos" element={<Minijuegos />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Ruta principal o fallback */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
