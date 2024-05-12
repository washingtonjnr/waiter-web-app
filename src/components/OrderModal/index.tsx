import { useEffect } from "react";
// Types
import { OrderType } from "../../@types/OrderType";
// Styles
import {
  Actions,
  ContainerModal,
  ContainerProduct,
  OrderDetails,
  Overlay,
} from "./styles";
// Utils
import { formatCurrency } from "../../utils/formatter";
// Services
import { apiUrl } from "../../services/api";

type OrderModalProps = {
  title: string;
  icon: string;
  order: OrderType;
  isLoading: boolean;
  onClose: () => void;
  onDelete: () => Promise<void>;
};

export const OrderModal = ({
  title,
  icon,
  order,
  isLoading,
  onClose,
  onDelete
}: OrderModalProps) => {
  const { table, products } = order;
  //
  const totalPrice = products?.reduce(
    (accumulator, currentValue) => accumulator + (currentValue.product.price * currentValue.quantity),
    0
  );

  useEffect(() => {
    const handleEscDown = (event: KeyboardEvent) => {
      if(event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscDown);

    return () => document.removeEventListener("keydown", handleEscDown);
  }, [onClose]);

  return (
    <Overlay className="modal" onClick={onClose}>
      <ContainerModal onClick={(e) => e.stopPropagation()}>
        <header>
          <strong>Table {table}</strong>

          <button type="button" onClick={onClose}>
            ✖️
          </button>
        </header>

        <div className="box-status">
          <small>Status do request</small>

          <div className="status">
            <span>{icon}</span>
            <strong>{title}</strong>
          </div>
        </div>

        <OrderDetails>
          <small>Items</small>

          <div className="box-order">
            {products?.map((productOrder, index) => {
              const { quantity, product } = productOrder;
              const { image, name, price } = product;

              return (
                <ContainerProduct key={index}>
                  <img src={`${apiUrl}/uploads/${image}`} alt={title} />

                  <small>{quantity}x</small>

                  <div>
                    <strong>{name}</strong>
                    <span>{formatCurrency(price)}</span>
                  </div>
                </ContainerProduct>
              );
            })}
          </div>
        </OrderDetails>

        <div className="box-total">
          <small>Total</small>

          <strong>{totalPrice ? formatCurrency(totalPrice) : 0}</strong>
        </div>

        <Actions>
          <button
            type="button"
            className="outline-primary"
            disabled={isLoading}
            onClick={onClose}
          >
            Cancel request
          </button>

          <button
            className="pattern-primary"
            type="button"
            disabled={isLoading}
            onClick={() => onDelete()}
          >
            Concludded request
          </button>
        </Actions>
      </ContainerModal>
    </Overlay>
  );
};
