// src/components/BookingModal.js
import React from 'react';
import './BookingModal.css'; // we’ll make this too

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Book</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Describe your requirement" rows="4" required />
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose} className="close-btn">Close</button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
