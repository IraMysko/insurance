import { Modal, Button, Slider } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hookTypedSelector";
import { addToCart } from "../../store/insurance/actions";
import "./module.scss";

type Props = {
  id: number;
  onCancel: VoidFunction;
  name: string;
  photo: any;
  coverage: Array<number>;
};

const Module: React.FC<Props> = ({ id, onCancel, name, photo, coverage }) => {
  const modules = useTypedSelector((state) => state.insurance.packages);
  const risk = modules.find((module) => module.id === id)?.risk || 1;
  const dispatch = useDispatch();

  const [min, max] = coverage;

  const [chosenCoverage, setChosenCoverage] = useState<number>(min);

  const onAfterChange = (value: number): void => {
    setChosenCoverage((prev) => (prev = value));
  };

  const price = Math.ceil(chosenCoverage * risk);

  const handleAddToCart = () => {
    dispatch(addToCart(id, chosenCoverage));
    onCancel();
  };

  return (
    <Modal
      title={name}
      visible={true}
      onCancel={onCancel}
      footer={
        <>
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="primary" onClick={handleAddToCart}>
            Add to card
          </Button>
        </>
      }
    >
      <img className="module-img" src={photo} alt="" />
      <p>Please, choose coverage</p>

      <Slider
        marks={{
          [min]: min,
          [max]: max,
        }}
        defaultValue={min}
        onAfterChange={onAfterChange}
        min={min}
        max={max}
      />
      <div>Price: {price} uah</div>
    </Modal>
  );
};

export default Module;
