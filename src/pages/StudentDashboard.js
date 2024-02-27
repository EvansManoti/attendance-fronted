import Nav from '../components/Nav';
import { Card } from 'flowbite-react';
import { Datepicker } from 'flowbite-react';

function StudentDashboard() {
  return (
    <div>
      <Nav />
      <Card href="#" className="max-w-lg mx-auto p-6 bg-pink-400"> 
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          ATTENDANCE RECAP
        </h5>
        <p className="font-bold text-gray-700 text-gray-700 dark:text-gray-400">
          Attendance Percentage% &nbsp; Present &nbsp; Absent &nbsp; Late
        </p>
        <p className="text-gray-700 dark:text-gray-400">
          84% &nbsp; 84 days &nbsp; 12 days &nbsp; 8 days
        </p>
        <Datepicker title="Flowbite Datepicker" /> {/* Include the Datepicker component */}
      </Card>
    </div>
  );
}

export default StudentDashboard;
