import React from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/components/shared/logo";

const StoreFrontHeader: React.FC = () => {
  return (
    <Row className={styles.background}>
      <Col md={8} className="mt-2">
        <Logo />
      </Col>

      <Col md={4} className="mt-2 text-center">
        <Row >
          <Col md={6} className="mb-4 mb-md-0">
            <InputGroup>
              <FormControl placeholder="Search Product" />
            </InputGroup>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={4} xs={4}>
                <FontAwesomeIcon icon={faSearch} color="var(--color-gray-light)" />
              </Col>
              <Col md={4} xs={4}>
                <FontAwesomeIcon icon={faShoppingCart} color="var(--color-gray-light)" />
              </Col>
              <Col md={4} xs={4}>
                <FontAwesomeIcon icon={faUserCircle} color="var(--color-gray-light)" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
};

export default StoreFrontHeader;
