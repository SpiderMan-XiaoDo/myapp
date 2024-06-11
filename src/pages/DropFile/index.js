import React, { useState } from 'react';
import './DropFile.css';

function DropFile() {
  const [fileContent, setFileContent] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="App">
      <h1>File Reader</h1>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      <div className="file-content-container">
        <pre>{fileContent}</pre>
      </div>
    </div>
  );
}

export default DropFile;