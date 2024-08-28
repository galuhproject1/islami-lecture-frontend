export type Lesson = {
  id: number;
  module_id: number;
  sequence: number;
  embed: string;
  name: string;
  slug: string;
  description: string;
  content: string;
  meta: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
};

export type Module = {
  id: number;
  course_id: number;
  sequence: number;
  name: string;
  slug: string;
  description: string;
  meta: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  lessons: Lesson[];
};

export type Course = {
  id: number;
  name: string;
  slug: string;
  description: string;
  meta: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  image: string;
  modules: Module[];
};

export type CourseDetail = {
  id: number;
  name: string;
  slug: string;
  description: string;
  meta: any | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  modules: any[];
};
