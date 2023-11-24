import Link from "next/link";
import TextInput from "./TextInput";
import PredictionOutput from "./PredictionOutput";

const TextSummarizer = () => {
  return (
    <div className="mb-[200px] w-2/4 h-[400px] min-w-[700px] f-col rounded-[16px] boxShadow-1">
      <div className="p-[0.5rem] w-full flex border-b border-1">
        Text Summarizer
      </div>

      <div className="w-full h-full flex">
        <div className="border-r border-1 w-full f-col">
          <TextInput />
          <div className="border-t p-[0.5rem] h-[50px] border-1 regular-14">
            <Link href="/" className="bg-violet-200 p-1.5 rounded">
              Summarize
            </Link>
          </div>
        </div>
        <div className="f-col w-full">
          <div className="w-full h-full p-[0.5rem]">
            <PredictionOutput />
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
