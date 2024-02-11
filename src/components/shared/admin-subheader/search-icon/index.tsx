import React, { useEffect, useState } from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import styles from "@/styles/SubHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import StyleButton from "@/components/shared/style-button";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  clearSearch,
  setSearch as setSearchRedux,
} from "@/store/modules/admin/shared/search/reducer";

interface SearchIconProps {
  icon: IconProp;
  newPath: string;
}
const SearchIcon: React.FC<SearchIconProps> = ({ icon, newPath }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(clearSearch());
  }, [dispatch]);

  const handleSearch = (): void => {
    router.replace(router.pathname, "?page=1");
    dispatch(setSearchRedux(search));
  };

  return (
    <Row>
      <Col lg={9} xs>
        <Row>
          <Col lg={9} xs={10}>
            <InputGroup>
              <FormControl
                placeholder="Search"
                className={styles.input}
                value={search}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  setSearch(evt.target.value);
                }}
                onKeyPress={(evt: React.KeyboardEvent<HTMLInputElement>) => {
                  if (evt.key.toLowerCase() === "enter") {
                    handleSearch();
                  }
                }}
              />
            </InputGroup>
          </Col>

          <Col lg={3} xs={2} className="mt-1" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              color="var(--color-gray-light)"
              className="float-left"
              onClick={handleSearch}
            />
          </Col>
        </Row>
      </Col>

      <Col lg={2} xs={{ span: 3 }} className={styles.title_button}>
        <Link href={newPath}>
          <StyleButton icon={icon} type_button="blue" />
        </Link>
      </Col>
    </Row>
  );
};

export default SearchIcon;
