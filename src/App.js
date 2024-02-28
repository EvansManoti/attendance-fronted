import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './pages/Login'
import StudentDashboard from './pages/StudentDashboard'
import AdminDashboard from './pages/AdminDashboard'
import StudentPage from './pages/StudentPage'
import TeacherDashboard from './pages/TeacherDashboard'
import ClassDetails from './pages/ClassDetails'
import EditTeacher from './pages/EditTeacher'
import EditStudent from './pages/EditStudent'
import UserProfile from './pages/UserProfile'
import AllClasses from './pages/AllClasses'
import UpdateUserProfile from './pages/UpdateUserProfile'
import DashboardStudent from './pages/DashboardStudent'
import Attendance from './pages/Attendance'
function App() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/studentdashboard' element={<StudentDashboard />}/>
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/teacher' element={<TeacherDashboard />} />
        <Route path='/students' element={<StudentPage/>} />
        <Route path='/class' element={<ClassDetails/>} />
        <Route path='/editteacher' element={<EditTeacher/>}/>
        <Route path='/editstudent' element={<EditStudent/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/allclasses' element={<AllClasses/>}/>
        <Route path='/updateuserprofile' element={<UpdateUserProfile/>}/>
        <Route path='/dashboardstudent' element={<DashboardStudent/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
    </Routes>
  </Router>  
  )
}

export default App
