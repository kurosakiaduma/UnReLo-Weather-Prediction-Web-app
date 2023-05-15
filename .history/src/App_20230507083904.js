import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import WeatherDataGrid from "./pages/Weatherdata";
import Home from "./pages/Home";
import { auth } from "./fire";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        if (authenticatedUser) {
          setUser(authenticatedUser.email);
        } else {
          setUser(null);
        }
        setIsLoading(false);
      }
    );

    return unSubscribeAuth;
  }, []);

  if (isLoading)
    return <div className="font-bold text-center text-5xl">loading...</div>;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? (
            <Home user={user} setUser={setUser} />
          ) : (
            <Login setUser={setUser} />
          )}
        </Route>
        <Route path="/register">
          <Register setUser={setUser}/>
        </Route>
        <Route path="/weatherdata">
            {user ? <WeatherDataGrid user={user} setUser={setUser}/> : <Login setUser={setUser}/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
