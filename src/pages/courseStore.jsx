import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCourseStore = create(
  persist(
    (set) => ({
      courses: [],
      uploadedFiles: {}, // ✅ Correct: Treat as object with categories

      setCourse: (newCourse) =>
        set((state) => {
          if (!newCourse?.title) return state;
          return {
            courses: [...state.courses, newCourse],
          };
        }),
      

    //   deleteCourse: (title) =>
    //     set((state) => ({
    //       courses: state.courses.filter((c) => c.title !== title),
    //     })),

      // ✅ Add files to a category
      addFiles: (category, newFiles) =>
        set((state) => ({
          uploadedFiles: {
            ...state.uploadedFiles,
            [category]: [
              ...(state.uploadedFiles[category] || []),
              ...newFiles,
            ],
          },
        })),

      // ✅ Overwrite all files for a category
      setUploadedFiles: (category, files) =>
        set((state) => ({
          uploadedFiles: {
            ...state.uploadedFiles,
            [category]: files,
          },
        })),

        deleteCourse: (title) =>
            set((state) => {
              const updatedCourses = state.courses.filter((c) => c.title !== title);
              const shouldClearFiles = updatedCourses.length === 0;
              return {
                courses: updatedCourses,
                uploadedFiles: shouldClearFiles ? {} : state.uploadedFiles,
              };
            }),

            deleteUploadedFile: (category, index) =>
                set((state) => {
                  const updatedCategoryFiles = [...(state.uploadedFiles[category] || [])];
                  updatedCategoryFiles.splice(index, 1);
              
                  return {
                    uploadedFiles: {
                      ...state.uploadedFiles,
                      [category]: updatedCategoryFiles,
                    },
                  };
                }),
              
          


      // ✅ Clear all uploaded files
      clearUploadedFiles: () => set({ uploadedFiles: {} }),
    }),
    {
      name: "course-storage", // Key used in localStorage
    }
  )
);

export default useCourseStore;
