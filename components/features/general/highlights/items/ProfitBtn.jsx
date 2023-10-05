/* eslint-disable react/prop-types */
function ProfitBtn({ onClick, kw }) {
  return (
    <button
      onClick={(e) => {
        onClick(e);
      }}
      className={`w-16`}
    >
      {kw[0].split(" ").map((kw) => kw[0].toUpperCase() + kw.slice(1))}
    </button>
  );
}

export default ProfitBtn;
