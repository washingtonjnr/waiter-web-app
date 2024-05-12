// Types
import { OrderType } from "./OrderType";

export type BoardType = {
  type: "WAITING" | "IN_PRODUCTION" | "DONE";
  icon: string;
  title: string;
  orders: OrderType[];
};
