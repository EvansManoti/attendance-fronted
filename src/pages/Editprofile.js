import { Card, TextInput } from 'flowbite-react';
import Nav from '../components/Nav';
import { HiMail, HiUser, HiPhone } from 'react-icons/hi';

function EditProfile() {
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center mt-10">
        <Card className="max-w-20px h-1200px flex bg-lightblue" style={{marginRight:'200px', marginLeft:'300px', width:'800px', marginTop:'-35px', marginBottom:'8px', backgroundColor:'lightblue'}}>
          <div className="flex-none w-1/3 p-4">
            <img
              alt="Bonnie image"
              height="96"
              src="/images/people/profile-picture-3.jpg"
              width="96"
              className="rounded-full shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center p-4 w-4/5 h-10px" style={{marginRight:'20px', marginLeft:'50px'}}>
            <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">Moringa Stud...</h5>

            <div className="mb-3">
              <label htmlFor="firstName" className="text-sm text-gray-500 dark:text-gray-400 block">First Name</label>
              <TextInput id="firstName" type="text" rightIcon={HiUser} placeholder="Moringa" required />
            </div>

            <div className="mb-3">
              <label htmlFor="secondName" className="text-sm text-gray-500 dark:text-gray-400 block">Second Name</label>
              <TextInput id="secondName" type="text" rightIcon={HiUser} placeholder="moringa" required />
            </div>

            <div className="mb-3">
              <label htmlFor="phoneNumber" className="text-sm text-gray-500 dark:text-gray-400 block">Phone Number</label>
              <TextInput id="phoneNumber" type="text" rightIcon={HiPhone} placeholder="+254720002" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="text-sm text-gray-500 dark:text-gray-400 block">Email</label>
              <TextInput id="email" type="email" rightIcon={HiMail} placeholder="name@flowbite.com" required />
            </div>

            <div className="mt-4 flex space-x-4">
              <button className="inline-flex items-center rounded-lg border border-gray-300 bg-cyan-500 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-cyan-600 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-500 dark:focus:ring-gray-700">
                Edit
              </button>
              <button className="inline-flex items-center rounded-lg border border-gray-300 bg-cyan-500 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-cyan-600 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-500 dark:focus:ring-gray-700">
                Delete
              </button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default EditProfile;
