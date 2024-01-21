import React from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import styles from "@/styles/SubHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import StyleButton from "@/components/shared/style-button";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SearchIconProps {
  icon: IconProp;
}
const SearchIcon: React.FC<SearchIconProps> = ({ icon }) => {
  return (
    <Row>
      <Col lg={9} xs>
        <Row>
          <Col lg={9} xs={10}>
            <InputGroup>
              <FormControl placeholder="Search" className={styles.input} />
            </InputGroup>
          </Col>

          <Col lg={3} xs={2} className="mt-1" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              color="var(--color-gray-light)"
              className="float-left"
            />
          </Col>
        </Row>
      </Col>

      <Col lg={2} xs={{ span: 3 }} className={styles.title_button}>
        <StyleButton icon={icon} type_button="blue" />
      </Col>
    </Row>
  );
};

export default SearchIcon;
