import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { signIn } from "./auth";
import AuthRoute from "./components/AuthRoute";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const logout = () => setUser(null);

  const login = ({ email, password }) => setUser(signIn({ email, password }));

  return (
    <Router>
      <Header authenticated={authenticated} logout={logout} />
      <hr />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/login"
            render={(props) => (
              <LoginForm
                authenticated={authenticated}
                login={login}
                {...props}
              />
            )}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={(props) => <Profile user={user} {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
