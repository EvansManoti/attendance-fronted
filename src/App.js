import { Routes, Route } from 'react-router-dom'
import StudentDashboard from './pages/StudentDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
        <Route path='/' element={<StudentDashboard />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AdminDashboard />} />
    </Routes>
  )
}

export default App
