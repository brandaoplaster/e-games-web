import React from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import BlueBackground from "../shared/bluebackground";

interface LoginProps {
  titlePhrase: string;
  buttonPhrase: string;
}

const LoginForm: React.FC<LoginProps> = ({ titlePhrase, buttonPhrase }) => {
  return (
    <Row>
      <BlueBackground>
        <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
          <h4>{titlePhrase}</h4>

          <InputGroup className="mt-3">
            <FormControl placeholder="E-mail" />
          </InputGroup>

          <InputGroup className="mt-3">
            <FormControl placeholder="Password" />
          </InputGroup>

          <Button className="btn btn-info mt-3 w-100">{buttonPhrase}</Button>

          <hr />

          I forgot my password
        </Col>
      </BlueBackground>
    </Row>
  );
};

export default LoginForm;
