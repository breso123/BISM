/* eslint-disable react/prop-types */

function HeaderItems({ children, cols = "9" }) {
  return (
    <div className={`grid grid-cols-${cols} mr-2 items-center`}>{children}</div>
  );
}

export default HeaderItems;
