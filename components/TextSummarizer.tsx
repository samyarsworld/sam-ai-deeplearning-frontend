"use client";

import Image from "next/image";
import React, { useState, ChangeEvent } from "react";

const TextSummarizer = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="mb-60 card">
      <div className="card-header">header</div>

      <div className="card-body">
        <div className="card-body-left">
          <textarea
            className="card-body-left-textarea"
            value={inputText}
            onChange={handleChange}
            placeholder="Enter or paste your text and press 'Summarize'"
          />
          <div className="card-body-left-footing">Summarize</div>
        </div>
        <div className="card-body-right">
          <div className="card-body-right-output">top</div>
          <div className="card-body-right-footing">sentences and words</div>
        </div>
      </div>
    </div>
  );
};

export default TextSummarizer;
