import React, { useState } from "react";
import "./App.css"; // Make sure your styles including the gradient are added here.
import { LuMail } from "react-icons/lu";
import ClickSpark from './ClickSpark';

function App() {
  const [tone, setTone] = useState("Professional");
  const [reply, setReply] = useState("");
  const [originalEmail, setOriginalEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateReply = async () => {
    setLoading(true);
    setReply("");
    setError("");

    try {
      const response = await fetch(
        "https://yielding-latashia-subham-org-d29431c6.koyeb.app/api/email/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ emailContent: originalEmail, tone: tone }),
        }
      );

      if (response.ok) {
        const data = await response.text();
        setReply(data);
      } else {
        setReply("Something went wrong. Please try again.");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setReply("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      {/* Gradient Background */}
      <div className="gradient"></div>
      <div className="gradient-2"></div>

      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="email-form">
          <div className="email-replies-header">
            <h1 className="email-replies-title">Generate Email Replies</h1>
            <p className="email-replies-subtitle">
              Create professional responses in seconds with AI assistance
            </p>
            <div className="email-details-card">
              <div className="email-details-icon">
                <LuMail size={24} color="#6C63FF" />
              </div>
              <div className="email-details-content">
                <h3 className="email-details-title">Email Details</h3>
                <p className="email-details-description">
                  Enter the email you received and select your preferred response tone
                </p>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Original Email Content</label>
            <textarea
              placeholder="Paste the email you want to reply to"
              value={originalEmail}
              onChange={(e) => setOriginalEmail(e.target.value)}
              style={{ width: "100%", minHeight: "120px" }}
            ></textarea>
          </div>

          {/* Tone Selector - Segmented Control Style */}
          <div className="form-group">
            <label className="block mb-2">Select Tone</label>
            <div className="flex justify-between gap-2">
              {["Formal", "Professional", "Friendly", "Casual"].map((toneOption) => (
                <button
                  key={toneOption}
                  type="button"
                  className={`py-2 px-4 text-sm font-medium rounded
                    ${tone === toneOption
                      ? "bg-purple-900 text-black"
                      : "bg-white text-black hover:bg-gray-100"
                    }`}
                  onClick={() => setTone(toneOption)}
                >
                  {toneOption}
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleGenerateReply} disabled={loading} id="Generate">
            {loading ? "Generating..." : "Generate Reply"}
          </button>

          <div className="response-section">
            {loading && <p>Generating reply, please wait...</p>}
            {error && <p className="error">{error}</p>}
            {reply && (
              <div className="generated-reply">
                <h3>Generated Reply</h3>
                <p>{reply}</p>
              </div>
            )}
          </div>
        </div>
      </ClickSpark>
    </div>
  );
}

export default App;
