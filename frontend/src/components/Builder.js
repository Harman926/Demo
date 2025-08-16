import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Builder = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [type, setType] = useState("categorized");
  const history = useHistory();

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { id: Date.now(), type, text: "", options: [], categories: [] },
    ]);
  };

  const handleSave = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/forms", {
        title,
        questions,
      });
      alert("Form saved!");
      history.push(`/renderer/${res.data._id}`);
    } catch (err) {
      alert("Error saving form");
      console.log(err);
    }
  };

  const updateQuestionText = (index, text) => {
    const newQs = [...questions];
    newQs[index].text = text;
    setQuestions(newQs);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-5">Form Builder</h1>

      <input
        type="text"
        placeholder="Form Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <div className="mb-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="categorized">Categorized</option>
          <option value="cloze">Cloze</option>
          <option value="mcq">MCQ (Comprehension)</option>
        </select>
        <button
          onClick={addQuestion}
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Question
        </button>
      </div>

      {questions.map((q, i) => (
  <div key={q.id} className="p-3 mb-3 border rounded bg-gray-50">
    <h2 className="font-semibold mb-2">
      {i + 1}. {q.type.toUpperCase()}
    </h2>

    {/* Question text */}
    <input
      type="text"
      placeholder="Question Text"
      value={q.text}
      onChange={(e) => updateQuestionText(i, e.target.value)}
      className="w-full p-2 mb-2 border rounded"
    />

    {/* MCQ or Categorized options */}
    {(q.type === "mcq" || q.type === "categorized") && (
      <div className="mb-2">
        {q.options.map((opt, idx) => (
          <div key={idx} className="flex mb-1">
            <input
              type="text"
              placeholder={`Option ${idx + 1}`}
              value={opt}
              onChange={(e) => {
                const newQs = [...questions];
                newQs[i].options[idx] = e.target.value;
                setQuestions(newQs);
              }}
              className="flex-1 p-2 border rounded"
            />
            <button
              onClick={() => {
                const newQs = [...questions];
                newQs[i].options.splice(idx, 1);
                setQuestions(newQs);
              }}
              className="ml-2 px-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              X
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            const newQs = [...questions];
            newQs[i].options.push("");
            setQuestions(newQs);
          }}
          className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Option
        </button>
      </div>
    )}

    {/* Cloze input stays as question text only */}
  </div>
))}


      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Save Form
      </button>
    </div>
  );
};

export default Builder;
