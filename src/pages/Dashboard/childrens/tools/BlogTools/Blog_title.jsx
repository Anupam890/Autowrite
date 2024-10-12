import { Editor } from "@toast-ui/editor";
import { useRef, useEffect, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { FaCopy } from "react-icons/fa";
import { MdDownloadDone } from "react-icons/md";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { saveAs } from "file-saver";

const BlogTitle = () => {
  const [clipboard, setClipboard] = useState(false);
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("English");
  const editorInstance = useRef(null);
  const [generatedContent, setGeneratedContent] = useState("");

  useEffect(() => {
    editorInstance.current = new Editor({
      el: editorRef.current,
      height: "800px",
      previewStyle: "vertical",
      initialEditType: "markdown",
      hideModeSwitch: true,
      toolbarItems: [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task'],
        ['table', 'link', 'image'],
        ['code', 'codeblock']
      ],
    });
    

    return () => {
      editorInstance.current.destroy();
    };
  }, []);

  const copyToClipboard = () => {
    const markdownText = editorInstance.current.getMarkdown();
    navigator.clipboard.writeText(markdownText);
    setClipboard(true);
    setTimeout(() => {
      setClipboard(false);
    }, 2000);
  };

  const simulateTyping = (text) => {
    let index = 0;
    const typingSpeed = 1;

    const typeCharacter = () => {
      if (index < text.length) {
        editorInstance.current.insertText(text.charAt(index));
        index++;
        setTimeout(typeCharacter, typingSpeed);
      }
    };

    typeCharacter();
  };

  const handleData = async () => {
    const response = await fetch('http://localhost:3000/api/ai/generate-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: `${title} in ${language}` }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.generatedText);
      setGeneratedContent(data.generatedText);
      simulateTyping(data.generatedText);
    } else {
      console.error("Error generating content:", response.statusText);
    }
  };

  const downloadFile = () => {
    const markdownText = editorInstance.current.getMarkdown();
    const blob = new Blob([markdownText], { type: "text/markdown" });
    saveAs(blob, "blog-title.txt"); 
  };

  return (
    <div className="h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col md:flex-row">
        <div className="form-bar w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 mb-4 md:mr-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            📝 Blog Generator
          </h2>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group mb-4">
              <label htmlFor="title" className="block mb-2 text-gray-600">
                Title 🌟
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="w-full p-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                placeholder="Enter your blog title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="description" className="block mb-2 text-gray-600">
                Language 🌐
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="p-5 border-1 border-[#6041FF]"
              >
                <option value="English">🇬🇧 English</option>
                <option value="Hindi">🇮🇳 Hindi</option>
              </select>
            </div>
            <button
              onClick={handleData}
              className="bg-[#6041FF] text-white p-3 w-full rounded-md shadow-lg hover:bg-blue-600 transition-all duration-300"
            >
              <FaWandMagicSparkles className="inline-block mr-2" size={20} />
              Generate
            </button>
          </form>
        </div>

        <div className="content w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6">
          <span className="flex justify-between mb-5">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Editor Section ✍️
            </h2>
            <div className="right-tools flex space-x-2">
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-gray-200 rounded"
                aria-label="Copy to clipboard"
              >
                {clipboard ? (
                  <MdDownloadDone className="text-green-500" />
                ) : (
                  <FaCopy className="text-gray-700" />
                )}
              </button>
              <button
                onClick={downloadFile} // Call the download function
                className="inline-flex items-center px-3 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#6041FF] hover:bg-[#725dd8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                aria-label="Download"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 mr-2 -ml-1"
                >
                  <path
                    d="M12 4v12m8-8l-8 8-8-8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Download
              </button>
            </div>
          </span>

          <div
            ref={editorRef}
            className="h-full border-2 border-gray-300 rounded-md shadow-sm"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitle;
