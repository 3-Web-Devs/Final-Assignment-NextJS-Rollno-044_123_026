"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";
import { Upload } from "lucide-react";

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
    setText("");
  }

  async function handleUpload(e) {
    e.preventDefault();

    if (!file) {
      alert("Please select a file first");
      return;
    }

    setLoading(true);

    try {
      const result = await Tesseract.recognize(file, "eng");
      setText(result.data.text);
    } catch (error) {
      console.error(error);
      alert("OCR failed");
    }

    setLoading(false);
  }

  return (
    <div className="upload-page">
      <div className="upload-box">
        <Upload className="upload-icon" />

        <h2>Upload Your Document</h2>
        <p>Select an image or scanned document to extract text.</p>

        <form onSubmit={handleUpload}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Extracting..." : "Upload & Extract"}
          </button>
        </form>

        {text && (
          <div className="result-box">
            <h3>Extracted Text</h3>
            <pre>{text}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
