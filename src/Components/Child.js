import React from "react";
import { useParams } from "react-router-dom";

function Child() {
  const { id } = useParams();
  return (
    <div>
      <h3>id:{id}</h3>
    </div>
  );
}

export default Child;
