import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Login = ({ LoginPopup, setLoginPopup, signUpRef, setSignUpPopup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    const newErrors = {};

    // Simple validation
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Placeholder for real authentication logic
    alert("Login Successful");
    setLoginPopup(false);
  };

  const handleSignUpClick = () => {
    setLoginPopup(false);
    if (signUpRef.current) {
      signUpRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setSignUpPopup(true);
  };

  return (
    <>
      {LoginPopup && (
        <div className="popup">
          <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 shadow-lg bg-white dark:bg-gray-900 rounded-lg max-w-sm w-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Login Now</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer hover:text-red-500"
                  onClick={() => setLoginPopup(false)}
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
                  type="password"
                  placeholder="Password"
                  className={`w-full rounded-lg border px-4 py-2 mb-4 focus:outline-none focus:ring-2 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } dark:bg-gray-800 dark:border-gray-500`}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({ ...prev, password: "" }));
                  }}
                />
                {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password}</p>}
                <div className="flex flex-col items-center">
                  <button
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full mb-4"
                    onClick={handleLogin}
                  >
                    Login Now
                  </button>
                  <p className="text-sm">
                    Don't have an account?{" "}
                    <button
                      className="text-primary font-semibold"
                      onClick={handleSignUpClick}
                    >
                      Please Sign Up
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
