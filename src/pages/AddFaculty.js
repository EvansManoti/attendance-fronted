import React from 'react';
import { Label, TextInput } from 'flowbite-react';
import Popover from './Popover';

function AddFaculty() {
  return (
    <div className="flex flex-col items-center"> {/* Center the content vertically */}
      <h1 className="text-2xl font-bold mb-4">Add Faculty</h1> {/* Update the title */}
      <form className="flex max-w-md flex-col gap-4">
        
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Name" />
          </div>
          
          <Popover
            content={
              <div className="space-y-2 p-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>
                {/* Popover content goes here */}
              </div>
            }
          >
            <TextInput id="password1" type="password" required />
          </Popover>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="department1" value="Department" />
          </div>
          <TextInput id="department1" type="department" placeholder="computer science" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone number1" value="Phone Number" />
          </div>
          <TextInput id="phone number1" type="number" placeholder="12345" required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          ADD FACULTY
        </button>
      </form>
    </div>
  );
}

export default AddFaculty;
