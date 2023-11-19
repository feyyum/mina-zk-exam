import { useParams } from "react-router-dom";

import Back from "../assets/back.svg";

function Exam() {
  const { examId } = useParams();
  console.log(examId);

  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <div className="flex flex-between items-center py-6">
        <div className="flex-1">
          <img
            src={Back}
            alt="Back Button"
            className="cursor-pointer"
            onClick={() => {}}
          />
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 inline-block text-transparent bg-clip-text font-bold text-xl cursor-pointer">
          Show Answer Hash
        </div>
      </div>
      <div className="container mx-auto min-h-[420px] flex-1 flex flex-col justify-center items-center">
        <h3 className="mb-8 bg-gradient-to-r from-blue-600 to-purple-700 inline-block text-transparent bg-clip-text font-extrabold text-5xl leading-[64px]">
          What is your favourite color?
        </h3>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <div className="group p-12 border-[1px] flex-wrap w-96 rounded-md cursor-pointer hover:bg-blue-600 transition-all duration-500 ease-in-out">
              <h3 className="text-gray-800 font-bold text-lg group-hover:text-white transition-all duration-500 ease-in-out">
                Purple
              </h3>
            </div>
            <div className="group p-12 border-[1px] flex-wrap w-96 rounded-md cursor-pointer hover:bg-blue-600 transition-all duration-500 ease-in-out">
              <h3 className="text-gray-800 font-bold text-lg group-hover:text-white transition-all duration-500 ease-in-out">
                Red
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="group p-12 border-[1px] flex-wrap w-96 rounded-md cursor-pointer hover:bg-purple-700 transition-all duration-500 ease-in-out">
              <h3 className="text-gray-800 font-bold text-lg group-hover:text-white transition-all duration-500 ease-in-out">
                Orange
              </h3>
            </div>
            <div className="group p-12 border-[1px] flex-wrap w-96 rounded-md cursor-pointer hover:bg-purple-700 transition-all duration-500 ease-in-out">
              <h3 className="text-gray-800 font-bold text-lg group-hover:text-white transition-all duration-500 ease-in-out">
                Blue
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-between items-center py-6">
        <div
          onClick={() => {}}
          className="bg-gradient-to-r from-blue-600 to-purple-700 px-4 py-2 rounded-full cursor-pointer inline-block"
        >
          <h3 className="text-white text-md font-bold">Previous Question</h3>
        </div>
        <h3 className="flex flex-1 justify-center text-gray-800 font-bold text-lg">
          1/10
        </h3>
        <div
          onClick={() => {}}
          className="bg-gradient-to-r from-blue-600 to-purple-700 px-4 py-2 rounded-full cursor-pointer inline-block"
        >
          <h3 className="text-white text-md font-bold">Next Question</h3>
        </div>
      </div>
    </div>
  );
}

export default Exam;
