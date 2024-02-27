import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import CreateTeacher from './pages/CreateTeacher';
import CreateStudent from './pages/CreateStudent';
import CreateClass from './pages/CreateClass'



function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teacher" element={<CreateTeacher />} />
        <Route path="/student" element={<CreateStudent />} />
        <Route path="/form" element={<CreateClass />} />
      </Routes>
    </Router>
  );
}

export default App;
