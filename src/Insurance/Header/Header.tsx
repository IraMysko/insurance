import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hookTypedSelector";
import { visibleCart } from "../../store/insurance/actions";
import Cart from "../Cart";
import "./header.scss";

const Header = () => {
  const isVisibleCart = useTypedSelector((state) => state.insurance.isOpen);
  const dispatch = useDispatch();

  const handleCartOpen = useCallback(() => {
    dispatch(visibleCart(true));
  }, [dispatch]);

  const handleCloseCart = useCallback(() => {
    dispatch(visibleCart(false));
  }, [dispatch]);

  return (
    <div className="header">
      <div className="header-logo">Your insurance</div>
      <ShoppingCartOutlined className="header-cart" onClick={handleCartOpen} />
      <Cart visible={isVisibleCart} onCancel={handleCloseCart} />
    </div>
  );
};

export default Header;
