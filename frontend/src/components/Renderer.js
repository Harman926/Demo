import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Renderer = (props) => {
  const { formId } = props.match.params; // React Router v5
  const [form, setForm] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/forms/${formId}`);
        setForm(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchForm();
  }, [formId]);

  const handleChange = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/responses", {
        formId,
        answers,
      });
      alert("Responses submitted!");
    } catch (err) {
      console.log(err);
      alert("Error submitting responses");
    }
  };

  if (!form) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-5">{form.title}</h1>

      {form.questions.map((q) => (
        <div key={q._id} className="mb-4 p-3 border rounded bg-gray-50">
          <p className="font-semibold mb-2">{q.text}</p>

          {q.type === "mcq" &&
            q.options.map((opt) => (
              <label key={opt} className="block">
                <input
                  type="radio"
                  name={`q${q._id}`}
                  value={opt}
                  onChange={(e) => handleChange(q._id, e.target.value)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}

          {q.type === "cloze" && (
            <input
              type="text"
              value={answers[q._id] || ""}
              onChange={(e) => handleChange(q._id, e.target.value)}
              className="w-full p-2 border rounded"
            />
          )}

          {q.type === "categorized" && (
            <input
              type="text"
              placeholder="Drag/Drop answer"
              value={answers[q._id] || ""}
              onChange={(e) => handleChange(q._id, e.target.value)}
              className="w-full p-2 border rounded"
            />
          )}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default Renderer;
