"use client";

import { useState } from "react";
import {
  FileText,
  Clock,
  Users,
  BarChart3,
  FileUp,
  Edit,
  Trash2,
  Download,
  Upload
} from "lucide-react";

export default function Dashboard() {
  const initialFiles = [
    { id: 1, filename: "Report.pdf", convertedFormat: "Word" },
    { id: 2, filename: "Notes.docs", convertedFormat: "PDF" },
  ];

  const [documents, setDocuments] = useState(initialFiles);
  const [stats, setStats] = useState({
    totalConversions: initialFiles.length,
    completedConversions: initialFiles.length,
    pendingConversions: 0,
    storageUsage: initialFiles.length * 2,
  });

  const [conversionMessage, setConversionMessage] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const [file, setFile] = useState(null);

  const convertFile = () => {
    if (!file) return alert("Please select a file first.");
    const newFile = {
      id: Date.now(),
      filename: file.name,
      convertedFormat: "Word",
    };

    setDocuments([...documents, newFile]);
    setStats({
      totalConversions: stats.totalConversions + 1,
      completedConversions: stats.completedConversions + 1,
      pendingConversions: Math.max(stats.pendingConversions, 0),
      storageUsage: stats.storageUsage + 2,
    });

    setConversionMessage(`File "${file.name}" converted successfully!`);
    setFile(null);
    setTimeout(() => setConversionMessage(""), 3000);
  };

  const deleteDocument = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
    setStats({
      ...stats,
      totalConversions: stats.totalConversions - 1,
      completedConversions: Math.max(stats.completedConversions - 1, 0),
      storageUsage: Math.max(stats.storageUsage - 2, 0),
    });
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <FileText /> Dashboard
      </header>

      <main className="max-w-7xl mx-auto p-8 space-y-12">
        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card"><FileText /><h3>Total</h3><p>{stats.totalConversions}</p></div>
          <div className="stat-card"><BarChart3 /><h3>Completed</h3><p>{stats.completedConversions}</p></div>
          <div className="stat-card"><Clock /><h3>Pending</h3><p>{stats.pendingConversions}</p></div>
          <div className="stat-card"><Users /><h3>Storage</h3><p>{stats.storageUsage}%</p></div>
        </section>

        {/* Upload & Convert Section */}
        <section className="flex flex-col items-center gap-4">
          {conversionMessage && <div className="convert-message">{conversionMessage}</div>}

          <button className="upload-btn-dashboard" onClick={() => setShowUpload(!showUpload)}>
            <Upload /> {showUpload ? "Close Upload" : "Upload File"}
          </button>

          {showUpload && (
            <div className="upload-container">
              <label htmlFor="file-upload" className="upload-label">
                {file ? (
                  <span className="upload-file-name">📄 {file.name}</span>
                ) : (
                  <span>
                    Drag & drop file here or <span className="upload-browse">browse</span>
                  </span>
                )}
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>

              <button className="convert-btn" onClick={convertFile}>
                <FileUp /> Convert Now
              </button>
            </div>
          )}
        </section>

        {/* Documents */}
        <section className="documents-section">
          {documents.length === 0 && <p>No converted files yet.</p>}
          {documents.map((doc) => (
            <div key={doc.id} className="document-row">
              <span>{doc.filename}</span> ({doc.convertedFormat})
              <div className="document-actions">
                <Edit />
                <Trash2 onClick={() => deleteDocument(doc.id)} />
                <Download />
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
