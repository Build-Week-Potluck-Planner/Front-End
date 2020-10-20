import { useState } from "react";

export const Input = (initalState) => {
  const [state, setState] = useState(initalState);

  const handleChange = (updatedValue) => {
    setState(updatedValue);
  };

  return { state, setState, handleChange };
};
