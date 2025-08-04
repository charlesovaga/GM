// import { useState } from "react";
// import useCourseStore from "./courseStore";
// import Modal from "../components/Modal"

// function FileTablePage({ category, onUploadMore }) {
//   const uploadedFiles = useCourseStore((state) => state.uploadedFiles);
//   const deleteUploadedFile = useCourseStore((state) => state.deleteUploadedFile);
//   const files = uploadedFiles[category] || [];
//   const isGrading = category === "Grading Tasks";


//   const [generating, setGenerating] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   if (files.length === 0) return null;

//   const handleGenerateReport = () => {
//     setGenerating(true);
//     setTimeout(() => {
//       setGenerating(false);
//       setShowModal(true);
//     }, 3000);
//   };

//   return (
//     <div className="bg-white p-6 rounded h-[550px] flex flex-col">
//       <h2 className="text-xl font-semibold mb-4">{category} Files</h2>
  
//       {!isGrading && (
//         <div className="flex-1 overflow-y-auto pr-2">
//           <table className="w-full text-left border">
//             <thead className="bg-gray-100 text-gray-700 text-sm sticky top-0 z-10">
//               <tr>
//                 <th className="py-2 px-4 border-r">Filename</th>
//                 <th className="py-2 px-4 border-r">Filesize</th>
//                 <th className="py-2 px-4 border-r">Upload Date</th>
//                 <th className="py-2 px-4">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {files
//                 .filter((f) => f.name && f.size && f.date)
//                 .map((file, index) => (
//                   <tr key={index} className="border-t">
//                     <td className="py-2 px-4 border-r">{file.name}</td>
//                     <td className="py-2 px-4 border-r">{file.size}</td>
//                     <td className="py-2 px-4 border-r">{file.date}</td>
//                     <td className="py-2 px-4">
//                       <button
//                         onClick={() => deleteUploadedFile(category, index)}
//                         className="text-red-500 text-sm hover:underline"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       )}
  
//       <div className={`mt-4 ${isGrading ? "flex justify-between" : "flex justify-between items-center"}`}>
//         <button
//           onClick={onUploadMore}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
//         >
//           {isGrading ? "+ Add File" : "Upload more files"}
//         </button>
  
//         {isGrading && (
//           <div className="flex flex-col items-end text-right">
//             <button
//               onClick={handleGenerateReport}
//               disabled={generating}
//               className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 text-sm"
//             >
//               {generating ? "Generating..." : "Generate Report"}
//             </button>
//             {generating && (
//               <div className="text-gray-500 text-sm mt-1">
//                 <p>Report generating...</p>
//                 <p>This may take a few minutes.</p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
  
//       <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
//     </div>
//   );
  
// }

// export default FileTablePage;

// Might delete
import { useState } from "react";
import useCourseStore from "./courseStore";
import Modal from "../components/Modal";

function FileTablePage({ category, onUploadMore, gradingClicked, activeFileName }) {

  const uploadedFiles = useCourseStore((state) => state.uploadedFiles);
  const deleteUploadedFile = useCourseStore((state) => state.deleteUploadedFile);
  const files = uploadedFiles[category] || [];
  const isGrading = category === "Grading Tasks";
  const [generating, setGenerating] = useState(false);


  const [showModal, setShowModal] = useState(false);

  const handleGenerateReport = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setShowModal(true);
    }, 3000);
  };
  

  if (files.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded h-[550px] flex flex-col">
  <h2 className="text-xl font-semibold mb-4">
  {gradingClicked && activeFileName
    ? `Task: ${activeFileName}`
    : `${category} Files`}
</h2>



      {/* Show table only if NOT Grading Tasks */}
      {!isGrading && (
       <div className="flex-1 overflow-y-auto pr-2">
       <table className="w-full table-auto text-sm text-left">
         <thead className="bg-gray-100 text-gray-600 uppercase tracking-wider text-xs sticky top-0 z-10">
           <tr>
             <th className="px-4 py-3">File Name</th>
             <th className="px-4 py-3">Size</th>
             <th className="px-4 py-3">Date</th>
             <th className="px-4 py-3">Actions</th>
           </tr>
         </thead>
         <tbody className="divide-y divide-gray-200">
           {files
             .filter((f) => f.name && f.size && f.date)
             .map((file, index) => (
               <tr
                 key={index}
                 className="hover:bg-gray-50 transition-all duration-150"
               >
                 <td className="px-4 py-3 font-medium text-gray-600 truncate max-w-[250px]">
                   {file.name}
                 </td>
                 <td className="px-4 py-3 text-gray-500">{file.size}</td>
                 <td className="px-4 py-3 text-gray-500">{file.date}</td>
                 <td className="px-4 py-3">
                   <button
                     onClick={() => deleteUploadedFile(category, index)}
                     className="text-red-500 hover:underline hover:text-red-600 text-xs"
                   >
                     Delete
                   </button>
                 </td>
               </tr>
             ))}
         </tbody>
       </table>
     </div>
     
      )}

      {/* Add File Button (centered) */}
      <div className="mt-10 flex justify-center">
      {isGrading && gradingClicked ? (
  <div className="flex flex-col items-center text-center">
    <button
      onClick={handleGenerateReport}
      disabled={generating}
      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 text-md"
    >
      {generating ? "Generating..." : "Generate Report"}
    </button>

    {generating && (
      <div className="text-gray-500 text-md mt-4">
        <p>Report generating...</p>
        <p>This may take a few minutes.</p>
      </div>
    )}
  </div>
) : (
  <button
    onClick={onUploadMore}
    className="bg-gray-300 text-gray-600 px-4 py-2 rounded hover:cursor-pointer text-sm"
  >
    Upload more files
  </button>
)}

</div>


      <Modal isOpen={showModal} onClose={() => setShowModal(false)}  />
    </div>
  );
}

export default FileTablePage;
