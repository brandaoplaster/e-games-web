import React from "react";
import styles from "@/styles/StyleButton.module.css";
import { Button } from "react-bootstrap";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StyleButtonProps {
  icon?: IconProp;
  action?: string;
  type_button?: string;
}

const StyleButton: React.FC<StyleButtonProps> = ({
  icon,
  action,
  type_button,
}) => {
  return (
    <Button
      className={type_button == "red" ? styles.red_button : styles.blue_button}
    >
      {icon && <FontAwesomeIcon icon={icon} className={action && "mr-2"} />}{" "}
      {action}
    </Button>
  );
};

export default StyleButton;
