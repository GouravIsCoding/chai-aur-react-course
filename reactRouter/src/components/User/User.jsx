import React from "react";
import { useParams } from "react-router-dom";

export function User() {
  const { id } = useParams();
  return (
    <>
      <h1 className="text-3xl bg-gray-600 text-white text-center">
        User: {id}
      </h1>
    </>
  );
}
