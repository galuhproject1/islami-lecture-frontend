import api from "../../libs/api";

export const getProductDetail = async (slug: string) => {
  try {
    const response = await api.get(`/shop/products/${slug}`, {
      params: {
        include: "items.itemable.modules.lessons",
      },
    });
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
