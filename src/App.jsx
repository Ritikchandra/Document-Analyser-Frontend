// App.js

import React from 'react';
import UploadDocumentComponent from './UploadDocumentComponent';
import AskQuestionComponent from './AskQuestionComponent';

const App = () => {
  return (
    <div className="App">
      <UploadDocumentComponent />
      <AskQuestionComponent />
    </div>
  );
};

export default App;
