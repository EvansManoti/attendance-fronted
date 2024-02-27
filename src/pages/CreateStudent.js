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
                {/* First input field */}
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

                {/* Second input field */}
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

                {/* Third input field */}
                <div className="form-row">
                    <div className="w-full max-w-[280px]">
                        <div className="mb-2 block">
                            <label htmlFor="course">Course</label>
                        </div>
                        <input className="input" id="department" type="text" required />
                    </div>
                </div>

                {/* File upload input */}
                <div className="form-row">
                    <div>
                        <input type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                    </div>
                </div>

                {/* Button */}
                <div className="form-row">
                    <button className="py-3 px-6 bg-orange-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75" type="submit">
                        Create Student
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateStudent;

