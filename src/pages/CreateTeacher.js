import React from 'react'

function CreateTeacher({setShowForm, handleClick}) {
    function handleSubmit(e){
        e.preventDefault()
    }
  return (
    <div className="page-over">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col justify-center gap-4 max-w-md md:max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-center">
            Create Teacher Profile
          </h3>
          <button
            className="w-9 h-9 hover:bg-orange-100 rounded-full p-1"
            onClick={handleClick}
            type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512">
              <path
                fill="black"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </button>
        </div>
        <div className="form-row">
          <div className="w-full">
            <div className="mb-2 block">
              <label htmlFor="first_name">First Name</label>
            </div>
            <input className="input" id="first-name" type="text" required />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <label htmlFor="last_name">Last Name</label>
            </div>
            <input className="input" id="last-name" type="text" required />
          </div>
        </div>
        <div className="form-row">
          <div className="w-full">
            <div className="mb-2 block">
              <label htmlFor="email">Email</label>
            </div>
            <input
              className="input"
              id="email"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <label htmlFor="phone_number">Phone Number</label>
            </div>
            <input className="input" id="phone_number" type="text" required />
          </div>
        </div>
        <div className="form-row">
          <div className="w-full max-w-[280px]">
            <div className="mb-2 block">
              <label htmlFor="department">Department</label>
            </div>
            <input className="input" id="department" type="text" required />
          </div>
        </div>

        <button className="btn py-3 my-3" type="submit">
          Sign In
        </button>
      </form>
    </div>
  )
}

export default CreateTeacher
