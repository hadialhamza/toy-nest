import React from "react";
import { Link } from "react-router";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="w-11/12 mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-3">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              Where play finds a home. Discover the finest toys from local
              sellers and create unforgettable childhood memories.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/allToys"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shop All Toys
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-amber-400" />
                <span className="text-gray-300">
                  Mahiganj Bazar, Rangpur sadar, Rangpur
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-amber-400" />
                <span className="text-gray-300">+880 1765 060 631</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-amber-400" />
                <span className="text-gray-300">hamzaglory@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-700"></div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-2 md:mb-0">
              © {new Date().getFullYear()} ToyNest. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms and Conditions
              </Link>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <div className="flex space-x-4">
                <a
                  target="_blank"
                  href="https://www.facebook.com/hadialhamza"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  target="_blank"
                  href="https://x.com/"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
