"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

export default function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file first.");
    alert(`File "${file.name}" uploaded successfully!`);
  };

  return (
    <div className="upload-page">
      <div className="upload-container">
        <div className="flex flex-col items-center mb-6">
          <Upload className="upload-icon" />
          <h2 className="upload-title">Upload Your Document</h2>
          <p className="upload-subtitle">
            Choose a file to convert — secure, fast, and simple.
          </p>
        </div>

        <form onSubmit={handleUpload} className="upload-form">
          <label htmlFor="file-upload" className="upload-label">
            {file ? (
              <span className="upload-file-name">📄 {file.name}</span>
            ) : (
              <span>
                Drag & drop your file here or{" "}
                <span className="upload-browse">browse</span>
              </span>
            )}
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          <button type="submit" className="upload-btn">
            Upload File
          </button>
        </form>
      </div>
    </div>
  );
}
