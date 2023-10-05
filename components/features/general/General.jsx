/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";
import HeaderGeneral from "./generalInfo/HeaderGeneral";
import { useSelector } from "react-redux";
import Loader from "../../Loader";
//import { useSelector } from "react-redux";

function General() {
  //const general = useSelector((state) => state.general.general);
  const general = JSON.parse(localStorage.getItem("general"));
  const status = useSelector((state) => state.general.status);

  return (
    <div className="h-full border-t-2 border-l-2 border-solid border-blue-950 px-4 relative">
      <HeaderGeneral general={general} />
      {status === "loading" ? <Loader /> : <Outlet />}
    </div>
  );
}

export default General;
