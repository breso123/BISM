import { NavLink } from "react-router-dom";

function NewsNav() {
  const newsArray = [
    "world",
    "north america",
    "europe",
    "asia",
    "south america",
    "africa",
  ];
  return (
    <nav className="w-full mt-8">
      <ul
        style={{ boxShadow: "0 0 10px aliceblue" }}
        className="flex items-center justify-evenly list-none py-4 rounded-full "
      >
        {newsArray.map((news, i) => (
          <li key={i}>
            <NavLink
              className="text-xl font-semibold no-underline hover:italic hover:text-white text-indigo-200"
              to=""
            >
              {news
                .split(" ")
                .map((n) => n[0].toUpperCase() + n.slice(1))
                .join(" ")}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NewsNav;
