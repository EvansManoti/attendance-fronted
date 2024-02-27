import { Footer, Button, Card } from 'flowbite-react';
import Nav from '../components/Nav'
import { FaUser } from 'react-icons/fa'


function TeacherPage(){
    return(
    <>
        <Nav />
      <Card className="w-96 l-70 bg-blue border border-gray rounded-lg shadow dark:bg-gray-800 
      dark:border-gray-700" style={{ display: 'flex', backgroundColor: 'lightpink',alignItems: 'center',
       marginTop: '90px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaUser size={24} style={{ scrollMarginInlineStart: '8px',alignItems: 'center',display: 'flex' }} />
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2021</h5>
          <p className="text-sm font-normal text-gray-700 dark:text-gray-400">Total students</p>
        </div>
      </div>
    </Card>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <div className="overflow-x-auto" style={{ width: '100%', maxWidth: '1300px' }}>
        <Footer container>
            Your classes
          <Button backgroundcolour="orange" href="#">
            Add
          </Button>
        </Footer>
      </div>
        </div>
        <Card className="w-96 l-70 bg-blue border border-gray rounded-lg shadow dark:bg-gray-800 
      dark:border-gray-700" style={{ display: 'flex', backgroundColor: 'lightpink',alignItems: 'center',
       marginTop: '10px' }}>
      
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4 ">
            <div className="flex items-center space-x-12 flex-1">
              <div className="shrink-0">
             
              </div>
              <div className="min-w-1 flex-1">
                <p className="truncate text-sm font-bold text-gray-900 dark:text-white">Class name</p>
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">8:00AM - 10:00AM</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
    
        <div className="min-w-0 flex-1">
          <p className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">47</p>
          <p className="text-sm font-medium text-gray-900 dark:text-white">Total students</p>
        </div>
      </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
    </>
    );
}

export default TeacherPage;