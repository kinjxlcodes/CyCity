import { Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="src/assets/apple-touch-icon.png" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
            <a href="#about">
              <Typography
                as="span"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </a>
          </li>
          <li>
            <Link to="privacy-policy">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Privacy Policy
            </Typography>
            </Link>
          </li>
          <li>
            <Link to="terms-and-conditions">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Terms of use
            </Typography>
            </Link>
          </li>
          <li>
            <Link to="cookies">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Cookies and Preferences
            </Typography>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Cy City Inc. & Cy City International Private Limited. All Rights Reserved
      </Typography>
      <Typography color="blue-gray" className="text-center font-normal">
        Designed by Cy City Inc. & Cy City International Private Limited.
      </Typography>
      {/* Flag Buttons */}
      <div className="absolute bottom-24 left-8 flex gap-4">
        {/* USA Flag Button */}
        <button
          className="fixed text-3xl bottom-30 right-8 bg-white text-white p-4 rounded-full shadow-lg hover:bg-blue-300 transition-all"
          aria-label="USA"
        >
          🇺🇸
        </button>

        {/* India Flag Button */}
        <button
          className="fixed text-3xl bottom-50 right-8 bg-white text-white p-4 rounded-full shadow-lg hover:bg-green-400 transition-all"
          aria-label="India"
        >
          🇮🇳
        </button>
      </div>
      {/* Scroll Up Button */}
      <button
        onClick={scrollToTop}
        className="fixed text-3xl bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
}

