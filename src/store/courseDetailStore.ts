import { create } from 'zustand';
import { CourseDetail } from '../libs/Types/course';

type CourseStore = {
  courseDetail: CourseDetail | null;
  setCourseDetail: (detail: CourseDetail) => void;
};

const useCourseStore = create<CourseStore>((set) => ({
  courseDetail: null,
  setCourseDetail: (detail) => set({ courseDetail: detail }),
}));

export default useCourseStore;