import { useState } from "react";
const LoginPage = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  }); //init state
  const handleUserInputChange = (ev) => {
    let newUserInput = JSON.parse(JSON.stringify(userInput)); //deep copy
    newUserInput[ev.target.id] = ev.target.value; //set new value dynamically
    setUserInput(newUserInput); //update state
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
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
        />
        <label htmlFor="email">Email address</label>
      </div>
      <div className="form-floating  mb-3">
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
