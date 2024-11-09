import React, { useState } from "react";
import { Modal } from "bootstrap";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './book.css'

function Book() {
  const [value, valueChange] = useState(new Date()); // Default to a single date
  const day = value ? value.getDate() : null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState(null); // State to store the date for the modal header

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1); // Set to yesterday

  const onChange = (e) => {
    setIsModalOpen(true);

    // If a single date is selected, we just pass the date
    if (e instanceof Date) {
      setModalDate(e.toLocaleDateString());
    }
    // If a date range is selected, pass the range
    else if (Array.isArray(e)) {
      const [start, end] = e;
      setModalDate(`${start.toLocaleDateString()} - ${end.toLocaleDateString()}`);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1>Selected Day: {day}</h1>
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={Array.isArray(value)} // Enable date range selection if value is an array
        tileDisabled={({ date }) => date < yesterday}
      />

      {isModalOpen && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Selected Date(s): {modalDate}</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body flex">
                <div className="box">10AM</div>
                <div className="box">11AM</div>
                <div className="box">12PM</div>
                <div className="box">1PM</div>
                <div className="box">2PM</div>
                <div className="box">3PM</div>
                <div className="box">3PM</div>

              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleCloseModal}
                >
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Book;
