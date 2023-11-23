"use client";
import Link from "next/link";

import React, { useState, ChangeEvent } from "react";

const TextSummarizer = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="mb-60 card">
      <div className="card-header">Text Summarizer</div>

      <div className="card-body">
        <div className="card-body-left">
          <textarea
            className="card-body-left-textarea fontsize"
            value={inputText}
            onChange={handleChange}
            placeholder="Enter your text and press 'Summarize'"
          />
          <div className="card-body-left-footing regular-14">
            <Link href="/" className="bg-violet-200 p-1.5 rounded">
              Summarize
            </Link>
          </div>
        </div>
        <div className="card-body-right">
          <div className="card-body-right-output"></div>
          <div className="card-body-right-footing regular-14">
            sentences and words
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSummarizer;
