import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";

import "./Footer.scss";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Unleash the potential of technology with our range of products. From
            headphones that make your favorite music sound better than ever to
            smartwatches that keep you connected while looking sleek, we've got
            your tech needs covered. And when it's time to enjoy your music out
            loud, our Bluetooth speakers are designed to impress.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Railway Station Road, Usmanpura, Ch. Sambhajinagar, Maharashtra,
              431001
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone : 0000 000 0000</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: shophub@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text" >HeadPhones</span>
          <span className="text" >Smart Watches</span>
          <span className="text" >Bluetooth Speakers</span>
          <span className="text" >Wireless Earbuds</span>
          {/* <span className="text">Home Theatre</span>
          <span className="text">Projectors</span> */}
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            GROUP NO: 11
            <br />- E-COMMERCE PROJECT - <br /> BY <br />Mihir Chapalgaokar(MC22F14F013) ■ Parth Kalekar(MC22F14F033) ■ Ekta Khandare(MC22F14F039) ■ Akshata Khandare(MC22F14F041) .
          </div>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
