"use client";

import React, { useState } from "react";

export default function Home() {
  const [recipientName, setRecipientName] = useState("");
  const [emailPurpose, setEmailPurpose] = useState("Meeting Request");
  const [keyPoints, setKeyPoints] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");

  const handleGenerateEmail = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL || "", {
      method: "POST",
      body: JSON.stringify({ recipientName, emailPurpose, keyPoints }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setGeneratedEmail(data.data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center font-sans">
      <div className=" w-full bg-white max-w-3xl p-8 flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-indigo-700">
            Email Template Generator
          </h1>
          <p className="text-gray-600 mt-2">
            Quickly draft professional emails based on your inputs
          </p>
        </div>
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipient Name
            </label>
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="Enter recipient's name"
              className="w-full px-4 py-2 text-gray-800 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Purpose
            </label>
            <select
              value={emailPurpose}
              onChange={(e) => setEmailPurpose(e.target.value)}
              className="w-full px-4 py-2 text-gray-800 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="Meeting Request">Meeting Request</option>
              <option value="Follow Up">Follow Up</option>
              <option value="Thank You">Thank You</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Key Points
            </label>
            <textarea
              value={keyPoints}
              onChange={(e) => setKeyPoints(e.target.value)}
              rows={4}
              placeholder="Mention key points or topics"
              className="w-full px-4 py-2 border text-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={handleGenerateEmail}
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            Generate Email
          </button>
        </form>
        {generatedEmail && (
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              Generated Email:
            </h2>
            <p className="text-gray-700 whitespace-pre-wrap">
              {generatedEmail}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
