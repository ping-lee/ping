import React from 'react';
//import { gsap, CSSPlugin, TweenLite, Linear } from 'gsap';
//import CSSRulePlugin from 'gsap/CSSRulePlugin';
import glamorous from 'glamorous';
import { Link } from 'gatsby';
import DarkModeToggle from './darkmodetoggle'
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
            <div className="nav-sidebar-open" >
                <glamorous.Div className="wrapper" css={
                    isOpen ? {
                        transform: `translateX(320px)`,
                        position: `fixed!important`,
                        transition: `all 0.5s ease-in-out`,
                    } : {
                        
                    }
                }
                >
                    <div style={
                        isOpen ?
                        {
                            display: 'block',
                            position: 'absolute',
                            width: `100%`,
                            top: 0,
                            left: 0,
                            height: `100%`,
                            backgroundColor: `rgba(0,0,0,0.75)`,
                            zIndex: `400`,
                            transition: `all 0.5s ease-in-out`,
                        }
                        :
                        {
                            transition: `all 0.5s ease-in-out`,
                        }
                    }
                    onClick={() => {if (isOpen) this.setState({isOpen: false})}}
                    ></div>
                    <nav id="nav-main" className="nav-main" >
                        <div className="top">
                            <div className="header">
                                <div className="pull-left">
                                    
                                <DarkModeToggle ph="15px" />
                                </div>
                                <div className="pull-right" onClick={() => {if (isOpen) this.setState({isOpen: false})}}>
                                    <glamorous.Div className="bt-close text-uppercase" css={{
                                        ':before': {
                                            content: ' ',
                                            position: 'absolute',
                                            top: '33px',
                                            right: '27px',
                                            width: '20px',
                                            height: '3px',
                                            background: '#202121',
                                            transform: 'rotate(45deg)',
                                            
                                        },
                                        ':after': {
                                            content: ' ',
                                            position: 'absolute',
                                            top: '33px',
                                            right: '27px',
                                            width: '20px',
                                            height: '3px',
                                            background: '#202121',
                                            transform: 'rotate(-45deg)',
                                            
                                        }
                                    }}>
                                        <font color='#202121'>关闭</font>
                                    </glamorous.Div>
                                </div>
                            </div>
                            <ul id="menu-main" className="menu">
                                <li><span className="item open-login"><Link to="/"><font color='#202121'>Register / Log in</font></Link></span></li>
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
                    <div>
                        <header id="header">
                            <div className="header-main">
                                <div className="box-left">
                                    <div className="item bt-menu" onClick={() => this.setState({isOpen: !isOpen})}>
                                        <div className="ico-menu">
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                        </div>
                                        <span className="has-tablet">菜单</span>
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
                                            <a className="text-black open-login" href="/login">注册 / 登录</a>
                                        </strong>
                                    </div>
                                    <div id="bt-submit" className="item has-tablet">
                                        <a className="button button-large" href="/submit/">
                                            <span>提交您的网站</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="logo-header">
                                    
                                </div>
                            </div>
                        </header>
                        <section id="content">
                            <div className="content-view">
                                <div className="block">
                                    <div className="inner width-2">
                                    {this.props.children}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </glamorous.Div>
            </div>
        )
    }
}

export default Awwwards;