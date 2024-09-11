import React, { useState } from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import ContactFormPopup from "../Popup/ContactFormPopup"; // Import the ContactFormPopup component

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "#" }, // No need for an actual link
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = (title) => {
    if (title === "Contact") {
      setShowContactForm(true); // Show contact form popup on "Contact" link click
    }
  };

  const closeContactForm = () => {
    setShowContactForm(false); // Function to close the popup
  };

  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-16 pt-10 gap-6">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 mb-3">
              <img src={footerLogo} alt="E Bazaar Logo" className="w-12" />
              E Bazaar
            </h1>
            <p>
              A platform to fulfill your needs. Buy products at the best deals with great discounts from trusted brands.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:pl-10">
            {/* Loop through Footer Links */}
            {["Important Links", "Links"].map((header, index) => (
              <div key={index} className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">{header}</h1>
                <ul className="flex flex-col gap-2">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-primary hover:underline duration-300 text-gray-200"
                      onClick={() => handleContactClick(link.title)} // Handle "Contact" click
                    >
                      {link.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Follow Us</h1>
              <div className="flex gap-4">
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" aria-label="Facebook">
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vikas-saxena-b0258a189"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
                <a
                  href="https://github.com/VikasSaxena2204"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-3xl" />
                </a>
                <a
                  href="mailto:vikassaxena123578@gmail.com"
                  aria-label="Email"
                >
                  <FaGoogle className="text-3xl" />
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-6 text-gray-300">
                <div className="flex items-center gap-3 mb-3">
                  <FaLocationArrow />
                  <p>Delhi NCR, Haryana</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+91 931-XXX-XXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="py-4 text-center text-gray-300">
            <p className="mb-2">
              © {new Date().getFullYear()} All rights reserved to{' '}
              <a
                href="https://github.com/VikasSaxena2204"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                VikasSaxena2204
              </a>.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Popup */}
      {showContactForm && <ContactFormPopup onClose={closeContactForm} />} {/* Render contact form */}
    </div>
  );
};

export default Footer;
