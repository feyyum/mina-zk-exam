import "./Landing.css";

function Landing() {
  return (
    <div className="container mx-auto">
      <div className="min-h-[460px] flex justify-center flex-col">
        <h1 className="text-gray-800 font-bold text-7xl mb-2 slide-in-right">
          Verify Your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-cyan-200 inline-block text-transparent bg-clip-text">
            Exam
          </span>
          ,
        </h1>
        <h1 className="text-gray-800 font-bold text-7xl slide-in-right-second">
          Verify Your{" "}
          <span className="bg-gradient-to-r from-cyan-200 to-orange-500 inline-block text-transparent bg-clip-text">
            Future
          </span>
          !
        </h1>
      </div>
      <div className="border-l-2 border-gray-600 pl-4">
        <p className="max-w-[70vw] text-gray-800 font-light text-2xl">
          Welcome to EXAMINA where our focus is on creating fair and effective
          multiple-choice examinations. Our process starts with clearly defining
          the exam's objectives to ensure each question aligns with the
          educational goals. Through rigorous review and integrity measures, we
          ensure each exam is a reliable and accurate measure of student
          understanding.
        </p>
      </div>
    </div>
  );
}

export default Landing;
