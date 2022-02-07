import { useState } from "react";
import BudgetContext from "./BudgetContext";

function GlobalState(props) {
  const [islogged, setIslogged] = useState(
    JSON.parse(localStorage.getItem("Login")),
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("User")));

  const loginUser = (information) => {
    setUser(information);
    setIslogged(true);
    localStorage.setItem("Login", true);
    localStorage.setItem("User", JSON.stringify(information));
  };

  const logoutUser = () => {
    setIslogged(false);
    setUser({});

    localStorage.removeItem("Login");
    localStorage.removeItem("User");
  };

  return (
    <BudgetContext.Provider
      value={{
        islogged,
        user,
        loginUser,
        logoutUser,
      }}>
      {props.children}
    </BudgetContext.Provider>
  );
}

export default GlobalState;
