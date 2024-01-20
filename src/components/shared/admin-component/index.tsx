import React, { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";
import AdminHeader from "@/components/shared/header/admin-header";
import AdminFooter from "@/components/shared/footer/admin-footer";

interface AdminComponentProps {
  children?: ReactNode;
}

const AdminComponent: React.FC<AdminComponentProps> = ({ children }) => {
  return (
    <Row className="mr-lg-4">
      <Col lg={3}>Menu Lateral</Col>
      <Col lg={9}>
        <div className="d-flex flex-column sticky-footer-wrapper container">
          <AdminHeader name="Admin User" />
          <div className="flex-fill text-center">{children}</div>
          <AdminFooter />
        </div>
      </Col>
    </Row>
  );
};

export default AdminComponent;
