import React from "react";
import "./header.css";

const Header = () => {
    return(
       <div className="Header container">
        <div className="flex row gap-4 middle center p-4">
            <a href="./">home</a><a href="./productpage">product</a><a href="./productList">product list</a><a href="./aboutUs">AboutUs</a><a href="./contact">Contact</a>

        </div>
       </div>
    )
}

export default Header