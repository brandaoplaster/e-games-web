import React from "react";
import styles from "./styles.module.css";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faDollarSign,
  faGamepad,
  faLaptop,
  faSignal,
  faTicketAlt,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

interface AdminHeaderProps {
  name: string;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ name }) => {
  return (
    <Row className={styles.background}>
      <Col lg={6} xs={9}>
        <Link href="/admin">
          <FontAwesomeIcon
            icon={faSignal}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
        <Link href="/admin/users/list">
          <FontAwesomeIcon
            icon={faUser}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
        <Link href="/admin/products/list">
          <FontAwesomeIcon
            icon={faGamepad}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
        <Link href="/admin/categories/list">
          <FontAwesomeIcon
            icon={faCheckSquare}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
        <Link href="/admin/systemrequirements/list">
          <FontAwesomeIcon
            icon={faLaptop}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
        <Link href="/admin/coupons/list">
          <FontAwesomeIcon
            icon={faTicketAlt}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
        <Link href="#">
          <FontAwesomeIcon
            icon={faDollarSign}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
      </Col>

      <Col lg={6} xs={3} className="d-none d-md-block">
        <div className="float-right">
          <span className={styles.name}>{name}</span>
          <FontAwesomeIcon
            icon={faUserCircle}
            color="var(--color-gray-light)"
          />
        </div>
      </Col>
    </Row>
  );
};

export default AdminHeader;
