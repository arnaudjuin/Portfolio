import React from 'react';
import {FaInstagram ,FaGithub, FaFacebookF , FaLinkedinIn, FaBehance} from "react-icons/fa";

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/arnaudjuin/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/arnaud.juin'},
    {Social: <FaBehance /> , link: 'https://www.behance.net/arnaudjuin1818'},
    {Social: <FaGithub /> , link: 'https://github.com/arnaudjuin.com/'},
]

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--30 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p>Copyright © 2020 Arnaud JUIN. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterTwo;
