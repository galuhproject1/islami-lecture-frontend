export type CourseData = {
  id: number;
  name: string;
  slug: string;
  description: string;
  meta: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  image?: string | null;
  review?: string;
};

export type CourseModule = {
  id: number;
  course_id: number;
  sequence: number;
  name: string;
  slug: string;
  description: string;
  meta: any | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
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
  modules: CourseModule[];
};
