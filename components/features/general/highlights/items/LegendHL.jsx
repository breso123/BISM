/* eslint-disable react/prop-types */
function LegendHL({ data, title }) {
  return (
    <div
      style={{ boxShadow: "1px 1px 1px midnightblue" }}
      className="h-[3-rem] w-full flex items-center justify-between px-2 border-b border-blue-950 rounded-lg"
    >
      <p className="italic text-blue-900">{title}</p>
      <div className="flex items-center justify-center gap-6 bg-pink-100/20 text-sm m-1 px-3 py-2 rounded-full">
        {data.map((d, i) => (
          <div key={i} className="flex items-center justify-center gap-2">
            {Array.isArray(d.color) ? (
              <>
                <div className={`w-3 h-3 ${d.color[0]} rounded-full`}></div>
                <p>/</p>
                <div className={`w-3 h-3 ${d.color[1]} rounded-full`}></div>
              </>
            ) : (
              <div className={`w-3 h-3 ${d.color} rounded-full`}></div>
            )}

            <p>{d.item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LegendHL;
