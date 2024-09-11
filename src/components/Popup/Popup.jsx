import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  const handleOrder = () => {
    const newErrors = {};

    // Simple validation
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!address) newErrors.address = "Address is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Placeholder for real order logic
    alert("Your order has been placed!");
    setOrderPopup(false);
  };

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 shadow-lg bg-white dark:bg-gray-900 rounded-lg max-w-sm w-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Order Now</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer hover:text-red-500"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
              {/* Form Section */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className={`w-full rounded-lg border px-4 py-2 mb-4 focus:outline-none focus:ring-2 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } dark:bg-gray-800 dark:border-gray-500`}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors((prev) => ({ ...prev, name: "" }));
                  }}
                />
                {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}
                <input
                  type="email"
                  placeholder="Email"
                  className={`w-full rounded-lg border px-4 py-2 mb-4 focus:outline-none focus:ring-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } dark:bg-gray-800 dark:border-gray-500`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((prev) => ({ ...prev, email: "" }));
                  }}
                />
                {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
                <input
                  type="text"
                  placeholder="Address"
                  className={`w-full rounded-lg border px-4 py-2 mb-4 focus:outline-none focus:ring-2 ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  } dark:bg-gray-800 dark:border-gray-500`}
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setErrors((prev) => ({ ...prev, address: "" }));
                  }}
                />
                {errors.address && <p className="text-red-500 text-sm mb-2">{errors.address}</p>}
                <div className="flex justify-center">
                  <button
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full"
                    onClick={handleOrder}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
