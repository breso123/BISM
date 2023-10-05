/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function AppNav({ onSetActiveIndex, onSetKey, appKey }) {
  const navigate = useNavigate();
  const generalKey = useSelector((state) => state.general.generalKey);
  const { financialsKey } = useParams();
  const finsKey = !financialsKey ? "income_statement" : financialsKey;

  function handleClick(e, k) {
    e.preventDefault();
    appKey !== k && onSetActiveIndex(0);
    onSetKey(k);
    navigate(`/app/${k}/${k === "general" ? generalKey : finsKey}`);
  }

  function exitTheApp(e) {
    e.preventDefault();
    localStorage.removeItem("statements");
    localStorage.removeItem("general");
    localStorage.removeItem("earnings");
    localStorage.removeItem("stock");
    localStorage.removeItem("stockFull");
  }

  return (
    <nav className="w-screen h-16 bg-blue-950 flex items-center justify-between ">
      <ul className="flex items-center justify-evenly  h-full">
        <button
          onClick={(e) => {
            handleClick(e, "general");
          }}
          className="appNav"
        >
          Stock
        </button>

        <button
          onClick={(e) => handleClick(e, "financials")}
          className="appNav"
        >
          Financials
        </button>

        <p className="appNav line-through text-stone-400">Statistics</p>
        <p className="appNav line-through text-stone-400">Analysis</p>
        <p className="appNav line-through text-stone-400">News</p>
        <p className="appNav line-through text-stone-400">Shareholders</p>
        <p className="appNav line-through text-stone-400">Insiders</p>
        <p className="appNav line-through text-stone-400">BI Score</p>
      </ul>
      <button
        onClick={(e) => exitTheApp(e)}
        className="h-12 w-36 bg-blue-300 rounded-full font-semibold text-blue-950 mr-10"
      >
        <NavLink to="/">Main Lobby &rarr;</NavLink>
      </button>
    </nav>
  );
}

export default AppNav;
