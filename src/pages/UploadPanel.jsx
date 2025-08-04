// import { useState, useRef } from "react";

// function UploadPanel({ onClose, title }) {
//   const fileInputRef = useRef(null);
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleFileUpload = (file) => {
//     const newFile = {
//       name: file.name,
//       size: Math.round(file.size / 1024) + "kb",
//       date: new Date().toLocaleDateString("en-GB"),
//     };
//     setUploadedFiles((prev) => [...prev, newFile]);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) handleFileUpload(file);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const files = Array.from(e.dataTransfer.files);
//     files.forEach(handleFileUpload);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => setIsDragging(false);

//   const deleteFile = (index) => {
//     setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div
//       className="absolute top-0 left-0 w-full h-full bg-gray-100 flex flex-col items-center z-20"
//       style={{ maxWidth: 1000, marginLeft: "15%" }}
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragLeave}
//     >
//       <button
//         onClick={onClose}
//         className="self-end m-4 text-gray-500 hover:text-gray-800"
//       >
//         ✕
//       </button>

//       <div className="bg-white border rounded-lg p-6 w-full max-w-4xl shadow-md">
//         <h2 className="text-lg font-semibold mb-4">{title}</h2>

//         <div
//   className={`flex flex-col items-center justify-center p-6 mb-6 border-2 border-dashed rounded 
//     ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
// >

//           <p className="mb-2 text-gray-600">
//             Drag and drop files here, or
//             <button
//               onClick={() => fileInputRef.current.click()}
//               className="text-blue-600 underline ml-1"
//             >
//               browse
//             </button>
//           </p>
//           <input
//   ref={fileInputRef}
//   type="file"
//   multiple
//   onChange={(e) => {
//     const files = Array.from(e.target.files);
//     files.forEach(handleFileUpload);
//   }}
//   className="hidden"
// />
//         </div>

//         {uploadedFiles.length > 0 && (
//           <table className="w-full text-left border">
//             <thead className="bg-gray-100 text-gray-700 text-sm">
//               <tr>
//                 <th className="py-2 px-4 border-r">Filename</th>
//                 <th className="py-2 px-4 border-r">Filesize</th>
//                 <th className="py-2 px-4 border-r">Upload_Date</th>
//                 <th className="py-2 px-4">Action</th>
//               </tr>
//             </thead>
//             <tbody className="text-sm text-gray-700">
//               {uploadedFiles.map((file, index) => (
//                 <tr key={index} className="border-t">
//                   <td className="py-2 px-4 border-r">{file.name}</td>
//                   <td className="py-2 px-4 border-r">{file.size}</td>
//                   <td className="py-2 px-4 border-r">{file.date}</td>
//                   <td className="py-2 px-4">
//                     <button
//                       onClick={() => deleteFile(index)}
//                       className="text-red-500 hover:underline text-xs"
//                     >
//                       delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default UploadPanel;


import { useState, useRef } from "react";

function UploadPanel({ onClose, title, onFilesUploaded, category }) {
  const fileInputRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (file) => {
    if (file.type !== "application/pdf") return;
  
    const newFile = {
      name: file.name,
      size: Math.round(file.size / 1024) + "kb",
      date: new Date().toLocaleDateString("en-GB"),
    };
  
    // Save to zustand directly instead of relying on local component state
    onFilesUploaded(category, [newFile]); // ✅ send fresh file immediately
  
    setUploadedFiles((prev) => [...prev, newFile]); // Optional visual feedback
  };
  
  

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    files.filter(file => file.type === "application/pdf").forEach(handleFileUpload);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    files.filter(file => file.type === "application/pdf").forEach(handleFileUpload);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const deleteFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-gray-100 flex flex-col items-center justify-center z-20"
      style={{ maxWidth: 700, marginLeft: "20%" }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <button
        onClick={onClose}
        className="self-end m-4 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>

      <div
        className={`bg-white border ${
          isDragging ? "border-blue-400" : "border-gray-300"
        } rounded-lg p-8 flex flex-col items-center transition-colors`}
      >
        <h2 className="mb-4 font-semibold">{title}</h2>

        <button
          onClick={handleButtonClick}
          className="bg-gray-300 px-6 py-2 rounded mb-2 hover:bg-gray-400"
        >
          Upload PDF files
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          accept="application/pdf"
          className="hidden"
        />

        <span className="text-sm text-gray-600 mb-4">or</span>

        <div
          className={`text-gray-600 text-sm p-4 border-2 border-dashed rounded ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          Drag and drop PDF files here
        </div>

        {/* Table */}
    
      </div>
    </div>
  );
}

export default UploadPanel;
