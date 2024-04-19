import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search  from "./Search/Search";
import  Cart  from "../Cart/Cart";
import {Context}  from "../../utils/context";
import "./Header.scss";

const Header = () => {
  const [scrolled, setScroll] = useState(false);
  const [showcart, setShowCart] = useState(false);
  const [showsearch, setShowSearch] = useState(false);
  const {cartCount} = useContext(Context);

  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const scrollerY = () => {
    window.scrollTo(0,500)
  }
  const scrollerY2 = () => {
    window.scrollTo(0,5000)
  }
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""} `}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={scrollerY2}>About</li>
            <li onClick={scrollerY}>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>SHOP-HUB</div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            {/* <AiOutlineHeart /> */}
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showcart && <Cart setShowCart={setShowCart} />}
      {showsearch && <  Search  setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
