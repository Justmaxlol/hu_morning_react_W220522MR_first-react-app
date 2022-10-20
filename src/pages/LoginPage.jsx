import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import Joi from "joi-browser";
import validate from "../validation/validation";
import loginSchema from "../validation/login.validation";
import useAutoLogin from "../hooks/useAutoLogin";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  }); //init state
  const emailRef = useRef();
  const history = useHistory();
  const autoLoginFunction = useAutoLogin();
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  const handleUserInputChange = (ev) => {
    let newUserInput = JSON.parse(JSON.stringify(userInput)); //deep copy
    newUserInput[ev.target.id] = ev.target.value; //set new value dynamically
    /*
      id = email
      newUserInput.email
      id = password
      newUserInput.password
    */
    setUserInput(newUserInput); //update state
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { error } = validate(userInput, loginSchema);
    if (error) {
      let errorMsgs = "";
      for (let errorItem of error.details) {
        switch (errorItem.type) {
          case "string.min":
            errorMsgs += `${errorItem.context.label} length must be at least ${errorItem.context.limit} characters long, `;
            break;
          case "string.max":
            errorMsgs += `${errorItem.context.label} length must be at least ${errorItem.context.limit} characters long, `;
            break;
          default:
            errorMsgs += "something went wrong,";
            break;
        }
      }
      toast.error(errorMsgs, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    axios
      .post("/users/login", userInput)
      .then(async (res) => {
        localStorage.setItem("token", res.data.token);
        autoLoginFunction(res.data.token);
        history.push("/");
      })
      .catch((err) => {
        toast.error("😭 Something went wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const handleEmailInputInvalid = (ev) => {
    // ev.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login page</h2>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={userInput.email}
          onChange={handleUserInputChange}
          onInvalid={handleEmailInputInvalid}
          ref={emailRef}
        />
        <label htmlFor="email">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={userInput.password}
          onChange={handleUserInputChange}
        />
        <label htmlFor="password">Password</label>
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  );
};

export default LoginPage;
