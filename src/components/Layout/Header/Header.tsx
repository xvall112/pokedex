import React from "react";
import { NavLink, Link } from "react-router-dom";
import style from "./Header.module.scss";
import logo from "../../../assets/Pokedex_logo.png";
const Header = () => {
  return (
    <>
      <nav className={style.nav}>
        <Link to={`/`}>
          <img src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  borderTop: isActive ? "2px solid #FCFCFC" : "",
                };
              }}
              to={`about`}
            >
              O nás
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  borderTop: isActive ? "2px solid #FCFCFC" : "",
                };
              }}
              to={`/`}
            >
              Pokémoni
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
