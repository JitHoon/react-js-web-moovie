import React from "react";
// %npm i react-router-dom@5.3.0
// react-router-dom : url, link 관련 Component 제공
// BrowserRouter : 기본 Browser 형태의 url route 양식 사용
import {
  BrowserRouter as Router, Switch, Route 
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"

// 편한 export 문법
export default function App() {
  return (
    <Router>
      <Switch>
        {/* :id 로 원하는 변수값 받아 url로 사용할 수 있음 */}
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}