import React from 'react';

function CreateStudent({ setShowForm, handleClick }) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="page-over">
            <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col justify-center gap-4 max-w-md md:max-w-3xl"
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-center">
                        Create student Profile
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
                <div className="form-row">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <input
                            className="input"
                            id="first-name"
                            type="text"
                            required
                            placeholder="Jane"
                        />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <input
                            className="input"
                            id="last-name"
                            type="text"
                            required
                            placeholder="Doe"
                        />
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
                            placeholder="janedoe@gmail.com"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <label htmlFor="phone_number">Phone Number</label>
                        </div>
                        <input
                            className="input"
                            id="phone_number"
                            type="text"
                            required
                            placeholder="07********"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="w-full max-w-[280px]">
                        <div className="mb-2 block">
                            <label htmlFor="course">Course</label>
                        </div>
                        <input className="input" id="department" type="text" required />
                    </div>
                </div>

                {/* File upload input */}
                <div>
                    <input type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                </div>

                <button className="py-3 px-6 bg-orange-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75" type="submit">
                    Create Student
                </button>
            </form>
        </div>
    );
}

export default CreateStudent;
