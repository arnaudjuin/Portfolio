import React, { Component } from "react";
import Slider from "react-slick";

const portfolioSlick2 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [{
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 993,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 769,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 481,
        settings: {
            slidesToShow: 1,
        }
    }
]
};

const PortfolioList = [
    {
        images: '5',
        category: 'Full-Stack Developer',
        title: 'Everycheck - Real Estate',
        url : "https://www.everycheck.com/"
    },
    {
        images: '1',
        category: 'Full-Stack Developement',
        title: 'Squadeasy - Sport',
        url : "https://squadeasy.com/app/fr/home"
    },
    {
        images: '2',
        category: 'Designer',
        title: 'SpotMyDive - Tourisme',
        url : "https://www.spotmydive.com/fr/"
    },
    {
        images: '3',
        category: 'Product Owner',
        title: 'Beepings - IoT',
        url : "https://beepings.com/fr/"
    },
    {
        images: '4',
        category: 'Product Owner',
        title: 'Coinhouse - Cryptocurrencies',
        url : "https://www.coinhouse.com/fr/"
    },
    {
        images: '6',
        category: 'Lapin',
        title: 'Cofounder - Restoration',
        url : "https://www.pasdelapin.fr/"
    },
]

class Portfolio extends Component{
    render(){
        let title = 'My Work',
        description = 'I am passionated about building remarkable interfaces that improves the lives of those around me.';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                    <img className="w-100" src={`/assets/images/portfolio/portfolio-${value.images}.jpg`} alt="Portfolio Images"/>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href={value.url}>View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;
