import Link from "next/link";
import TextInput from "./TextInput";
import PredictionOutput from "./PredictionOutput";

const TextSummarizer = () => {
  return (
    <div className="mb-60 card">
      <div className="card-header">Text Summarizer</div>

      <div className="card-body">
        <div className="card-body-left">
          <TextInput />
          <div className="card-body-left-footing regular-14">
            <Link href="/" className="bg-violet-200 p-1.5 rounded">
              Summarize
            </Link>
          </div>
        </div>
        <div className="card-body-right">
          <div className="card-body-right-output">
            <PredictionOutput />
          </div>
          <div className="card-body-right-footing regular-14">
            sentences and words
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSummarizer;
