import React from "react";
import { useState } from "react";
import "./productList.css";
import Header from "./Components/Heater/header";
import Footer from "./Components/Footer/footer";
import Product from "./Components/Product";
import image from "./res/Images/placeholder.png";
import { Add, Like, Share, Sub } from "./res/Icons/Icon";

const ProductList = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }
  
    const  decrement = ()  => {
      setCount(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1); 
        } else {
          return (prevCount = 0);
        }
      });
    }
    const [active, setActive] = useState(false);
        const handleClick = () => {
            setActive(!active);
        };
    return(
        <div >
         <Header />
         <div className="container  px-2 py-4 flex r col gap-4">
            <div className="productList flex row gap-4  wrap ">
                <div className="listImage flex col wrap gap-4">
                    <div className="productListImg col wrap ">
                    <img src={image} alt="" />
                    </div>
                    <div className="productListImage2 flex row gap-2 middle center">
                    <img src={image} alt="" />
                    <img src={image} alt="" />
                    <img src={image} alt="" />
                    </div>
                </div>
                <div className="imageDetails  flex col gap-2">
                    <div className="flex row ">
                        <span className="fw-500 fs-28">Papaya Raw (1 KG)</span>
                        <div className="flex-1"></div>
                        <div className="flex row gap-1">
                            <button className="like" onClick={handleClick}
                             style={{ color: active ? "black" : "white" ,width:"24px",height:"24px"}} ><Like /></button>
                            <button style={{width:"24px",height:"24px"}}><Share /></button>
                        </div>
                    </div>
                    <div className="owner">
                    <h6 className="fw-400 fs-14"> by  <span>Organic Mandya</span></h6> 
                    </div>
                    <div className="productCase flex row gap-6 middle">
                    <div className="flex row">Rs.<span>150.00</span></div>
                    <p>Rs 30.00 Cashback</p>
                </div>
                <div className="addItem flex row gap-2">
                    <div className="subBox flex middle center" onClick={decrement}><Sub /></div>
                    <span className="flex middle center">{count}</span>
                    <div className="addBox flex middle center" onClick={increment}><Add /></div>

                </div>
                <div className="chat flex roe gap-1">
                    <button className="chatButton">Chat</button>
                    <button className="callButton">Call</button>

                </div>
                <div><hr></hr></div>
                <div>
                    <p>Each product presented here is 100% Organic and Non GMO.Please don’t worry about the quality when you order our fruits and veggies online we will hand-pick whatever you order and ensure you get nothing but the best.</p>
                </div>
                
                </div>
            </div>
            <div className="homeproduct flex col gap-4 py-4  ">
                    <div className="flex row">
                        <h2 className="fw-500 fs-24">Organic Fruits, Veggies & Greens</h2>
                        <div className="flex-1"></div>
                        <span>see more</span>
                    </div>
                    <div className="homeProductItem">
                        <Product />
                    </div>

                </div>
         </div>
         <Footer />
        </div>
    )
}

export default ProductList