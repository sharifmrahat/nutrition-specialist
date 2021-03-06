import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <footer className="bg-green-900 text-white p-10 text-md lg:text-xl font-serif mt-[400px]">
        <p>&copy; Copyright {year} | NutriFix</p>
      </footer>
    </>
  );
};

export default Footer;
