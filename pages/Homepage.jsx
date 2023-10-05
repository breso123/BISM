/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import PageNav from "../components/PageNav";
import ButtonMain from "../components/reusableButtons/ButtonMain";
import { fetchStatements } from "../components/features/financials/financialsSlice";
import {
  fetchEarnings,
  fetchGeneral,
  fetchStock,
} from "../components/features/general/generalSlice";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function enterTheApp(e) {
    e.preventDefault();
    dispatch(fetchGeneral());
    dispatch(fetchEarnings());
    dispatch(fetchStock());
    dispatch(fetchStatements());
    navigate("/app");
  }

  return (
    <div className="flex flex-col items-center h-screen">
      <PageNav />
      <div className="h-5/6 w-2/4 flex flex-col items-center justify-center gap-28">
        <h1 className="text-5xl leading-relaxed text-center text-sky-100 opacity-80 font-semibold ">
          We are a completely new brand identity
        </h1>
        <p className="text-xl text-center text-blue-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          quibusdam ab officia consequatur esse necessitatibus totam,
          reprehenderit voluptate magni amet quis rerum quam ipsa laudantium
          unde corrupti quasi? Numquam, porro.
        </p>
        <ButtonMain
          onClick={(e) => enterTheApp(e)}
          btType="classic"
          additionalClass="h-16 w-48 text-xl hover:text-indigo-300 hover:scale-105 hover:shadow-hoverBtns"
        >
          Get Started
        </ButtonMain>
      </div>
    </div>
  );
}

export default Homepage;
