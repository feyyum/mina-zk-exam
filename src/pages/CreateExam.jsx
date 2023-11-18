import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "update_title": {
      return {
        ...state,
        title: action.title,
      };
    }
    case "update_question": {
      let temp = [...state.data];
      temp[action.index].question = action.question;
      return {
        ...state,
        data: temp,
      };
    }
    case "update_answer": {
      let temp = [...state.data];
      temp[action.index].options[action.a_index] = action.answer;
      return {
        ...state,
        data: temp,
      };
    }
    case "update_result": {
      let temp = [...state.data];
      temp[action.index].answer = action.answer;
      return {
        ...state,
        data: temp,
      };
    }
    case "add_question": {
      let temp = [...state.data];
      temp.push({
        index:
          state.data?.length > 0
            ? state.data[state.data.length - 1].index + 1
            : 0,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      });
      return {
        ...state,
        data: temp,
      };
    }
    case "remove_question": {
      let temp = [...state.data];
      temp.splice(action.index, 1);
      return {
        ...state,
        data: temp,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
};

const initialState = {
  title: "",
  data: [
    {
      index: 0,
      question: "",
      options: ["", "", "", ""],
      answer: "",
    },
  ],
};

function CreateExam() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div className="container mx-auto">
      <div className="my-8">
        <h3 className="text-gray-800 font-bold text-2xl mb-2">Create Exam</h3>
        <p className="text-gray-800 font-light text-lg">
          Creating a successful examination involves a systematic appro ach to
          ensure fair and comprehensive evaluation. Begin by clearly defining
          the examinations objectives, outlining the specific knowledge or
          skills to be assessed. Choose an appropriate format—whether
          multiple-choice, essay-based, or a combination—that aligns with these
          objectives and the nature of the subject matter. Provide clear
          instructions to guide students through the examination, specifying
          answer length, format, and any requirements. Maintain a balanced
          content that represents the material taught, avoiding disproportionate
          focus on specific topics. Review and revise the examination for
          clarity, accuracy, and fairness, considering feedback from colleagues
          or pilot testing with a small group of students. Set an appropriate
          time limit, include a variety of question types to assess different
          cognitive skills, and communicate expectations clearly to students.
          Finally, implement measures to maintain the integrity of the
          examination, ensuring a reliable and meaningful assessment of student
          understanding.
        </p>
      </div>
      <div className="mb-8">
        <input
          className="text-gray-800 placeholder-gray-300 font-extrabold text-6xl outline-none border-none w-full"
          type="text"
          name="Title"
          id="title"
          placeholder="Exam Title"
          value={state.title ? state.title : ""}
          onChange={(e) =>
            dispatch({ type: "update_title", title: e.target.value })
          }
        />
        <div className="my-3">
          {state.data?.map((item, index) => {
            return (
              <div key={index} className="mb-4 flex">
                <div className="flex-1">
                  <input
                    className="text-gray-800 placeholder-gray-300 font-extrabold text-3xl outline-none border-none w-full mb-2"
                    type="text"
                    name="q_title"
                    id="q_title"
                    placeholder="Question Title"
                    value={item.question ? item.question : ""}
                    onChange={(e) =>
                      dispatch({
                        type: "update_question",
                        index: index,
                        question: e.target.value,
                      })
                    }
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="q1"
                      name="q1"
                      value={item.options[0] ? item.options[0] : ""}
                      checked={
                        item.answer === item.options[0] && item.answer !== ""
                          ? true
                          : false
                      }
                      onChange={(e) =>
                        dispatch({
                          type: "update_result",
                          index: index,
                          answer: e.target.value,
                        })
                      }
                    />
                    <input
                      className="text-gray-800 placeholder-gray-300 font-extrabold text-xl outline-none border-none w-full"
                      type="text"
                      name="q_title"
                      id="q_title"
                      placeholder="Answer 1"
                      value={item.options[0] ? item.options[0] : ""}
                      onChange={(e) =>
                        dispatch({
                          type: "update_answer",
                          index: index,
                          a_index: 0,
                          answer: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="q2"
                      name="q2"
                      value={item.options[1] ? item.options[1] : ""}
                      checked={
                        item.answer === item.options[1] && item.answer !== ""
                          ? true
                          : false
                      }
                      onChange={(e) =>
                        dispatch({
                          type: "update_result",
                          index: index,
                          answer: e.target.value,
                        })
                      }
                    />
                    <input
                      className="text-gray-800 placeholder-gray-300 font-extrabold text-xl outline-none border-none w-full"
                      type="text"
                      name="q_title"
                      id="q_title"
                      placeholder="Answer 2"
                      value={item.options[1] ? item.options[1] : ""}
                      onChange={(e) =>
                        dispatch({
                          type: "update_answer",
                          index: index,
                          a_index: 1,
                          answer: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="q3"
                      name="q3"
                      value={item.options[2] ? item.options[2] : ""}
                      checked={
                        item.answer === item.options[2] && item.answer !== ""
                          ? true
                          : false
                      }
                      onChange={(e) =>
                        dispatch({
                          type: "update_result",
                          index: index,
                          answer: e.target.value,
                        })
                      }
                    />
                    <input
                      className="text-gray-800 placeholder-gray-300 font-extrabold text-xl outline-none border-none w-full"
                      type="text"
                      name="q_title"
                      id="q_title"
                      placeholder="Answer 3"
                      value={item.options[2] ? item.options[2] : ""}
                      onChange={(e) =>
                        dispatch({
                          type: "update_answer",
                          index: index,
                          a_index: 2,
                          answer: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="q4"
                      name="q4"
                      value={item.options[3] ? item.options[3] : ""}
                      checked={
                        item.answer === item.options[3] && item.answer !== ""
                          ? true
                          : false
                      }
                      onChange={(e) =>
                        dispatch({
                          type: "update_result",
                          index: index,
                          answer: e.target.value,
                        })
                      }
                    />
                    <input
                      className="text-gray-800 placeholder-gray-300 font-extrabold text-xl outline-none border-none w-full"
                      type="text"
                      name="q_title"
                      id="q_title"
                      placeholder="Answer 4"
                      value={item.options[3] ? item.options[3] : ""}
                      onChange={(e) =>
                        dispatch({
                          type: "update_answer",
                          index: index,
                          a_index: 3,
                          answer: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <h3
                  disabled={state.data.length === 1 ? true : false}
                  onClick={() =>
                    dispatch({
                      type: "remove_question",
                      index: index,
                    })
                  }
                  className="text-red-500 font-extrabold text-xl outline-none border-none cursor-pointer"
                >
                  Remove
                </h3>
              </div>
            );
          })}
        </div>
        <h3
          onClick={() => {
            dispatch({
              type: "add_question",
            });
          }}
          className={`bg-gradient-to-r from-blue-600 to-purple-700 inline-block text-transparent bg-clip-text font-bold text-xl cursor-pointer ${
            state.data?.length > 9 && "hidden"
          }`}
        >
          + Add Question
        </h3>
        <div className="my-12">
          <div
            onClick={() => {}}
            className="bg-gradient-to-r from-blue-600 to-purple-700 px-4 py-2 rounded-full cursor-pointer inline-block"
          >
            <h3 className="text-white text-md font-bold">Publish Exam</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateExam;
