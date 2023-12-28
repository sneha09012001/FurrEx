import React from "react";
import "./footer.css";
import { FaceBook, Instagram, LinkedIn, Mail, Twitter, Youtube } from "../../res/Icons/Icon";

const Footer = () => {
    return(
      <div className="container footer">
        <div className="flex row px-2 py-4 wrap ">
            <div className="furrEx flex col gap-2 text-left">
                <a href="./" className="fw-800 fs-26">FurrEx</a>
                <p className="fw-400 fz-16 lh-24">Organic Mandya, started in 2015 with a mission to make Mandya a chemical-free district is a national-award winning farmer-centric organization that helps provide sustainable livelihoods to farmers and offers 100% honest organic produce to people.</p>
            </div>
            <div className="flex-1"></div>
            <div className="explore flex col gap-2 text-left">
              <span className="fw-500 fs-18">Explore</span>
              <a href="./">All Products</a>
              <a href="./">Staples</a>
              <a href="./">Fruits & Veggies</a>
              <a href="./">Personal Care</a>
              <a href="./">Ready to Eat & Cook</a>
              <a href="./">Wellness</a>
            </div>
            <div className="flex-1"></div>
            <div className="inbox flex col gap-2 text-left">
                <span  className="fw-500 fs-18">Get Our Insights In Your Inbox</span>
                <p>We will send an email every week or so. No spam ever.</p>
                <input placeholder="Email address" type="email" />
                <div><button>Sign up</button></div>
                
            </div>
            <div className="flex-1"></div>
            <div className="follow flex col gap-2 text-left">
            <span  className="fw-500 fs-18">Follow us</span>
            <div className="flex row gap-2">
             <a href="./"><FaceBook /></a>
             <a href="./"><Twitter /></a>
             <a href="./"> <Instagram /></a>
             <a href="./"><Youtube /></a>
             <a href="./"> <LinkedIn /></a> 
             <a href="./"><Mail /></a>
            </div>
            </div>
        </div>
        <div className="copyRight flex px-2 py-4 ">
            <span>Copyright © 2023 Organic Mandya.</span>
            <div className="flex-1"></div>
            <span>Powered by Shopify</span>

        </div>
      </div>
    )
}

export default Footer