import { ProductType } from "./ProductType";

export type OrderProduct = {
  _id: string;
  quantity: number;
  product: ProductType,
};
