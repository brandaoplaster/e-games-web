import React from "react";
import styles from "@/styles/SubHeader.module.css";

interface TitlePathProps {
  title?: string;
  path?: string;
}

const TitlePath: React.FC<TitlePathProps> = ({ title, path }) => {
  return (
    <>
      <h4>{title}</h4>
      <span className={styles.style_path}>{path}</span>
    </>
  );
};

export default TitlePath;
