import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Login from "./components/Popup/Login";
import SignUp from "./components/Popup/SignUp";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [signUpPopup, setSignUpPopup] = useState(false);

  const signUpRef = useRef(null); // For smooth scroll to signup
  const loginRef = useRef(null);  // For smooth scroll to login

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const handleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };

  const handleSignUpPopup = () => {
    setSignUpPopup(!signUpPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar 
        handleOrderPopup={handleOrderPopup} 
        handleLoginPopup={handleLoginPopup} 
        handleSignUpPopup={handleSignUpPopup} 
      />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      
      {/* Login Component with smooth scrolling to SignUp */}
      <Login 
        LoginPopup={loginPopup} 
        setLoginPopup={setLoginPopup} 
        signUpRef={signUpRef} 
        setSignUpPopup={setSignUpPopup} 
      />
      
      {/* SignUp Component with smooth scrolling to Login */}
      <SignUp 
        signUpPopup={signUpPopup} 
        setSignUpPopup={setSignUpPopup} 
        setLoginPopup={setLoginPopup} 
        loginRef={loginRef} 
      />
    </div>
  );
};

export default App;
