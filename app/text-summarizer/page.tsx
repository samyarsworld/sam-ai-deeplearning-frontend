import TextSummarizerTool from "./TextSummarizerTool";
import { input1, input2, output1, output2 } from "./utils.js";

const TextSummarizer = () => {
  return (
    <div>
      <TextSummarizerTool />
      <div className="mb-[50px] w-2/4 p-2 text-center min-w-[500px] ml-auto mr-auto rounded-[16px] boxShadow-1">
        <h1>
          If you don't know where to start, below are some working examples
        </h1>
      </div>

      <div className="mb-[40px] w-2/4 h-[400px] min-w-[700px] rounded-[16px] boxShadow-1 flex bg-[#ffe3e3]">
        <div className="w-full h-full border-r border-1 p-2 f-col">
          <div className="mr-auto ml-auto mb-3 text-[18px] font-bold">
            Input
          </div>
          <textarea
            readOnly
            className="w-full h-full p-[0.5rem] resize-none outline-none bg-[#ffe3e3]"
            value={input1}
          />
        </div>

        <div className="w-full h-full p-2 f-col">
          <div className="mr-auto ml-auto mb-3 font-bold text-[18px]">
            Summary
          </div>

          <textarea
            readOnly
            className="w-full h-full p-[0.5rem] resize-none outline-none bg-[#ffe3e3] "
            value={output1}
          />
        </div>
      </div>

      <div className="mb-[40px] w-2/4 h-[400px] min-w-[700px] rounded-[16px] boxShadow-1 flex bg-[#e7e3f8]">
        <div className="w-full h-full border-r border-1 p-2 f-col">
          <div className="mr-auto ml-auto mb-3 font-bold text-[18px]">
            Input
          </div>

          <textarea
            readOnly
            className="w-full h-full p-[0.5rem] resize-none outline-none bg-[#e7e3f8]"
            value={input2}
          />
        </div>

        <div className="w-full h-full p-2 f-col">
          <div className="mr-auto ml-auto mb-3 font-bold text-[18px]">
            Summary
          </div>

          <textarea
            readOnly
            className="w-full h-full p-[0.5rem] resize-none outline-none bg-[#e7e3f8]"
            value={output2}
          />
        </div>
      </div>
    </div>
  );
};

export default TextSummarizer;
