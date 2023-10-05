/* eslint-disable react/prop-types */

import ReusableImage from "../reusableImages/ReusableImage";

function HeaderTitle({ financialsImg, financialsKey }) {
  return (
    <div className="flex items-center justify-start gap-3 pl-8">
      <ReusableImage src={financialsImg} additionalStyles="h-16 w-16" />
      <p className="text-xl text-blue-900 font-semibold tracking-wide italic">
        {financialsKey
          .split("_")
          .map((k) => k[0].toUpperCase() + k.slice(1))
          .join(" ")}
      </p>
    </div>
  );
}

export default HeaderTitle;
