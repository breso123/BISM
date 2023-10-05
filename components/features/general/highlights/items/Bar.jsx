/* eslint-disable react/prop-types */
function Bar({ title, value, col }) {
  return (
    <div className="flex items-center justify-start gap-2 ml-4 w-full">
      <div className={`h-2 w-2 rounded-full ${col}`}></div>
      <p className="text-xs tracking-wider">
        {title}:<span className="font-semibold ml-1 italic">{value}</span>
      </p>
    </div>
  );
}

export default Bar;
