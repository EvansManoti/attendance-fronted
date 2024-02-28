import React from 'react'
import { Link } from 'react-router-dom'

function StudentDashboard() {
  return (
    <div className='flex gap-4 p-4'>
      <Link to='/login'>Login</Link>
      <Link to='/admin'>Admin</Link>
      <Link to='/students'>Students</Link>
      <Link to='/teacher'>Teacher</Link>
      <Link to='/class'>Class</Link>
      <Link to='/attendance'>Attendance</Link>
    </div>
  )
}

export default StudentDashboard
