// Types
import { OrderProduct } from "./OrderProduct";

export type OrderType = {
  status: "WAITING" | "IN_PRODUCTION" | "DONE";
  _id: string;
  table: string;
  products: OrderProduct[];
};
