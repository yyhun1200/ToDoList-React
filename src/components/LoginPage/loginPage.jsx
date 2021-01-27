import React from "react";
import { styles } from "./loginPage.module.css";

const LoginPage = (props) => (
  <div className="container">
    <h1>To Do List</h1>
    <form action="submit">
      <input type="email" />
      <input type="password" />
    </form>
  </div>
);

export default LoginPage;
