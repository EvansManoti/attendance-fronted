import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EditFaculty from './pages/EditFaculty';
import AddFaculty from './pages/AddFaculty';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/editfaculty" element={<EditFaculty />} />
        <Route path='/add' element={<AddFaculty/>} />
      </Routes>
    </Router>
  );
}

export default App;
