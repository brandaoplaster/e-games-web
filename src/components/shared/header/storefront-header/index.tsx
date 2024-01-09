import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "@/styles/Header.module.css";

const StoreFrontHeader: React.FC = () => {
  return (
    <Row className={style.background}>
      <Col md={8} className="mt-2">

      </Col>

      <Col md={4} className="mt-2 text-center">

      </Col>
    </Row>
  )
};

export default StoreFrontHeader;
