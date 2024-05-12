// Types
import { useEffect, useState } from "react";
import { BoardType } from "../../@types/BoardType";
// Components
import { OrderBoard } from "../OrderBoard";
// Styles
import { ContainerOrders } from "./styles";
import { OrderType } from "../../@types/OrderType";
// Services
import { api } from "../../services/api";
import { apiRoutes } from "../../services/apiRoutes";

export const Orders = () => {
  const [orders, setOders] = useState<OrderType[]>([]);

  const boards: BoardType[] = [
    { type: "WAITING", title: "Queue", icon: "🕒", orders: [] },
    {
      type: "IN_PRODUCTION",
      title: "Preparing",
      icon: "👨🏽‍🍳",
      orders: [],
    },
    { type: "DONE", title: "Ready", icon: "🕒", orders: [] },
  ];

  const getOrders = () => {
    console.log(orders);

    api
      .get(apiRoutes.ORDERS)
      .then(({ data }) => {
        setOders(data);
      })
      .catch(() => console.log("Erro ao listar pedidos"))
      .finally(() => console.log("Stop loading"));
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <ContainerOrders>
      {boards.map((board: BoardType) => {
        const { type, icon, title, } = board;

        const filteredOrder = orders.filter(order => order.status === type);

        return (
          <OrderBoard
            key={type}
            type={type}
            icon={icon}
            title={title}
            orders={filteredOrder}
          />
        );
      })}
    </ContainerOrders>
  );
};
