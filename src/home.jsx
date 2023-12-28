import React from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react"
import Header from "./Components/Heater/header";
import Footer from './Components/Footer/footer'
import Product from './Components/Product'
import { Banner1 } from "./res/Images/image";
import './home.css';
import { homeProductdata } from "./homedata";
import { Arrow} from "./res/Icons/Icon";



const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })
 
    return(
        <div>
            <Header />
            <div className="container home px-2 py-8">
                <div className=" keen-slider homeBanner flex " ref={sliderRef} >
                    <div className="bannerBox flex keen-slider__slide number-slide1">
                        <img src={Banner1} alt=" " />
                        <div className="bannerbg flex col gap-2 px-8 text-left ">
                            <p>In our mission to make organic produce accessible to all, rich or modest. With community buying</p>
                            <span>Join us, sow seeds of change, and let's nourish both the land and spirits together.</span>
                            <div><button>Shop Now</button></div>
                  </div>
                    </div>
                    <div className="bannerBox flex keen-slider__slide number-slide1 ">
                        <img src={Banner1} alt=" " />
                        <div className="bannerbg flex col gap-2 px-8 text-left ">
                            <p>In our mission to make organic produce accessible to all, rich or modest. With community buying</p>
                            <span>Join us, sow seeds of change, and let's nourish both the land and spirits together.</span>
                            <div><button>Shop Now</button></div>
                  </div>
                    </div>
                    {loaded && instanceRef.current && (
          <>
          <div className="flex middle center">
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <div className="flex-1"></div>

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
            </div>
          </>
        )}
      
                    
                </div> 
                <div className="homeItem flex row gap-2 py-6">
                {homeProductdata && homeProductdata.length && homeProductdata.map((homeProductdata,index) => (
                    <div className="item flex col gap-2"  key={`productdata_${index}${homeProductdata}`}>
                        <img src={homeProductdata?.homeimg} alt="" />
                        <span>{homeProductdata?.homename}</span>
                    </div>
                ))}
                </div>
                <div className="homeproduct flex col gap-4 ">
                    <div className="flex row">
                        <h2 className="fw-500 fs-24">Organic Fruits, Veggies & Greens</h2>
                        <div className="flex-1"></div>
                        <span>see more</span>
                    </div>
                    <div className="homeProductItem ">
                        <Product />
                    </div>

                </div>
                <div className="homeBuyNow py-6 ">
                    <div className="buyNow flex col gap-2 px-6 center text-left">
                    <span>Jouw weg naar duurzame promotie</span>
                    <p className="fw-400 fs-24">Maak indruk en draag bij aan een duurzame wereld met onze milieuvriendelijke producten.</p>
                    <div> <button>Buy Now</button></div>
                    </div>
                </div>
                <div className="homeproduct flex col gap-4 ">
                    <div className="flex row">
                        <h2 className="fw-500 fs-24">Organic Fruits, Veggies & Greens</h2>
                        <div className="flex-1"></div>
                        <span>see more</span>
                    </div>
                    <div className="homeProductItem">
                        <Product />
                    </div>

                </div>
                <div className="homeproduct flex col gap-4 py-6">
                    <div className="flex row">
                        <h2 className="fw-500 fs-24">Organic Fruits, Veggies & Greens</h2>
                        <div className="flex-1"></div>
                        <span>see more</span>
                    </div>
                 
                    <div className="homeProductItem">
                    
                  
                        <Product />
                    </div>
                   

                </div>
                <div className="homeEmail">
                    <div className="emailBox flex row middle center text-left  px-4 ">
                        <p>Schrijf in voor de nieuwsbrief en ontvang een kortingscode!</p>
                        <div className="flex-1"></div>
                        <div className="inputBox flex middle center">
                            <input placeholder="Email address" type="email" />
                            <div className="flex-1"></div>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
           <Footer />
        </div>
    )
}
export default Home