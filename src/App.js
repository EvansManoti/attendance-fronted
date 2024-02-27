import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

import CreateTeacher from './pages/CreateTeacher';
import CreateStudent from './pages/CreateStudent';
import CreateClass from './pages/CreateClass'


import StudentDashboard from './pages/StudentDashboard';
import StudentPage from './pages/StudentPage';

import TeacherPage from './pages/TeacherPage';
import ProfilePopPage from './pages/ProfilePopPage';
import AdminPage from './pages/AdminPage';
function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/teacher" element={<CreateTeacher />} />
        <Route path="/student" element={<CreateStudent />} />
        <Route path="/form" element={<CreateClass />} />


        <Route path="/student" element={<StudentDashboard />} />

        <Route path="/studentpage" element={<StudentPage />} />
        <Route path="/teacherpage" element={<TeacherPage />} />
        <Route path="/profilepoppage" element={<ProfilePopPage />} />
        <Route path="/adminpage" element={<AdminPage />} />

      </Routes>
    </Router>
  );
}

export default App;
