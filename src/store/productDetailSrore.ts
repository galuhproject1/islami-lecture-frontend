import { create } from 'zustand';
import { Product } from '../libs/Types/product'; // Assume this is the type for product detail

// In ../../../store/productDetailSrore
interface ProductStore {
  productDetail: Product | null;
  setCourseDetail: (data: Product) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  productDetail: null,
  setCourseDetail: (data) => {
    set({ productDetail: data });
  },
}));

export default useProductStore;
