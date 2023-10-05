/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import HeaderItems from "../../HeaderItems";
import HeaderTitle from "../../HeaderTitle";
import { useParams } from "react-router-dom";

export const periods = [
  "TTM",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
];

function HeaderFins() {
  const financialsImg = useSelector((state) => state.financials.financialsImg);
  const { financialsKey } = useParams();

  return (
    <div
      style={{ gridTemplateColumns: "1fr 2fr" }}
      className="grid grid-cols-2 bg-sky-200/30 h-24 rounded-b-xl shadow-appHeader mb-5"
    >
      <HeaderTitle
        financialsImg={financialsImg}
        financialsKey={financialsKey}
      />

      <HeaderItems>
        {periods.map((p, i) => (
          <div
            className="text-[15px] font-semibold text-blue-900 relative self-center mt-1 text-center border-t-2 border-b-2 border-blue-900 py-1"
            key={i}
          >
            <span>{p}</span>
            <button className="border-blue-900 border border-solid h-5 w-5 text-blue-900 flex items-center justify-center rounded-md absolute top-[-27.5px] left-[50%] translate-x-[-50%] font-normal hover:font-semibold hover:bg-sky-50/25 hover:border-2">
              <span>+</span>
            </button>
          </div>
        ))}
      </HeaderItems>
    </div>
  );
}

export default HeaderFins;
