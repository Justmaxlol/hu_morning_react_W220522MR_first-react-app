import { useState, useEffect } from "react";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";
import jwt_decode from "jwt-decode";
// import ShalomOlam, { f1, f2, f3 } from "./components/HelloWorld";
import HelloWorldComponent from "./components/HelloWorldComponent";
import LoginPage from "./pages/LoginPage";
import ConditionPage from "./pages/ConditionPage";
import RegisterPage from "./pages/RegisterPage";
import PanelPage from "./pages/PanelPage/PanelPage";
import SideEffectPage from "./pages/SideEffect";
import NavBarComponent from "./components/NavBarComponent";
import TkReduxPage1 from "./pages/TKRedux/TkReduxPage1";
import TkReduxPage2 from "./pages/TKRedux/TkReduxPage2";
import autoLogin from "./services/autoLogin";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";

const App = () => {
  // const [tf, setTf] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        let { data } = await autoLogin();
        let dataFromToken = jwt_decode(localStorage.getItem("token"));
        dispatch(authActions.login(dataFromToken));
        if (data) {
          dispatch(authActions.updateUserInfo(data));
        }
      } catch (err) {
        console.log("you not logged in");
      }
    })();
  }, []);
  return (
    <div className="container">
      <NavBarComponent />
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/panelpage" component={PanelPage}></Route>
      </Switch>
      {/* <HelloWorldComponent /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <ConditionPage /> */}
      {/* <PanelPage /> */}
      {/* <TkReduxPage1 /> */}
      {/* <TkReduxPage2 /> */}
      {/* <button onClick={(ev) => setTf(!tf)}>toggle timer</button>
      {tf && <SideEffectPage />} */}
    </div>
  );
};

export default App;
