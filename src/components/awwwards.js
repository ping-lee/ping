import React from 'react';
//import { gsap, CSSPlugin, TweenLite, Linear } from 'gsap';
//import CSSRulePlugin from 'gsap/CSSRulePlugin';
import glamorous from 'glamorous';
import { Link } from 'gatsby';
import '../styles/awwwards.css';

//gsap.registerPlugin(CSSPlugin, CSSRulePlugin); 

class Awwwards extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    
    render () {
        let { isOpen } = this.state;
        return (
            <div className="nav-sidebar-open" onClick={() => {if (isOpen) this.setState({isOpen: false})}}>
                <glamorous.Div className="wrapper" css={
                    isOpen ? {
                        transform: `translateX(320px)`,
                        position: `fixed!important`,
                        transition: `all 0.5s ease-in-out`,
                        ':before' : {
                            content: ' ',
                            display: 'block',
                            position: 'absolute',
                            width: `100%`,
                            height: `100%`,
                            backgroundColor: `rgba(0,0,0,0.75)!important`,
                            zIndex: `400!important`
                        },
                        
                    } : {
                        transition: `all 0.5s ease-in-out`
                    }
                } 
                >
                    <nav id="nav-main" className="nav-main">
                        <div className="top">
                            <div className="header"></div>
                            <ul id="menu-main" className="menu active">
                                <li><span className="item open-login"><Link to="/hh">Register / Log in</Link></span></li>
                                <li><span className="item open-login">Home</span></li>
                                <li><span className="item open-login">Winners</span></li>
                                <li><span className="item open-login">Nominees</span></li>
                                <li><span className="item open-login">Collections</span></li>
                                <li><span className="item open-login">Professional directory</span></li>
                                <li><span className="item open-login">Jobs & Talent</span></li>
                                <li><span className="item open-login">Blog</span></li>
                                <li><span className="item open-login">eBooks & Publications</span></li>
                                <li><span className="item open-login">About Us</span></li>
                                <li><span className="item open-login">Conferences</span></li>
                                <li><span className="item open-login">About Us</span></li>
                            </ul>
                        </div>
                    </nav>
                    <header id="header">
                        <div className="header-main">
                            <div className="box-left">
                                <div className="item bt-menu" onClick={() => this.setState({isOpen: !isOpen})}>
                                    <div className="ico-menu">
                                        <div className="bar"></div>
                                        <div className="bar"></div>
                                        <div className="bar"></div>
                                    </div>
                                    <span className="has-tablet">MENU</span>
                                </div>
                            </div>
                            <div className="box-right">
                                <div id="js-search-container" className="item bt-search">
                                    <svg className="ico-svg" viewBox="0 0 14 14">
                                        <path d="M14,12.383l-2.73-2.73c0.678-0.99,1.078-2.188,1.078-3.479C12.348,2.77,9.578,0,6.174,0 C2.77,0,0,2.77,0,6.173c0,3.405,2.77,6.174,6.174,6.174c1.29,0,2.486-0.398,3.478-1.078l2.73,2.73L14,12.383z M1.759,6.173 c0-2.434,1.98-4.415,4.415-4.415c2.433,0,4.414,1.98,4.414,4.415s-1.98,4.415-4.414,4.415C3.739,10.588,1.759,8.607,1.759,6.173"></path>
                                    </svg>
                                </div>
                                <div className="item login">
                                    <strong>
                                        <a className="text-black open-login" href="/login">Register / log in</a>
                                    </strong>
                                </div>
                                <div id="bt-submit" className="item has-tablet">
                                    <a className="button button-large" href="/submit/">
                                        <span>SUBMIT YOUR SITE!</span>
                                    </a>
                                </div>
                            </div>
                            <div className="logo-header">
                                <a>
                                <svg width="141" height="22.3" viewBox="0 0 280 44.3">
                                    <path className="logo-fill" id="logo-a1" d="M1.2,20.8c1-5.1,5.5-8.7,11.9-8.7c7.4,0,13.1,3.1,13.1,13.1v18.6h-6.3l-0.8-4c-2.2,2.7-5.1,4.5-9.6,4.5 C4.2,44.3,0,41,0,34.8s5.5-10.2,13.3-10.2h5.2v-1.4c0-3.5-2.6-4.6-5.5-4.6c-2.2,0-4.4,0.7-5.4,3.6L1.2,20.8z M11.3,37.8 c3.5,0,7.2-2.4,7.2-6.4v-0.6h-5.1c-3.3-0.1-5.3,1.2-5.3,3.9C8.1,36.2,9.2,37.8,11.3,37.8z"></path>
                                    <path className="logo-fill" id="logo-a2" d="M151,20.8c1-5.1,5.5-8.7,11.9-8.7c7.4,0,13.1,3.1,13.1,13.1v18.6h-6.3l-0.8-4c-2.2,2.7-5.1,4.5-9.6,4.5 c-5.3,0-9.5-3.3-9.5-9.5s5.5-10.2,13.3-10.2h5.2v-1.4c0-3.5-2.6-4.6-5.5-4.6c-2.2,0-4.4,0.7-5.4,3.6L151,20.8z M161.1,37.8 c3.5,0,7.2-2.4,7.2-6.4v-0.6h-5.1c-3.3,0-5.3,1.2-5.3,4C157.9,36.2,159,37.8,161.1,37.8z"></path>
                                    <path className="logo-fill" id="logo-r" d="M183,43.9V12.6h7.7v5.1c2.2-3.7,5.7-5.6,9.2-5.6c1.4,0,2.5,0.2,3.8,0.6l-1.4,7.1c-0.9-0.6-1.9-0.9-3.2-0.9 c-4.5,0-8.4,3.7-8.4,13.8v11.1L183,43.9L183,43.9z"></path>
                                    <path className="logo-fill" id="logo-d" d="M220.1,12.1c3.2,0,6.2,1.6,7.6,3.3V0h7.7v43.9h-7.7v-3.2c-0.9,1.6-3.7,3.7-7.6,3.7c-9.4,0-14.2-6.5-14.2-16.1 S210.7,12.1,220.1,12.1z M221.2,37.8c4,0,7.2-3.3,7.2-9.5s-3.2-9.5-7.2-9.5s-7.2,3.3-7.2,9.5S217.2,37.8,221.2,37.8z"></path>
                                    <path className="logo-fill" id="logo-s" d="M263.2,17.1l-4.6,4.2c-1.4-1.9-3.5-2.7-5.2-2.7c-1.5,0-2.9,0.9-2.9,2.6c0,1.4,1.1,2.4,3,3 c4.3,1.6,11.3,2.9,11.3,9.6c0,5.7-4.3,10.4-11.1,10.4c-6.5,0-10.9-4.6-12.4-8.4l6.1-3.3c1.1,3,3.2,5.2,6.3,5.2 c2.4,0,3.9-1.1,3.9-3.4c0-2.6-4-3.2-7.8-4.8c-3.4-1.4-6.3-3.6-6.3-8.4s3.9-9.1,10-9.1C257.6,12,261.3,14.1,263.2,17.1z"></path>
                                    <polygon className="logo-fill" id="logo-w2" points="103,12.6 97.5,34.1 92.2,12.6 85,12.6 79.8,34.1 75.4,21.6 74.9,23.1 72.4,31.1 76.4,43.9 83.2,43.9  88.6,23.7 94,43.9 100.8,43.9 110.8,12.6"></polygon>
                                    <polygon className="logo-fill" id="logo-w3" points="140.2,12.6 134.6,34.1 129.3,12.6 122.1,12.6 116.9,34.1 112.5,21.6 112,23.1 109.5,31.1 113.5,43.9  120.3,43.9 125.7,23.7 131.1,43.9 137.9,43.9 147.9,12.6"></polygon>
                                    <path className="logo-fill" id="logo-w1" d="M73.7,12.6l-10,31.2h-6.8l-5.4-20.2l-5.4,20.3h-6.8l-10-31.2h7.8l5.6,21.4L48,12.7h7.1l5.3,21.4L66,12.7 L73.7,12.6L73.7,12.6z"></path>
                                    <path className="logo-fill" id="logo-p" d="M274.8,33.8c3,0,5.2,2.2,5.2,5.2s-2.2,5.2-5.2,5.2s-5.2-2.2-5.2-5.2S271.9,33.8,274.8,33.8z"></path>
                                </svg>
                                </a>
                            </div>
                        </div>
                    </header>
                    <section id="content">
                        <div className="content-view">
                            <div className="block block-header">
                                <img src="https://assets.awwwards.com/assets/images/pages/mobile-guideline/mobile-certificate.png" alt="Certificate" className="cover" />
                                <div className="inner">
                                    <div className="box-title">
                                        <h1>Mobile Guidelines</h1>
                                        <p>Mobile Friendliness, Performance, Best Practices / PWA and Usability guidelines documentation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="inner width-2">
                                {this.props.children}
                                </div>
                            </div>
                        </div>
                    </section>
                </glamorous.Div>
            </div>
        )
    }
}

export default Awwwards;