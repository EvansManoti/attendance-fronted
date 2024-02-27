import React from 'react';

function CreateStudent({ setShowForm, handleClick }) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="page-over flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-md shadow-md max-w-md"
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-center">
                        Create Student Profile
                    </h3>
                    <button
                        className="w-9 h-9 hover:bg-orange-100 rounded-full p-1"
                        onClick={handleClick}
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ionicon"
                            viewBox="0 0 512 512"
                        >
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
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="first_name">First Name</label>
                        <input
                            className="input"
                            id="first-name"
                            type="text"
                            required
                            placeholder="Jane"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            className="input"
                            id="last-name"
                            type="text"
                            required
                            placeholder="Doe"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="email">Email</label>
                        <input
                            className="input"
                            id="email"
                            type="email"
                            placeholder="janedoe@gmail.com"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                            className="input"
                            id="phone_number"
                            type="text"
                            required
                            placeholder="07********"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full max-w-[280px]">
                        <label htmlFor="course">Course</label>
                        <input className="input" id="department" type="text" required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <input type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                    </div>
                </div>
                <div className="form-row">
                    <button className="btn-add-class bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" type="submit">
                        Add Student
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateStudent;
