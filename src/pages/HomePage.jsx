// // // import { useState } from "react";

// // // export default function TwoColumnLayout() {
// // //   const [collapsed, setCollapsed] = useState(false);
// // //   const [showCourseForm, setShowCourseForm] = useState(false);
// // //   const [title, setTitle] = useState("");
// // //   const [description, setDescription] = useState("");
// // //   const [error, setError] = useState("");

// // //   const handleSave = () => {
// // //     if (!title.trim()) {
// // //       setError("Course title is required.");
// // //       return;
// // //     }

// // //     // Process form (e.g., send to API or state)
// // //     console.log({ title, description });

// // //     // Clear and close
// // //     setTitle("");
// // //     setDescription("");
// // //     setError("");
// // //     setShowCourseForm(false);
// // //   };

// // //   return (
// // //     <div className="flex h-screen">
// // //       {/* Left Sidebar */}
// // //       <div
// // //         className={`${
// // //           collapsed ? "w-[60px]" : "w-1/5"
// // //         } bg-white border-r p-4 flex flex-col transition-all duration-300 relative`}
// // //       >
// // //         {/* Collapse/Expand Arrow */}
// // //         <button
// // //           onClick={() => setCollapsed(!collapsed)}
// // //           className="absolute top-4 right-[-12px] bg-gray-200 hover:bg-gray-300 border rounded-full w-6 h-6 flex items-center justify-center text-sm z-10"
// // //         >
// // //           {collapsed ? "→" : "←"}
// // //         </button>

// // //         {/* Logo */}
// // //         {!collapsed && (
// // //           <div className="mb-8 p-2 font-semibold flex items-center justify-center text-gray-700">
// // //             Logo
// // //           </div>
// // //         )}

// // //         {/* Centered Button */}
// // //         <div className="flex-1 flex items-center justify-center">
// // //           {!collapsed && (
// // //             <button
// // //               onClick={() => setShowCourseForm(true)}
// // //               className="bg-gray-100 px-4 py-2 text-sm font-semibold rounded shadow"
// // //             >
// // //               Create Course
// // //             </button>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* Dashboard Area */}
// // //       <div className="flex-1 bg-white p-6 relative overflow-y-auto">
// // //         {/* Inline Modal inside Dashboard */}
// // //         {showCourseForm && (
// // //           <div
// // //             className="absolute top-0 left-3 bg-white shadow p-6 z-10"
// // //             style={{ width: "30%", height: "100vh" }}
// // //           >
// // //             <h2 className="text-lg font-semibold mt-24 px-10 mb-4">
// // //               Course Title
// // //             </h2>
// // //             <input
// // //               type="text"
// // //               placeholder="Course Title"
// // //               value={title}
// // //               onChange={(e) => setTitle(e.target.value)}
// // //               className="w-full border p-2 rounded mb-2"
// // //             />
// // //             {error && (
// // //               <p className="text-red-500 text-sm mb-2">{error}</p>
// // //             )}

// // //             <h2 className="text-sm font-medium px-10 mb-2 mt-4 text-gray-600">
// // //               Description <span className="text-xs text-gray-400">(optional)</span>
// // //             </h2>
// // //             <textarea
// // //               placeholder="Enter a short course description"
// // //               value={description}
// // //               onChange={(e) => setDescription(e.target.value)}
// // //               className="w-full border p-2 rounded mb-4 h-24 resize-none"
// // //             />

// // //             <div className="flex justify-end">
// // //               <button
// // //                 onClick={handleSave}
// // //                 className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
// // //               >
// // //                 Save
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import { useState } from "react";

// // export default function TwoColumnLayout() {
// //   const [collapsed, setCollapsed] = useState(false);
// //   const [showCourseForm, setShowCourseForm] = useState(false);
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [error, setError] = useState("");
// //   const [courses, setCourses] = useState([]); // <-- Store courses here

// //   const handleSave = () => {
// //     if (!title.trim()) {
// //       setError("Course title is required.");
// //       return;
// //     }

// //     const newCourse = { title, description };
// //     setCourses([...courses, newCourse]); // <-- Add new course to list

// //     // Reset form
// //     setTitle("");
// //     setDescription("");
// //     setError("");
// //     setShowCourseForm(false);
// //   };

// //   return (
// //     <div className="flex h-screen">
// //       {/* Left Sidebar */}
// //       <div
// //         className={`${
// //           collapsed ? "w-[60px]" : "w-1/5"
// //         } bg-white border-r p-4 flex flex-col transition-all duration-300 relative`}
// //       >
// //         {/* Collapse/Expand Arrow */}
// //         <button
// //           onClick={() => setCollapsed(!collapsed)}
// //           className="absolute top-4 right-[-12px] bg-gray-200 hover:bg-gray-300 border rounded-full w-6 h-6 flex items-center justify-center text-sm z-10"
// //         >
// //           {collapsed ? "→" : "←"}
// //         </button>

