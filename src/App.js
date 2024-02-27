import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/studentpage" element={<StudentPage />} />
        <Route path="/teacherpage" element={<TeacherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
