import React from "react";
import PropTypes from "prop-types";
// .module.css 파일 안 class 이름을 className으로 사용
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.title}>{text}</button>;
}

const memoButton = React.memo(Button)

memoButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;