/* eslint-disable react/prop-types */

import { Outlet, useNavigate } from "react-router-dom";
import ButtonApp from "../components/reusableButtons/ButtonApp";
import * as ab from "../miscellanious/appButtons";

import Watchlists from "../components/features/appSidebar/WatchLists";
import AppNav from "../components/AppNav";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { switchStatements } from "../components/features/financials/financialsSlice";
import { switchGeneralItems } from "../components/features/general/generalSlice";

function AppLayout() {
  const [key, setKey] = useState("general");
  const [activeIndex, setActiveIndex] = useState(0);
  const appBtns = ab[key];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center h-full bg-sky-50/60 gap-10">
      <AppNav
        onSetKey={setKey}
        appKey={key}
        onSetActiveIndex={setActiveIndex}
        appBtns={appBtns}
      />
      <div className="h-screen w-11/12 py-5 flex items-start justify-start">
        <div className="flex flex-col items-center justify-start pt-10">
          {appBtns.map((btn, i) => {
            const clickedContent = btn[0]
              .split(" ")
              .map((c) => c.toLowerCase())
              .join("_");

            function dispatcher() {
              if (key === "general")
                dispatch(
                  switchGeneralItems({ img: btn[1], key: clickedContent })
                );

              if (key === "financials")
                dispatch(switchStatements({ img: btn[1] }));
            }

            function click(e) {
              e.preventDefault();
              setActiveIndex(i);
              dispatcher();
              navigate(`/app/${key}/${clickedContent}`);
            }

            return (
              <ButtonApp
                src={btn[1]}
                item={btn[0]}
                index={i}
                onClick={(e) => click(e)}
                activeIndex={activeIndex}
                key={i}
              />
            );
          })}
        </div>
        <div className="grow h-full">
          <Outlet />
        </div>
        <div className="h-full w-[10rem] ml-4">
          <Watchlists />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