// //         {/* Logo */}
// //         {!collapsed && (
// //           <div className="mb-8 p-2 font-semibold flex items-center justify-center text-gray-700">
// //             Logo
// //           </div>
// //         )}

// //         {/* Course List */}
// //         {!collapsed && (
// //           <div className="flex-1">
// //             <div className="text-sm font-semibold text-gray-700 mb-2 px-2 flex justify-between">
// //               <span>Courses</span>
// //               {!courses.length && (
// //                 <button
// //                   onClick={() => setShowCourseForm(true)}
// //                   className="text-gray-500 text-lg font-bold leading-none"
// //                 >
// //                   +
// //                 </button>
// //               )}
// //             </div>

// //             <ul className="text-sm text-gray-800 space-y-1">
// //               {courses.map((course, idx) => (
// //                 <li
// //                   key={idx}
// //                   className="px-2 py-1 bg-gray-100 rounded text-gray-900 font-medium"
// //                 >
// //                   {course.title}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         )}
// //       </div>

// //       {/* Main Dashboard Area */}
// //       <div className="flex-1 bg-white p-6 relative overflow-y-auto">
// //         {/* Course Form Modal */}
// //         {showCourseForm && (
// //           <div
// //             className="absolute top-0 left-3 bg-white shadow p-6 z-10"
// //             style={{ width: "30%", height: "100vh" }}
// //           >
// //             <h2 className="text-lg font-semibold mt-24 px-10 mb-4">
// //               Course Title
// //             </h2>
// //             <input
// //               type="text"
// //               placeholder="Course Title"
// //               value={title}
// //               onChange={(e) => setTitle(e.target.value)}
// //               className="w-full border p-2 rounded mb-2"
// //             />
// //             {error && (
// //               <p className="text-red-500 text-sm mb-2">{error}</p>
// //             )}

// //             <h2 className="text-sm font-medium px-10 mb-2 mt-4 text-gray-600">
// //               Description <span className="text-xs text-gray-400">(optional)</span>
// //             </h2>
// //             <textarea
// //               placeholder="Enter a short course description"
// //               value={description}
// //               onChange={(e) => setDescription(e.target.value)}
// //               className="w-full border p-2 rounded mb-4 h-24 resize-none"
// //             />

// //             <div className="flex justify-end">
// //               <button
// //                 onClick={handleSave}
// //                 className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
// //               >
// //                 Save
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }



// import { useState } from "react";
// import useCourseStore from "./courseStore";

// export default function TwoColumnLayout() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [showCourseForm, setShowCourseForm] = useState(false);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [error, setError] = useState("");

//   const { course, setCourse, deleteCourse } = useCourseStore();

//   const handleSave = () => {
//     if (!title.trim()) {
//       setError("Course title is required.");
//       return;
//     }

//     const newCourse = {
//       title,
//       description,
//       createdAt: new Date().toISOString(),
//     };

//     setCourse(newCourse);
//     setTitle("");
//     setDescription("");
//     setError("");
//     setShowCourseForm(false);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div
//         className={`${
//           collapsed ? "w-[60px]" : "w-1/5"
//         } bg-white border-r p-4 flex flex-col transition-all duration-300 relative`}
//       >
//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="absolute top-4 right-[-12px] bg-gray-200 hover:bg-gray-300 border rounded-full w-6 h-6 flex items-center justify-center text-sm z-10"
//         >
//           {collapsed ? "→" : "←"}
//         </button>

//         {!collapsed && (
//           <div className="mb-8 p-2 font-semibold flex items-center justify-center text-gray-700">
//             Logo
//           </div>
//         )}

//         <div className="flex-1 flex items-center justify-center">
//           {!collapsed && !course && (
//             <button
//               onClick={() => setShowCourseForm(true)}
//               className="bg-gray-100 px-4 py-2 text-sm font-semibold rounded shadow"
//             >
//               Create Course
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 bg-white p-6 relative overflow-y-auto">
//         {/* Course Form */}
//         {showCourseForm && (
//           <div
//             className="absolute top-0 left-3 bg-white shadow p-6 z-10"
//             style={{ width: "30%", height: "100vh" }}
//           >
//             <h2 className="text-lg font-semibold mt-24 px-10 mb-4">
//               Course Title
//             </h2>
//             <input
//               type="text"
//               placeholder="Course Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full border p-2 rounded mb-2"
//             />
//             {error && (
//               <p className="text-red-500 text-sm mb-2">{error}</p>
//             )}

