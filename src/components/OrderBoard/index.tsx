import { useState } from "react";
// Types
import { BoardType } from "../../@types/BoardType";
import { OrderType } from "../../@types/OrderType";
// Components
import { OrderModal } from "../OrderModal";
// Styles
import { ContainerBoard, Requests } from "./styles";
// Service
import { api } from "../../services/api";
import { apiRoutes } from "../../services/apiRoutes";

export const OrderBoard = ({ type, icon, title, orders }: BoardType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>();

  const handleOpenModal = (order: OrderType) => {
    setSelectedOrder(order);
  };

  const handleDeleteOrder = async () => {
    setIsLoading(true);

    await api.delete(`${apiRoutes.ORDERS}/${selectedOrder?._id}`);

    setIsLoading(false);
  };

  return (
    <>
      {selectedOrder && (
        <OrderModal
          icon={icon}
          title={title}
          order={selectedOrder}
          isLoading={isLoading}
          onClose={() => setSelectedOrder(null)}
          onDelete={() => handleDeleteOrder()}
        />
      )}

      <ContainerBoard key={type}>
        <header>
          <span>{icon}</span>

          <strong>{title}</strong>

          <span>({orders.length})</span>
        </header>

        {orders.map((order: OrderType, idx: number) => {
          const { table, products } = order;

          return (
            <Requests key={`${title}-${idx}`}>
              <button type="button" onClick={() => handleOpenModal(order)}>
                <strong>Table {table}</strong>
                <span>
                  {products.length}{" "}
                  {products.length === 1 ? "request" : "requests"}
                </span>
              </button>
            </Requests>
          );
        })}
      </ContainerBoard>
    </>
  );
};
