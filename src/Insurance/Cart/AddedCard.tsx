import { Button, Typography, Divider } from "antd";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hookTypedSelector";
import { removeFromCart } from "../../store/insurance/actions";
import "../Module/module.scss";
import "./cart.scss";

const { Title } = Typography;

type Props = {
  id: number;
  coverage: number;
};

const AddedCard: React.FC<Props> = ({ id, coverage }) => {
  const modules = useTypedSelector((state) => state.insurance.packages);
  const module = modules.find((module) => module.id === id);
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id, coverage));
  };

  if (!module) {
    return null;
  }

  const price = Math.ceil(module.risk * coverage);

  return (
    <>
      <div>
        <Title level={5}>{module.name}</Title>
        <img className="module-img" src={module.photo} alt="" />
        <div className="cart-container">
          <div>Price: {price} uah</div>
          <Button onClick={handleRemoveFromCart}>Delete</Button>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default AddedCard;
