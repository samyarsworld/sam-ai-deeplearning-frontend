"use client";
import { useState, ChangeEvent } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const TextSummarizer = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [loading, setLoading] = useState(false);

  function typeText(text: string): void {
    let index: number = 0;

    let interval = setInterval(() => {
      if (index < text.length) {
        setOutputText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleSummarize = async () => {
    setLoading(true);
    setOutputText("");

    try {
      const response = await fetch("http://127.0.0.1:8000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: inputText,
        }),
      });

      console.log("hi");

      if (response.ok) {
        const data = await response.json();

        setTimeout(() => {
          setLoading(false);
          typeText(data.meh);
        }, 2000);
        // setOutputText(data.meh);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-[200px] w-2/4 h-[400px] min-w-[700px] f-col rounded-[16px] boxShadow-1">
      <div className="p-[0.5rem] w-full flex border-b border-1">
        Text Summarizer
      </div>

      <div className="w-full h-full flex">
        <div className="border-r border-1 w-full f-col">
          <textarea
            className="w-full h-full p-[0.5rem] resize-none  outline-none"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter your text and press 'Summarize'"
          />
          <div className="border-t p-[0.5rem] h-[50px] border-1 regular-14">
            <button
              onClick={handleSummarize}
              className="bg-violet-200 p-1 rounded"
            >
              Summarize
            </button>
          </div>
        </div>
        <div className="f-col w-full">
          <div className="w-full h-full p-[0.5rem]">
            <div className="h-full">
              {loading ? (
                <div className="flexCenter h-full">
                  <PacmanLoader color={"#00A35C"} size={25} />
                </div>
              ) : (
                <textarea
                  readOnly
                  className="w-full h-full p-[0.1rem] resize-none outline-none ai-font"
                  value={outputText}
                  placeholder="Summary will appear here.."
                  id="output"
                >
                  {outputText}
                </textarea>
              )}
            </div>
          </div>
          <div className="border-t p-[0.5rem] h-[50px] border-1 regular-14">
            sentences and words
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSummarizer;
