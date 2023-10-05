/* eslint-disable react/prop-types */

function ReusableImage({
  src,
  additionalStyles = "h-12 w-12 overflow-visible",
}) {
  return (
    <span
      className={`flex items-center justify-center rounded-full ${additionalStyles}`}
    >
      <img src={src} alt="" className="h-[70%]" />
    </span>
  );
}

export default ReusableImage;
