import React from "react";
import { useState } from "react";
import "./productpage.css";
import Header from "./Components/Heater/header";
import Footer from "./Components/Footer/footer";
import AllProduct from "./Components/AllProduct"
import { Banner1 } from "./res/Images/image";
import { Box, Star, Tick } from "./res/Icons/Icon";


const ProductPage = () => {
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    // const handleClick = () => {
    //   setActive(!active);
    // };
    
    return(
        <div>
            <Header />
            <div className="productPage container px-2 ">
                <div className="productBanner  flex middle center py-4 ">
                    <div className="bannerImg">
                        <img src={Banner1} alt="" />
                    </div>
                    <div className="bannerBox flex col gap-2 middle center">
                        <span>Fruits, Vegggies, & Greens</span>
                        <p className="fw-400 fs-16">We deliver the basket of health to you</p>

                    </div>
                </div>
                <div className="productOverview flex row gap-3 py-4">
                    <div className="productDescription flex col gap-4 p-2 ">
                        <div className="categories flex col gap-2 ">
                            <span>All Categories</span>
                            <div className="categoriesList flex col gap-1">
                                <p>Rice & Cereals <span>(25)</span> </p>
                                <p>Rice & Cereals <span>(25)</span> </p>
                                <p>Rice & Cereals <span>(25)</span> </p>
                                <p>Rice & Cereals <span>(25)</span> </p>
                                <p>Rice & Cereals <span>(25)</span> </p>
                                <p>Rice & Cereals <span>(25)</span> </p>
                                <p>Rice & Cereals <span>(25)</span> </p>
                                <p>Rice & Cereals <span>(25)</span> </p>
                                <p>Rice & Cereals <span>(25)</span> </p>
                                <p>Rice & Cereals <span>(25)</span> </p>
                            </div>

                        </div>
                        <div className="range flex col gap-2">
                            <span>Price</span>
                            <input type="range" />
                            <span> Rs 100- Rs1000</span>
                        </div>
                        <div className="rating flex col gap-2" >
                            <span>Rating</span>
                            <div className="flex row gap-1"><button  onClick={() => {setActive(!active)}} 
                              >{active ? <Tick /> : <Box /> }</button>
                            <Star /></div>
                            <div className="flex row gap-1"><button  onClick={() => {setActive1(!active1)}}>{active1 ? <Tick /> : <Box /> }</button>
                            <Star /><Star /></div>
                            <div className="flex row gap-1"><button  onClick={() => {setActive2(!active2)}}>{active2 ? <Tick /> : <Box /> }</button>
                            <Star /> <Star /> <Star /></div>
                            <div className="flex row gap-1">
                            <button  onClick={() => {setActive3(!active3)}}>{active3 ? <Tick /> : <Box /> }</button> <Star /><Star /> <Star /> <Star /></div>
                            <div className="flex row gap-1"><button  onClick={() => {setActive4(!active4)}}>{active4 ? <Tick /> : <Box /> }</button>
                             <Star /> <Star /> <Star /> <Star /> <Star /></div>
                        </div>
                        <div className="flex-1"></div>
                        <button>Reset Filter</button>
                    </div>

                    <div className="productDetails  flex col gap-4 ">
                        <div className="details flex  ">
                            <p>Viewing <span >16 </span> of<span  > 160</span>  product</p>
                            <div className="flex-1"></div>
                            <p>Sort by:<span>Newest Items</span> </p>
                        </div>
                     <AllProduct />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ProductPage