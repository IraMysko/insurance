import React, { useState } from "react";
import { Card, Typography } from "antd";

import { useTypedSelector } from "../../hookTypedSelector";
import Module from "../Module";
import "./catalogue.scss";

const { Meta } = Card;
const { Title } = Typography;

const Catalogue: React.FC = () => {
  const packages = useTypedSelector((state) => state.insurance.packages);

  const [modalVisibilityName, setModalVisibilityName] =
    useState<string | null>(null);

  const makeShowModal = (name: string) => () => {
    setModalVisibilityName(name);
  };

  const handleCancel = () => {
    setModalVisibilityName(null);
  };

  return (
    <>
      <div className="catalogue-title">
        <Title level={1}>Choose your personal insurance</Title>
      </div>
      <div className="catalogue">
        {packages.map(({ id, name, photo, title, coverage }) => {
          return (
            <div key={id} className="catalogue-card">
              <Card
                style={{ width: 250 }}
                cover={<img alt="card" src={photo} />}
                onClick={makeShowModal(name)}
              >
                <Meta title={name} description={title} />
              </Card>

              {modalVisibilityName === name && (
                <Module
                  id={id}
                  onCancel={handleCancel}
                  name={name}
                  photo={photo}
                  coverage={coverage}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Catalogue;
