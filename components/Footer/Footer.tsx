import React from "react";

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <div className="flex flex-row justify-center items-center py-3 border-t-2  ">
      <div>
        <p className="text-gray-500 text-sm">
          {" "}
          © {getYear} copyright Ajardiah.dev
        </p>
      </div>
    </div>
  );
};

export default Footer;
