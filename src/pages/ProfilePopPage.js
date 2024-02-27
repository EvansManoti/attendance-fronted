

import { Card, Dropdown, DarkThemeToggle, Flowbite } from 'flowbite-react';
function ProfilePopPage() {
  return (
    <>
    <Flowbite>
    <div style={{  flexDirection: 'column', marginLeft: '200px',marginRight:'200px', alignItems: 'center', marginTop: '20px' }}>
    <Card className="max-wl-sm"  style={{ display: 'flex', backgroundColor: "lightblue", marginBlockStart: '40px'}}
   >
     <div className="flex justify-end px-14 pt-3">
        <Dropdown inline label="">
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
               <DarkThemeToggle>Theme</DarkThemeToggle>
           
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
     
      <div className="flex flex-col items-center pb-10" style= {{flexDirection: 'column',marginBlockStart: '-90px',marginBlockEnd:'40px', marginRight: '700px', alignItems: 'center', marginTop: '40'}}>
        <img
          alt="png"
          height="96"
          backgroundColor="white"
          imgSrc="/home/kevin/attendance-tracker-frontend/client/src/1.jpeg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white" href=''>Moringa Stud...</h5>
        <span className="mb-1 ms-1 text-lm text-gray-500 dark:text-gray-400" href='#' >@outlook.com</span>
        <h4 className="mb-1" >
           <div className="mt-4 flex space-x-4 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Edit
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-cyan-500 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-cyan-600 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-500 dark:focus:ring-gray-700"
          >
            Delete
          </a>
        </div>
        </h4>
      </div>
      
    </Card>
    </div>
    </Flowbite>
    </>
  );
}

export default ProfilePopPage;