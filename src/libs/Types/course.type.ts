export type CourseType = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  tags: string[];
  mentor: string;
  review: string;
};

export type DetailCourseType = {
  id: string;
  topic: string;
  lessons: LessonType[];
};

export type LessonType = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  videoUrl?: string;
  time: string;
};
