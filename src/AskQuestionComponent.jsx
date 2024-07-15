// AskQuestionComponent.js

import React, { useState } from 'react';
import axios from 'axios';

const AskQuestionComponent = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/ask-question', {
        question
      });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error('Error asking question:', error);
    }
  };

  return (
    <div>
      <h2>Ask Question</h2>
      <textarea value={question} onChange={(e) => setQuestion(e.target.value)} />
      <button onClick={handleAskQuestion}>Ask</button>
      {answer && <p>Answer: {answer}</p>}
    </div>
  );
};

export default AskQuestionComponent;
