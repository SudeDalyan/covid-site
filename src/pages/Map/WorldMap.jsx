import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";

function WorldMap() {
  return (
    <div style={{ margin: "auto", width: "700px", height: "600px" }}>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "700px",
          height: "600px",
        }}
        backgroundColor="#282c34"
      />
    </div>
  );
}
export default WorldMap;
