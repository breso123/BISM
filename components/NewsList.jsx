/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NewsList({ provider, providerSite, date, url, title, content }) {
  function setTextLength(text, maxLength) {
    return text
      .split(" ")
      .map((t, i, arr) => {
        if (arr.length >= maxLength)
          return i <= maxLength ? t + (i === maxLength ? "..." : "") : "";
        else return t;
      })
      .join(" ");
  }

  function formatNewsTime(date) {
    const inputDate = new Date(date);
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getDate()).padStart(2, "0");

    return `${year}/${month}/${day}`;
  }

  return (
    <li
      style={{ gridTemplateColumns: "1fr 4fr" }}
      className="w-11/12 grid grid-cols-2 items-center gap-5"
    >
      <div className="h-36 w-60 flex items-center justify-center">
        <img className="h-full w-full rounded-xl" src={url} alt="News Image" />
      </div>
      <div className="h-full w-full py-7 flex flex-col items-start justify-evenly">
        <div className="flex gap-2 items-center text-xs text-white">
          <span>
            <Link to={providerSite}>{provider}</Link>
          </span>
          <span>&bull;</span>
          <span>{formatNewsTime(date)}</span>
        </div>
        <h2 className="text-xl font-semibold text-blue-300 mb-2 tracking-wide">
          {setTextLength(title, 10)}
        </h2>
        <p className="tracking-wider text-xs text-white">
          {setTextLength(content, 35)}
        </p>
      </div>
    </li>
  );
}

export default NewsList;
