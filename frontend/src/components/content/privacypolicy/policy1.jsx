import React, { useEffect, useState, useRef } from "react";
import Mammoth from "mammoth";
import { ArrowDown, ArrowUp } from "lucide-react"; // using lucide-react icons (optional)

const PrivacyPolicy = () => {
  const [policyContent, setPolicyContent] = useState("");
  const contentRef = useRef(null);

  useEffect(() => {
    fetch("/privacy-policy.docx")
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onload = async (event) => {
          const { value } = await Mammoth.convertToHtml({
            arrayBuffer: event.target.result,
          });
          setPolicyContent(value);
        };
        reader.readAsArrayBuffer(blob);
      })
      .catch((error) =>
        console.error("Error loading the privacy policy:", error)
      );
  }, []);

  const scrollUp = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ top: -200, behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ top: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen pt-20 flex justify-center items-center bg-gradient-to-br from-purple-950 via-blue-950 to-indigo-950">
      {/* Glowing Container */}
      <div className="max-w-4xl w-full mx-4 p-8 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30 backdrop-blur-lg rounded-3xl shadow-2xl relative overflow-hidden mt-10">
        {/* Animated Border Gradient */}
        <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-400 animate-gradient-rotate">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-blue-950 to-indigo-950 rounded-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center p-2 bg-gradient-to-r from-purple-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent mb-8">
            Infinoid Technologies Privacy Policy
          </h1>

          {/* Content Container with Custom Scroll */}
          <div
            ref={contentRef}
            className="text-gray-200 text-lg leading-relaxed max-h-[70vh] overflow-y-auto custom-scroll"
          >
            <div
              className="prose prose-invert prose-lg max-w-none p-6"
              dangerouslySetInnerHTML={{ __html: policyContent }}
              style={{
                "--tw-prose-headings": "#e0e7ff",
                "--tw-prose-links": "#a5b4fc",
                "--tw-prose-bold": "#ffffff",
              }}
            />
          </div>

          {/* Scroll Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollUp}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition"
            >
              <ArrowUp className="inline-block w-5 h-5" />
            </button>
            <button
              onClick={scrollDown}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-md transition"
            >
              <ArrowDown className="inline-block w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
