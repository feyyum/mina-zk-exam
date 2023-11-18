function MyExams() {
  return (
    <div className="container mx-auto">
      <div className="my-12">
        <h1 className="text-gray-800 font-bold text-4xl mb-2">
          Avaliable Exams
        </h1>
        {/* Mapleyeceğiz */}
        <div className="flex py-4 border-b-[1px] border-dashed space-between items-center">
          <div className="flex flex-1 gap-4 items-center">
            <h3 className="text-gray-800 font-bold text-lg">Exam Name</h3>
            <p className="text-gray-800 font-light text-md">
              1 Hour 45 Minutes
            </p>
          </div>
          <div
            onClick={() => {}}
            className="bg-gradient-to-r from-blue-600 to-purple-700 px-4 py-2 rounded-full cursor-pointer inline-block"
          >
            <h3 className="text-white text-md font-bold">Take Exam</h3>
          </div>
        </div>
      </div>
      <div className="my-12">
        <h1 className="text-gray-800 font-bold text-4xl mb-2">Exam History</h1>
        {/* Mapleyeceğiz */}
        <div className="flex py-4 border-b-[1px] border-dashed space-between items-center">
          <div className="flex flex-1 gap-4 items-center">
            <h3 className="text-gray-800 font-bold text-lg">Exam Name</h3>
            <p className="text-gray-800 font-light text-md">
              1 Hour 45 Minutes
            </p>
          </div>
          <div
            onClick={() => {}}
            className="bg-gradient-to-r from-gray-400 to-gray-300 px-4 py-2 rounded-full cursor-pointer inline-block"
          >
            <h3 className="text-white text-md font-bold">Reveal Exam</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyExams;
