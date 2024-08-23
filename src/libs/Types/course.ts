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
