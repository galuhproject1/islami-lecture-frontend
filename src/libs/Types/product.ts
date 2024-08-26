export type Category = {
  id: number;
  name: {
    en: string;
  };
  slug: {
    en: string;
  };
  type: string;
  sequence: number;
  created_at: string;
  updated_at: string;
  pivot: {
    taggable_type: string;
    taggable_id: number;
    tag_id: number;
  };
};

export type Course = {
  id: number;
  name: string;
  slug: string;
  description: string;
  meta: any;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  image: string;
  pivot: {
    itemable_type: string;
    product_id: number;
    itemable_id: number;
  };
  categories: Category[];
  media: any[];
};

export type Itemable = {
  id: number;
  name: string;
  slug: string;
  description: string;
  meta: any;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  image: string;
  media: any[];
};

export type Item = {
  id: number;
  product_id: number;
  itemable_type: string;
  itemable_id: number;
  created_at: string | null;
  updated_at: string | null;
  itemable: Itemable;
};

export type Product = {
  id: number;
  type: string;
  name: string;
  description: string;
  price: number;
  archived_at: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  image: string;
  courses: Course[];
  items: Item[];
  media: any[];
};
