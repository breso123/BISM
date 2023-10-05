/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function ButtonMain({ children, type, onClick, additionalClass, btType, to }) {
  const styles = {
    classic: `col-span-1 tracking-wide text-indigo-200 rounded-3xl transition-all ease-out duration-300 shadow-buttons ${additionalClass}`,
    noBorder: `hover:italic ${additionalClass}`,
  };

  return (
    <button className={styles[btType]} onClick={onClick} type={type}>
      <Link className="h-full w-full" to={to}>
        {children}
      </Link>
    </button>
  );
}

export default ButtonMain;
