import Button from "./Button.js";
// .module.css 파일 안 class 이름을 className으로 사용
import styles from "./App.module.css";

import {useState, useEffect} from "react";

// useEffect(한번만 실행하고 싶은 함수 , [변하는 부분 알려주기])

function Hello() {
  useEffect(function () {
    console.log("hi :)");
		// cleanup function
    return function () {
      console.log("bye :(");
    };
  }, []);

	useEffect(() => {
		console.log("hi :)");
		// cleanup function
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
			{showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;