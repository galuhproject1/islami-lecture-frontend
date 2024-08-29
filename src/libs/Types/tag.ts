type NameSlug = {
  en: string;
};

export type Tag = {
  id: number;
  name: NameSlug;
  slug: NameSlug;
  type: string;
  sequence: number;
  created_at: string;
  updated_at: string;
  product_count: number;
};
