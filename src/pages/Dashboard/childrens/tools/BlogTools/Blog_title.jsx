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
  //editor function
  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = new Editor({
        el: editorRef.current,
        height: "800px",
        previewStyle: "vertical",
        initialEditType: "WYSIWYG",
        hideModeSwitch: true,
      });

      return () => {
        editorInstance.destroy();
      };
    }
  }, []);
  //    clipboard function
  const copyToClipboard = () => {
    const markdownText = editorRef.current.getInstance().getMarkdown();
    navigator.clipboard.writeText(markdownText);
    setClipboard(true);
    setTimeout(() => {
      setClipboard(false);
    }, 2000);
  };

  //   handle Data
  const HandleData = async () => {
    const response = await fetch('http://localhos')
  };

  // Download Data
  
  return (
    <div className="h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col md:flex-row">
        {/* Form Section */}
        <div className="form-bar w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 mb-4 md:mr-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            📝 Blog Title
          </h2>

          <form action="">
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
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="description" className="block mb-2 text-gray-600">
                Language 🌐
              </label>
              <select className="p-5 border-1 border-[#6041FF]">
                <option value="English">🇬🇧 English</option>
                <option value="Hindi">🇮🇳 Hindi</option>
              </select>
            </div>
            <button className="bg-[#6041FF] text-white p-3 w-full rounded-md shadow-lg hover:bg-blue-600 transition-all duration-300">
              <FaWandMagicSparkles className="inline-block mr-2" size={20} />
              Generate
            </button>
          </form>
        </div>

        {/* Editor Section */}
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
