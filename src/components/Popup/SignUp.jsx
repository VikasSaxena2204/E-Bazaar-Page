import React, { forwardRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const SignUp = forwardRef(({ signUpPopup, setSignUpPopup, setLoginPopup, loginRef }, signUpRef) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(""); // Added state for phone number
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSignUp = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!number) newErrors.number = "Phone number is required"; // Added phone number validation
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Sign Up Successful");
    setSignUpPopup(false);
  };

  const handleLoginClick = () => {
    setSignUpPopup(false);
    if (loginRef.current) {
      loginRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setLoginPopup(true);
  };

  return (
    <>
      {signUpPopup && (
        <div className="popup" ref={signUpRef}>
          <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 shadow-lg bg-white dark:bg-gray-900 rounded-lg max-w-sm w-full">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Sign Up Now</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer hover:text-red-500"
                  onClick={() => setSignUpPopup(false)}
                />
              </div>
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
                  type="number" // Changed to lowercase "number"
                  placeholder="Phone Number"
                  className={`w-full rounded-lg border px-4 py-2 mb-4 focus:outline-none focus:ring-2 ${
                    errors.number ? "border-red-500" : "border-gray-300"
                  } dark:bg-gray-800 dark:border-gray-500`}
                  value={number} // Added value binding for phone number
                  onChange={(e) => {
                    setNumber(e.target.value);
                    setErrors((prev) => ({ ...prev, number: "" }));
                  }}
                />
                {errors.number && <p className="text-red-500 text-sm mb-2">{errors.number}</p>}
                <input
                  type="password"
                  placeholder="Set Password"
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
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </button>
                  <p className="text-sm">
                    Already have an account?{" "}
                    <button
                      className="text-primary font-semibold"
                      onClick={handleLoginClick}
                    >
                      Please Login
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
});

export default SignUp;
