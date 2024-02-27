import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      isOpen: false // Add isOpen state to control form visibility
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your logic for form submission
    console.log('Form submitted with state:', this.state);
    // You can also call a function passed from parent component as a prop
    this.setState({
      isOpen: false // Close the form after submission
    });
  };

  render() {
    return (
      <div className="flex justify-center items-center">
        <button onClick={() => this.setState({ isOpen: true })} className="btn-create-class bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Create Class</button>
        {this.state.isOpen && (
          <div className="popup fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
            <div className="popup-inner bg-white rounded-lg p-6 max-w-md w-full">
              <form onSubmit={this.handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="className" className="block">Class Name:</label>
                  <input
                    type="text"
                    id="className"
                    name="className"
                    value={this.state.className}
                    onChange={this.handleChange}
                    required
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="startDate" className="block">Start Date:</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.handleChange}
                    required
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="endDate" className="block">End Date:</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={this.state.endDate}
                    onChange={this.handleChange}
                    required
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="startTime" className="block">Start Time:</label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={this.state.startTime}
                    onChange={this.handleChange}
                    required
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="endTime" className="block">End Time:</label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={this.state.endTime}
                    onChange={this.handleChange}
                    required
                    className="input"
                  />
                </div>
                <div className="flex justify-end">
                  <button onClick={() => this.setState({ isOpen: false })} type="submit" className="btn-add-class bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add Class</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
