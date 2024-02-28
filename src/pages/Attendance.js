import React from 'react';
import close from '../assets/images/close.svg';
import { Button } from 'flowbite-react';

function Attendance({ setShowForm, handleClose }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="add-class-over">
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col p-8 bg-blue-300 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-center">Update Attendance</h3>
            <button className="bg-white hover:bg-orange-400 rounded-full p-1" onClick={handleClose} type="button">
              <img className="inline w-7 h-7" src={close} alt="icon" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter Name" />
            <label htmlFor="status">Status:</label>
            <select id="status" name="status">
              <option value="present">Present</option>
              <option value="absent">Absent</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button className=" px-4 rounded-lg py-3 my-3 w-fit bg-orange-400 hover:bg-slate-200"  type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Attendance;
