import * as React from 'react';
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './fire';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  
  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState('login');

  React.useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth,
      async authenticatedUser => {
        if(authenticatedUser) {

          setUser(authenticatedUser.email)
          setAuthState('login');
        } else {
          setUser(null);
          setAuthState('home')
        }
      })

      return unSubscribeAuth;
  }, [user]);

  if(authState === null) return <div className='font-bold text-center text-5xl'>loading...</div>

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {authState === 'login' && <Login setAuthState={setAuthState} setUser={setUser}/>}
          {authState === 'register' && <Register setAuthState={setAuthState} setUser={setUser}/>}
          {user && <Home user={user} setAuthState={setAuthState} setUser={setUser}/>}
        </Route>
        <Route path="/login">
          <Login setAuthState={setAuthState} setUser={setUser}/>
        </Route>
        <Route path="/register">
          <Register setAuthState={setAuthState} setUser={setUser}/>
        </Route>
        <Route path="/home">
          {user && <Home user={user} setAuthState={setAuthState} setUser={setUser}/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
