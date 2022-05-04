// import logo from './logo.svg';
import React, {useState} from 'react';
import Home  from './pages/home';
import LoginForm from './components/LoginForm';
import './App.css';
// import Login from './pages/login';
// import {BrowserRouter as  Router, Switch, Route, Link, NavLink} from "react-router-dom";

function App() {
  const adminUser = {
    email:"admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password)
      {
      console.log("Logged in");
      setUser({
        name:details.name,
        email:details.email
      })
      }
      else
      {
        console.log("Not Logged in");
        setError("Not Logged in");
      }
  }

  const Logout = () => {
    console.log("Logout");
  }


  return (
    <div className="App">
      {(user.email != "") ? (
        <Home />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}

    </div>
  );
}

export default App;
