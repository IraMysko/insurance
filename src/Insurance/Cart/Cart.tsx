import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hookTypedSelector";
import { resetCart } from "../../store/insurance/actions";
import AddedCard from "./AddedCard";

type Props = {
  visible: boolean;
  onCancel: VoidFunction;
};

const Cart: React.FC<Props> = ({ visible, onCancel }) => {
  const cart = useTypedSelector((state) => state.insurance.cart);
  const modules = useTypedSelector((state) => state.insurance.packages);
  const isCartEmpty = !cart.length;
  const dispatch = useDispatch();

  const total = cart.reduce((acc, itemInCart) => {
    const module = modules.find((module) => module.id === itemInCart.id);
    if (!module) {
      return acc;
    }
    const sum = Math.ceil(module.risk * itemInCart.coverage);

    return acc + sum;
  }, 0);

  const [modalConfirm, setModalConfirm] = useState<boolean>(false);
  const handleConfirmOrder = () => {
    onCancel();
    setModalConfirm(true);
    dispatch(resetCart());
  };

  const handleCancel = () => {
    setModalConfirm(false);
  };

  return (
    <>
      {!modalConfirm && (
        <Modal
          title="Cart"
          visible={visible}
          onCancel={onCancel}
          footer={[
            <>
              <Button onClick={onCancel}>Cancel</Button>
              {!isCartEmpty && (
                <Button type="primary" onClick={handleConfirmOrder}>
                  Confirm
                </Button>
              )}
            </>,
          ]}
        >
          {isCartEmpty ? (
            <div>
              Your cart is empty, check menu with our products to add
              appropriate insurance
            </div>
          ) : (
            <div>
              {cart.map(({ id, coverage }) => (
                <AddedCard key={id} id={id} coverage={coverage} />
              ))}
              <div>Modules in cart: {cart.length}</div>
              <div>Total price: {total} uah</div>
            </div>
          )}
        </Modal>
      )}

      {modalConfirm ? (
        <Modal
          title="Thanks"
          footer={null}
          visible={modalConfirm}
          onCancel={handleCancel}
        >
          order has been sent for processing
        </Modal>
      ) : null}
    </>
  );
};

export default Cart;
