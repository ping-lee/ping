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
            isDark: false,
        };
    }
    
    render () {
        let { isOpen, isDark } = this.state;
        return (
            <div className="nav-sidebar-open" >
                <glamorous.Div className="wrapper" css={
                    isOpen ? {
                        transform: `translateX(320px)`,
                        position: `fixed!important`,
                        transition: `all 0.5s ease-in-out`,
                    } : {
                        transition: `all 0.5s ease-in-out`,
                        
                    }
                }
                >
                    <div style={
                        isOpen ?
                        {
                            position: 'absolute',
                            width: `100%`,
                            top: 0,
                            left: 0,
                            height: `100%`,
                            backgroundColor: `rgba(0,0,0,0.75)`,
                            zIndex: `999`,
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
                                    
                                <DarkModeToggle ph="15px" handleDark={() => this.setState({isDark: !isDark})} />
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
                                <li><span className="item"><Link to="/"><font color='#202121'>注册 / 登录</font></Link></span></li>
                                <li><span className="item">Home</span></li>
                                <li><span className="item">关于</span></li>
                                <li><span className="item">摄影</span></li>
                                <li><glamorous.A className="item" css={{
                                    ':after': {
                                        content: `attr(data-count)`,
                                        display: `block`,
                                        position: `absolute`,
                                        top: `50%`,
                                        right:`25px`,
                                        width: `24px`,
                                        height: `24px`,
                                        lineHeight: `24px`,
                                        fontSize: `11px`,
                                        fontWeight: 500,
                                        textAlign: `center`,
                                        backgroundColor: `#FEF7C1`,
                                        borderRadius: `50%`,
                                        transform: `translateY(-50%)`,
                                    }
                                }}
                                data-count= "6"
                                >仓库</glamorous.A></li>
                                <li><span className="item">工作 & 技能</span></li>
                                <li><glamorous.A className="item" css={{
                                    ':after': {
                                        content: `attr(data-count)`,
                                        display: `block`,
                                        position: `absolute`,
                                        top: `50%`,
                                        right:`25px`,
                                        width: `24px`,
                                        height: `24px`,
                                        lineHeight: `24px`,
                                        fontSize: `11px`,
                                        fontWeight: 500,
                                        textAlign: `center`,
                                        backgroundColor: `#9ceade`,
                                        borderRadius: `50%`,
                                        transform: `translateY(-50%)`,
                                    }
                                }}
                                data-count= "8"
                                >Blog</glamorous.A></li>

                                <li><span className="item">关于</span></li>
                                <li><span className="item">摄影</span></li>
                                <li><span className="item">关于</span></li>
                                <li><span className="item">摄影</span></li>
                            </ul>
                        </div>
                    </nav>
                    <div>
                        <header id="header" style={
                            isDark ?
                            {
                                backgroundColor: `#000`,
                            }
                            :
                            {
                                backgroundColor: `#f4f7f6`,
                            }
                        }>
                            <div className="header-main">
                                <div className="box-left">
                                    <div className="item bt-menu" onClick={() => this.setState({isOpen: !isOpen})}>
                                        <div className="ico-menu">
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                        </div>
                                        <span className="has-tablet"><font color='#202121'>菜单</font></span>
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
                                            <span>说出您的建议</span>
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