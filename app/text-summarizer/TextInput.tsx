"use client";

import { useState, ChangeEvent } from "react";

const TextInput = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  return (
    <textarea
      className="card-body-left-textarea fontsize"
      value={inputText}
      onChange={handleChange}
      placeholder="Enter your text and press 'Summarize'"
    />
  );
};

export default TextInput;
