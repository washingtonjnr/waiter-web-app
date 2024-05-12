// Styles
import styled from "styled-components";

export const Overlay = styled.div`
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, .8);
`;

export const ContainerModal = styled.div`
  width: 90%;
  display: flex;
  min-height: 30vh;
  max-height: 95vh;
  max-width: 480px;
  padding: 32px 40px;
  border-radius: 16px;
  flex-direction: column;
  background-color: #FFF;

  header {
    display: flex;
    font-size: 24px;
    justify-content: space-between;
  }

  .box-status {
    margin-top: 32px;

    .status {
      gap: 8px;
      display: flex;
      margin-top: 4px;
    }
  }

  .box-total {
    width: 100%;
    display: flex;
    margin-top: 32px;
    align-items: center;
    justify-content: space-between;
  }

  button {
    border: 0;
    padding: 4px;
    outline: none;
    background-color: transparent;
  }
`;

export const OrderDetails = styled.div`
  flex: 1;
  margin-top: 32px;

  .box-order {
    gap: 16px;
    display: flex;
    margin-top: 16px;
    flex-direction: column;
  }
`;

export const ContainerProduct = styled.div`
  gap: 12px;
  display: flex;
  align-items: flex-start;

  img {
    width: 48px;
    height: 40px;
    border-radius: 8px;
  }

  > div {
    gap: 4px;
    display: flex;
    flex-direction: column;

    strong {
      line-height: 16px;
    }
  }
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  margin-top: 32px;
  align-items: center;
  justify-content: space-between;

  button:not([disabled]):hover {
    opacity: .6;
  }

  button {
    border: none;
    font-weight: 600;
    transition: all .2s ease-in-out;

    &:disabled {
      opacity: .6;
      cursor: not-allowed;
    }

    &.outline-primary {
      color: #d73032;
    }

    &.pattern-primary {
      color: #FFF;
      padding: 14px 28px;
      border-radius: 44px;
      background-color: #d73032;
    }

  }
`;
