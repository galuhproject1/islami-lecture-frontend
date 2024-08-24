import api from "../../libs/api";

export const getCourseDetail = async (slug: string) => {
  try {
    const response = await api.get(`/academic/courses/${slug}`, {
      params: {
        include: "modules",
      },
    });
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
