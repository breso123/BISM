import { Link } from "react-router-dom";
import ReusableImage from "../../../reusableImages/ReusableImage";

/* eslint-disable react/prop-types */
function GeneralItem({ general, item, img }) {
  const itemDefault = "text-xl overflow-visible tracking-wide text-sky-800";
  const itemDesc =
    "text-md h-[15rem] w-[40rem] overflow-scroll mt-3 text-justify p-2 shadow-hoverFins text-sky-800";

  return (
    <div
      style={{ gridTemplateColumns: "1fr 2.5fr" }}
      className={`grid gap-8 mb-2 ml-7 ${
        item === "description" ? "items-start" : "items-center"
      }`}
    >
      <div className="flex items-center justify-start gap-2">
        <ReusableImage src={img} size="h-20 w-20" />
        <p
          style={{ textShadow: "4px 4px 15px rgba(0, 0, 255, 0.45)" }}
          className="text-lg font-semibold italic text-blue-800/70 tracking-wider"
        >
          {item === "address"
            ? "Headquarters"
            : item[0].toUpperCase() + item.slice(1)}
          :
        </p>
      </div>
      {item === "phone" ? (
        <Link
          className="italic hover:underline hover:text-sky-950"
          to={`tel: ${item}`}
        >
          <p className={itemDefault}>{general[item]}</p>
        </Link>
      ) : (
        <p className={`${item === "description" ? itemDesc : itemDefault}`}>
          {item === "address"
            ? `${general[item]}, ${general.city}, ${general.zip}, ${general.state}, ${general.country}`
            : general[item]}
        </p>
      )}
    </div>
  );
}

export default GeneralItem;
