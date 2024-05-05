import React, { useState, useEffect } from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

const Home = () => {
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  const [countryCode, setCountryCode] = useState("");

  const handleRegionClick = (e, countryCode) => {
    setCountryCode(countryCode); // Tıklanan ülkenin kodunu state'e kaydediyoruz
    window.location.href = `/country/${countryCode}`;
  };

  return (
    <div
      style={{
        width: `${screenWidth}px`,
        height: `${screenHeight}px`,
        backgroundColor: "#282c34",
      }}
    >
      <h3 className="text-white text-center pt-2">Select the Country You Want to See Covid-19 Data</h3>
      <VectorMap
        map={worldMill}
        backgroundColor="#282c34"
        onRegionClick={handleRegionClick}
      />
    </div>
  );
};

export default Home;
