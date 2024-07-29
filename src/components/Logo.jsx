import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-0.5">
      <Link
        href="/"
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-black via-gray-700 to-gray-900 text-white rounded-full text-2xl font-bold transition-transform transform hover:scale-110 shadow-lg"
      >
        AS
      </Link>
    </div>
  );
};

export default Logo;



{
  /* <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Lama</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link> */
}
