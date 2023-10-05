/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

import Phone from "../components/icons/Phone";
import Email from "../components/icons/Email";
import Question from "../components/icons/Question";

function Contact() {
  return (
    <div className="flex flex-col items-center h-screen">
      <PageNav />
      <div className="h-5/6 w-2/4 flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-semibold mb-8 text-sky-200">Contact Us</h1>
        <h2 className="flex items-center text-xl gap-5 w-[25rem]">
          <Phone />
          <span className="text-indigo-300 font-semibold">Phone: </span>
          <Link
            className="text-indigo-200 hover:text-indigo-400 hover:italic"
            to="tel: +385 99 768 1309"
          >
            +385 99 768 1309
          </Link>
        </h2>
        <h2 className="flex items-center text-xl gap-5 w-[25rem]">
          <Email />
          <span className="text-indigo-300 font-semibold">E-mail:</span>
          <Link
            className="text-indigo-200 hover:text-indigo-400 hover:italic"
            to="mailto: bresan.ivan@hotmail.com"
          >
            bresan.ivan@hotmail.com
          </Link>
        </h2>
        <p className="flex items-center justify-center gap-2 mt-3 text-sm">
          <Question />
          <Link
            className="text-indigo-200 hover:text-indigo-400 hover:italic"
            to=""
          >
            Help Center
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Contact;
