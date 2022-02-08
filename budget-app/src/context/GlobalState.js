import { useMemo, useState } from "react";
import BudgetContext from "./BudgetContext";

function GlobalState({ children }) {
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

  const memoValue = useMemo(
    () => ({
      islogged,
      user,
      loginUser,
      logoutUser,
    }),
    [],
  );

  return (
    <BudgetContext.Provider value={memoValue}>
      {children}
    </BudgetContext.Provider>
  );
}

export default GlobalState;
