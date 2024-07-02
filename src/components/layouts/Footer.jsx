import { useState } from "react";

const Footer = () => {
  const [language, setLanguage] = useState("English (UK)");
  const [currency, setCurrency] = useState("U.S. Dollar ($)");

  return (
    <footer className="bg-blue-gray-900 text-white pt-10 pb-5 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="flex-col gap-5">
          <div className="flex flex-col mb-6 md:mb-0">
            <label className="mb-2">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-blue-gray-800 text-white p-2 rounded"
            >
              <option>English (UK)</option>
              <option>English (US)</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <label className="mb-2">Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-blue-gray-800 text-white p-2 rounded"
            >
              <option>U.S. Dollar ($)</option>
              <option>Euro (€)</option>
              <option>British Pound (£)</option>
              <option>Japanese Yen (¥)</option>
            </select>
          </div>
        </div>

        <div className="mb-6 md:mb-0 md:mr-10">
          <h5 className="font-bold mb-3">Company</h5>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">About Us</li>
            <li className="mb-2 hover:underline cursor-pointer">Blog</li>
            <li className="mb-2 hover:underline cursor-pointer">Press Room</li>
            <li className="mb-2 hover:underline cursor-pointer">Careers</li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0 md:mr-10">
          <h5 className="font-bold mb-3">Help</h5>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">Contact us</li>
            <li className="mb-2 hover:underline cursor-pointer">FAQs</li>
            <li className="mb-2 hover:underline cursor-pointer">
              Terms and conditions
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              Privacy policy
            </li>
            <li className="mb-2 hover:underline cursor-pointer">Sitemap</li>
          </ul>
        </div>
        <div>
          <div className="mb-6 md:mb-0 md:mr-10">
            <h5 className="font-bold mb-3">Payment methods possible</h5>
            <ul>{/* Add payment method icons or text here */}</ul>
          </div>
          <div>
            <h5 className="font-bold mb-3">Company</h5>
            <ul>
              <li className="mb-2 hover:underline cursor-pointer">
                Become a Tour guide for Us
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            Copyright 2021 Tour Guide. All Rights Reserved
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
