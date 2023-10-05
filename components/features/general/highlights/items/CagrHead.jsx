/* eslint-disable react/prop-types */
function CagrHead({ onChange, cagr, cagrRev, title }) {
  return (
    <div className="flex h-[10%] w-full items-center justify-between ">
      <p
        style={{ textShadow: "3px 3px 10px rgba(25, 25, 112, 0.5)" }}
        className="text-lg text-blue-900/80 font-semibold"
      >
        {title}
      </p>
      <select
        onChange={onChange}
        value={cagr}
        className="bg-sky-100/0 text-md italic w-[50px] text-fuchsia-950"
      >
        {Object.keys(cagrRev).map((_, i) => (
          <option className="text-sm" key={i} value={i + 1}>
            {i + 1}Y
          </option>
        ))}
      </select>
    </div>
  );
}

export default CagrHead;
