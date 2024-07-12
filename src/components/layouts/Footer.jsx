import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Footer = () => {
  const [language, setLanguage] = useState("English (UK)");
  const [currency, setCurrency] = useState("U.S. Dollar ($)");

  return (
    <footer className="bg-blue-gray-900 text-white pt-10 pb-5 mt-10">
      <div className="container mx-auto flex flex-col items-center text-center md:flex-row justify-between md:text-left md:items-start">
        <div className="flex-col gap-5">
          <div className="flex flex-col mb-6 md:mb-0">
            <label htmlFor="language" className="mb-2">
              Language
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-blue-gray-800 text-white p-2 rounded"
            >
              <option value="english-uk">English (UK)</option>
              <option value="english-us">English (US)</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <label htmlFor="currency" className="mb-2">
              Currency
            </label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-blue-gray-800 text-white p-2 rounded"
            >
              <option value="usd">U.S. Dollar ($)</option>
              <option value="eur">Euro (€)</option>
              <option value="gbp">British Pound (£)</option>
              <option value="jpy">Japanese Yen (¥)</option>
            </select>
          </div>
        </div>

        <div className="mb-6 md:mb-0 md:mr-10">
          <h1 className="font-bold mb-3">Company</h1>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">About Us</li>
            <li className="mb-2 hover:underline cursor-pointer">Blog</li>
            <li className="mb-2 hover:underline cursor-pointer">Press Room</li>
            <li className="mb-2 hover:underline cursor-pointer">Careers</li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0 md:mr-10">
          <h1 className="font-bold mb-3">Help</h1>
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
            <h1 className="font-bold mb-3">Payment methods possible</h1>
            <ul>{/* Add payment method icons or text here */}</ul>
          </div>
          <div>
            <h1 className="font-bold mb-3">Company</h1>
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
          <div className="flex space-x-6">
            {" "}
            {/* Menambahkan spasi antara ikon */}
            <a
              href="#"
              className="text-white hover:text-gray-400"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400"
              aria-label="Pinterest"
            >
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
