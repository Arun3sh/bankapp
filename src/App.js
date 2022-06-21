import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useState, createContext } from "react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navigationbar from "./components/Navbar/Navigationbar";
import { Route, Switch, useLocation } from "react-router-dom";
import Login from "./components/Login/Login";
import Createaccount from "./components/Customer/CreateAccount/Createaccount";

export const authContext = createContext(null);

function App() {
  const [login, setLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const location = useLocation();
  const modes = {
    login: login,
    setLogin: setLogin,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
    isAdmin: isAdmin,
    setIsAdmin: setIsAdmin,
  };

  return (
    <authContext.Provider value={modes}>
      <div className="App">
        {location.pathname !== "/login" &&
          location.pathname !== "/create-account" && <Navigationbar />}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create-account">
            <Createaccount />
          </Route>
        </Switch>
        {location.pathname !== "/login" &&
          location.pathname !== "/create-account" && <Footer />}
      </div>
    </authContext.Provider>
  );
}

export default App;
