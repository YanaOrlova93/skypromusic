
import * as S from "./styles.js";
import { Link } from "react-router-dom";
import NavMenuList from "./navMenuList.jsx";
import React from "react";
const { useState } = React;


export default function NavMenu() {
  const [visible, setVisible] = useState(false);
  const activeBurger = () => setVisible(!visible);
  return (
    <S.NavMenu>
      <S.NavLogo>
        <Link to="/">
          <S.LogoImage src="/img/logo.png" alt="logo" />
        </Link>
      </S.NavLogo>
      <S.NavBurger onClick={activeBurger}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {visible ? <NavMenuList /> : ""}
    </S.NavMenu>
  );
}
