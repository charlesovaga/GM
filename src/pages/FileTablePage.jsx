import useCourseStore from "./courseStore";

function FileTablePage({ category, onUploadMore }) {
  const uploadedFiles = useCourseStore((state) => state.uploadedFiles);
  const deleteUploadedFile = useCourseStore((state) => state.deleteUploadedFile);
  const files = uploadedFiles[category] || [];

  // If no files, don't render anything (let parent control modal)
  if (files.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded h-[550px] flex flex-col">
      <h2 className="text-xl font-semibold mb-4">{category} Files</h2>
      <div className="flex-1 overflow-y-auto pr-2">
        <table className="w-full text-left border">
          <thead className="bg-gray-100 text-gray-700 text-sm sticky top-0 z-10">
            <tr>
              <th className="py-2 px-4 border-r">Filename</th>
              <th className="py-2 px-4 border-r">Filesize</th>
              <th className="py-2 px-4 border-r">Upload Date</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {files
              .filter((f) => f.name && f.size && f.date)
              .map((file, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4 border-r">{file.name}</td>
                  <td className="py-2 px-4 border-r">{file.size}</td>
                  <td className="py-2 px-4 border-r">{file.date}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => deleteUploadedFile(category, index)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <button
          onClick={onUploadMore}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          Upload more files
        </button>
      </div>
    </div>
  );
}

export default FileTablePage;
