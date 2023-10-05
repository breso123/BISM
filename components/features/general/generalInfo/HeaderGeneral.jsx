/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import HeaderTitle from "../../HeaderTitle";
import HeaderItems from "../../HeaderItems";
import ReusableImage from "../../../reusableImages/ReusableImage";

function HeaderGeneral({ general }) {
  //const { logo, name, symbol } = general;
  const generalImg = useSelector((state) => state.general.generalImg);
  const generalKey = useSelector((state) => state.general.generalKey);

  return (
    <div
      style={{ gridTemplateColumns: "1fr 2fr" }}
      className="grid grid-cols-2 bg-sky-200/30 h-24 rounded-b-xl shadow-appHeader mb-5"
    >
      <HeaderTitle financialsImg={generalImg} financialsKey={generalKey} />

      <HeaderItems cols="1">
        <div className="flex items-center justify-end gap-6 pr-4">
          <p className="flex flex-col items-center justify-center gap-1">
            <span className="font-semibold text-[1rem]">{general?.name}</span>
            <span className="italic text-sm text-green-800">
              Ticker: {general?.symbol}
            </span>
          </p>
          <ReusableImage
            src={general?.logo}
            additionalStyles="h-16 w-16 overflow-hidden bg-white shadow-watchList"
          />
        </div>
      </HeaderItems>
    </div>
  );
}

export default HeaderGeneral;