//             <h2 className="text-sm font-medium px-10 mb-2 mt-4 text-gray-600">
//               Description <span className="text-xs text-gray-400">(optional)</span>
//             </h2>
//             <textarea
//               placeholder="Enter a short course description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full border p-2 rounded mb-4 h-24 resize-none"
//             />

//             <div className="flex justify-end">
//               <button
//                 onClick={handleSave}
//                 className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Display Created Course */}
//         {course && (
//           <div className="mt-12">
//             <h1 className="text-2xl font-semibold mb-2">{course.title}</h1>
//             <p className="text-gray-600 mb-4">{course.description}</p>
//             <button
//               onClick={deleteCourse}
//               className="text-sm text-red-500 underline"
//             >
//               Delete Course
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import useCourseStore from "./courseStore";

export default function TwoColumnLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const { courses, setCourse, deleteCourse } = useCourseStore();

  const [collapsedCourses, setCollapsedCourses] = useState({});
  const [expandedCourse, setExpandedCourse] = useState(null);


const toggleCourseCollapse = (title) => {
  setCollapsedCourses((prev) => ({
    ...prev,
    [title]: !prev[title],
  }));
};


  const handleSave = () => {
    if (!title.trim()) {
      setError("Course title is required.");
      return;
    }

    const newCourse = {
      title,
      description,
      createdAt: new Date().toISOString(),
    };

    setCourse(newCourse);
    setTitle("");
    setDescription("");
    setError("");
    setShowCourseForm(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          collapsed ? "w-[60px]" : "w-1/5"
        } bg-white border-r p-4 flex flex-col transition-all duration-300 relative`}
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-4 right-[-12px] bg-gray-200 hover:bg-gray-300 border rounded-full w-6 h-6 flex items-center justify-center text-sm z-10"
        >
          {collapsed ? "→" : "←"}
        </button>

        {!collapsed && (
          <div className="mb-4 p-2 font-semibold flex items-center justify-center text-gray-700">
            Logo
          </div>
        )}

        {/* Courses Section */}
        <div className="flex-1 overflow-y-auto flex flex-col">
  {!collapsed && (
    courses.length > 0 ? (
      <div className="mb-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold text-gray-700">Courses</h2>
          <button
            onClick={() => setShowCourseForm(true)}
            className="text-sm text-blue-600 hover:underline"
          >
            +
          </button>
        </div>

        <ul className="space-y-2">
  {courses.map((c, idx) => {
    const isExpanded = expandedCourse === idx;

    return (
      <li key={idx} className="text-sm text-gray-800 bg-gray-100 rounded px-2 py-1">
        <div className="flex justify-between items-center">
          <div
            onClick={() => setExpandedCourse(isExpanded ? null : idx)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-xs">
              {isExpanded ? "▼" : "▶"}
            </span>
            {c.title}
          </div>
          <button
            onClick={() => deleteCourse(c.title)}
            className="text-xs text-red-500 hover:underline"
          >
            x
          </button>
        </div>

        {isExpanded && (
          <ul className="ml-6 mt-2 space-y-1 text-gray-600">
            <li className="hover:underline cursor-pointer">📘 Syllables</li>
            <li className="hover:underline cursor-pointer">🖼 Course Slides</li>
            <li className="hover:underline cursor-pointer">📊 Grading</li>
          </ul>
        )}
      </li>
    );
  })}
</ul>


      </div>
    ) : (
      <div className="flex flex-1 items-center justify-center mt-auto mb-20">
        <button
          onClick={() => setShowCourseForm(true)}
          className="bg-gray-100 px-4 py-2 text-sm font-semibold rounded shadow"
        >
          + Create a new course
        </button>
      </div>
    )
  )}
</div>


      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-6 relative overflow-y-auto">
        {/* Course Form Modal/Panel */}
        {showCourseForm && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-white shadow-lg z-10 p-6"
            style={{ maxWidth: 400 }}
          >
            <h2 className="text-lg font-semibold mb-4">Create Course</h2>

            <input
              type="text"
              placeholder="Course Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 rounded mb-2"
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <textarea
              placeholder="Enter a short description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-2 rounded mb-4 h-24 resize-none"
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowCourseForm(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                Save
              </button>
            </div>
          </div>
        )}

        {/* Main Content View */}
        {/* <h1 className="text-2xl font-semibold mb-4">Your Workspace</h1>
        <p className="text-gray-600">This is the main content area.</p> */}
      </div>
    </div>
  );
}
