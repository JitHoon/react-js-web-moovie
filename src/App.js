import Button from "./Button.js";
// .module.css 파일 안 class 이름을 className으로 사용
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;