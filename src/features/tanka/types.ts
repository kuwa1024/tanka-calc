export interface product {
  id: string;
  category: string;
  name: string;
  price: number;
  quantity: number;
  discount?: number;
  discountRate?: number;
  unitPrice: number;
}

export interface category {
  label: string;
  value: string;
}
