"use client";

import { useState, ChangeEvent } from "react";

const TextInput = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  return (
    <textarea
      className="w-full h-full p-[0.5rem] resize-none  outline-none"
      value={inputText}
      onChange={handleChange}
      placeholder="Enter your text and press 'Summarize'"
    />
  );
};

export default TextInput;
