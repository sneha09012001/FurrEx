import React from "react";
import { productdata } from "./data";
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LeftArrow,RightArrow } from "../../res/Icons/Icon";


const Product = () => {
    const CustomRightArrow = ({ className, onClick }) => (
        <div className={className} onClick={onClick}>
          <RightArrow />
        </div>
      );
    
      const CustomLeftArrow = ({ className, onClick }) => (
        <div className={className} onClick={onClick}>
          <LeftArrow />
        </div>
      );
    

    const settings = {
        infinite:true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        prevArrow: <CustomLeftArrow className="slick-prev" />,
        nextArrow: <CustomRightArrow className="slick-next" />,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 1366,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 1320,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            }, 
            {
              breakpoint: 1112,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                rows: 1,
              },
            },
            {
              breakpoint: 845,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 1,
              },
            },
            {
              breakpoint: 585,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
              },
            },
          ],
    }
   
    return(
        
      <div className="container product ">
        <Slider {...settings} className="slider">
       
         
    {productdata && productdata.length && productdata.map((productdata,index) => (
       
        
        <div className="productBox  " key={`productdata_${index}${productdata}`}>
            
            <div className="flex col" >
                <img src={productdata?.productimg} alt="" />
                <div className="flex col gap-2 text-left p-1">
                <div className="product-name flex col gap-1 ">
                <p>{productdata?.productname}</p>
                <span>{productdata?.productweight}</span>
                </div>
                <h6>{productdata?.productOwner}</h6>
                <div className="productCase flex row gap-1 middle">
                    <span className="flex row">Rs.<div>{productdata?.productamount}</div></span>
                    <p>{productdata?.productcaseback}</p>
                </div>
                <button>Buy Now</button>
                </div>
                </div>   
            
            </div>
           
            
        ))}
         </Slider>
           
        </div>
       
    )
}
export default Product