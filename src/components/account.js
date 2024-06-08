import React from "react";
import "../styles/account.css";
import Logo from "../assets/bg-logo.png";

export default function Account() {
    return (
        <div className="accountDiv">
            <div className="acc-head">
                <p>My Account</p>
            </div>
            <div className="profile p-style">
                <div className="p-img">
                    <img src={Logo} alt="profile" />
                </div>
                <div className="p-info">
                    <p id="p-name">Aravind Reddy Gudi</p>
                    <p id="p-mail">aravindreddygudi1603@gmail.com</p>
                </div>
            </div>
            <div className="p-more p-style">
                <p>Orders</p>
                <p className="arrow">→</p>
            </div>
            <div className="p-more p-style">
                <p>My Details</p>
                <p className="arrow">→</p>
            </div>
            <div className="p-more p-style">
                <p>Delivery Address</p>
                <p className="arrow">→</p>
            </div>
            <div className="p-more p-style">
                <p>Notifications</p>
                <p className="arrow">→</p>
            </div>
            <div className="logout">
                <p>Logout</p>
            </div>
        </div>
    );
};