import React, { useState } from "react";
import { BsAlignCenter } from "react-icons/bs";

const ContactFormPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send form data to backend)
    console.log("Form Data Submitted: ", formData);
    onClose(); // Close the form after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-teal-900 p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px] relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email..."
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your massage..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormPopup;
