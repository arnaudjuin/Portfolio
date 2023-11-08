import React, { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import ServiceList from "../elements/service/ServiceList";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio"
import LoadingOverlay from 'react-loading-overlay'
import RingLoader from 'react-spinners/RingLoader'




const SlideList = [
    {
        textPosition: 'text-right',
        category: '',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]

const PortfolioLanding = () => {

    let title = 'About Me',
        description = "Im, a freelance Full Stack developer and product manager currently based in Paris, France. For several years I have been designing and implementing disruptive solutions for modern, usable interfaces for the web and mobile apps with clients from different business areas! I am strongly passionate about new technologies, design thinking and social activities. I am often praised for my abilities to create with perfectionism. Very interested in exploring innovation an ethical change happening in the internet of things and data science. Surfer and kiter on my free time.";
    var [counter, setCounter] = React.useState(0);

// First Attempts
setInterval(() => setCounter(counter + 2), 2000);
    return (

        <div className="active-dark">
        <LoadingOverlay
        spinner={<RingLoader  color={"#800000"} size={50}/>}
          active={!counter}
          fadeSpeed={500}

          >
            <Helmet pageTitle="Portfolio Landing" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">

                <div className="slider-wrapper"  style={{height: "100vh"}}>
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1  style={{marginTop: "-500px"}} className="title">Hi, I’m Arnaud JUIN <br/>
                                            <TextLoop>
                                                <span>a designer.</span>
                                                <span>an entrepreneur.</span>
                                                <span>an engineer.</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */}
            </LoadingOverlay>


            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-8.png" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* End About Area */}

            {/* Start Service Area  */}
            <div id="service" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">How can I help you ?</h2>
                                    <p>Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.</p>
                                    <p>Antoine de Saint-Exupéry, Airman's Odyssey</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Area  */}

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
            {/* Start Portfolio Area */}
            <div className="portfolio-area ptb--120 bg_color--1">
                <div className="portfolio-sacousel-inner mb--55">
                    <Portfolio />
                </div>
            </div>
            </div>
            {/* End Portfolio Area */}



            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <ContactThree contactImages="/assets/images/about/about-9.jpg" contactTitle="Let's chat !   " />
                </div>
            </div>
            {/* End COntact Area */}

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

        </div>

    )
}

export default PortfolioLanding;
