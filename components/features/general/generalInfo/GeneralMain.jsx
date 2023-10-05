/* eslint-disable react/prop-types */

//import { useSelector } from "react-redux";
import { generalItemsArray } from "../../../../miscellanious/generalItems";
import GeneralItem from "./GeneralItem";

function GeneralMain() {
  const general = JSON.parse(localStorage.getItem("general"));
  //const general = useSelector((state) => state.general.general);
  return (
    <div>
      {generalItemsArray.map((item, i) => (
        <GeneralItem general={general} item={item[0]} img={item[1]} key={i} />
      ))}
    </div>
  );
}

export default GeneralMain;
