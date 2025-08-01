import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCourseStore = create(
  persist(
    (set) => ({
      courses: [],
      setCourse: (newCourse) =>
        set((state) => ({ courses: [...state.courses, newCourse] })),
      deleteCourse: (title) =>
        set((state) => ({
          courses: state.courses.filter((c) => c.title !== title),
        })),
    }),
    {
      name: "course-storage", // Key used in localStorage
    }
  )
);

export default useCourseStore;
