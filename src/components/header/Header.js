import React,{useContext} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import AppContext,{DefaultConfiguration} from '../../AppContext';

function Header(props) {
    let configuration=useContext(AppContext);
    let links=configuration.header.links||DefaultConfiguration.header.links;
    let socials=configuration.header.socials||DefaultConfiguration.header.socials;

    return (
        <React.Fragment>
            <header className="mkdf-page-header">
                <div className="mkdf-fixed-wrapper">
                    <div className="mkdf-menu-area">
                        <div className="mkdf-vertical-align-containers">
                            <div className="mkdf-position-center">
                                <div className="mkdf-position-center-inner">
                                    <nav className="mkdf-main-menu mkdf-drop-down mkdf-divided-left-part mkdf-default-nav">
                                        <ul id="menu-divided-left-menu" className="clearfix">
                                            {
                                                links.left.map((link,index)=>
                                                    <li key={`nav-menu-item-${index}`}
                                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children has_sub narrow">
                                                        <Link to={link.href}>
                                                            <span className="item_outer">
                                                                <span className="item_text">{link.text}</span>
                                                            </span>
                                                        </Link>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </nav>
                                    <div className="mkdf-logo-wrapper">
                                        <Link to="/">
                                            <div className="logo">Travelorie</div>
                                        </Link>
                                    </div>
                                    <nav className="mkdf-main-menu mkdf-drop-down mkdf-divided-right-part mkdf-default-nav">
                                        <ul id="menu-divided-right-menu" className="clearfix">
                                            {
                                                links.right.map((link,index)=>
                                                    <li key={`nav-menu-item-${index}`}
                                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children has_sub narrow">
                                                        <Link to={link.href}>
                                                            <span className="item_outer">
                                                                <span className="item_text">{link.text}</span>
                                                            </span>
                                                        </Link>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="mkdf-position-right">
                                <div className="mkdf-divided-right-widget-area">
                                    <div className="mkdf-divided-right-widget-area-inner">
                                        <div className="mkdf-position-right-inner-wrap">
                                            {
                                                socials.map((social,index)=> 
                                                    <a key={index} className="mkdf-social-icon-widget-holder mkdf-icon-has-hover"
                                                        href={social.href} target="_blank" rel="noopener noreferrer">
                                                        <span className={`mkdf-social-icon-widget ${social.icon}`}></span>
                                                    </a>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="mkdf-mobile-header">
                <div className="mkdf-mobile-header-inner">
                    <div className="mkdf-mobile-header-holder">
                        <div className="mkdf-vertical-align-containers">
                            <div className="mkdf-position-left">
                                <div className="mkdf-position-left-inner">

                                    <div className="mkdf-mobile-logo-wrapper">
                                        <Link to="/">
                                            <span className="logo">Travelorie</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mkdf-position-right">
                                <div className="mkdf-position-right-inner">
                                    <div className="mkdf-mobile-menu-opener mkdf-mobile-menu-opener-icon-pack">
                                            <span className="mkdf-mobile-menu-icon">
                                                <span aria-hidden="true"
                                                    className="mkdf-icon-font-elegant icon_menu "></span> 
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mkdf-mobile-side-area">
                        <div className="mkdf-close-mobile-side-area-holder">
                            <i className="mkdf-icon-dripicons dripicon dripicons-cross "></i> </div>
                        <div className="mkdf-mobile-side-area-inner">
                            <nav className="mkdf-mobile-nav" role="navigation" aria-label="Mobile Menu">
                                <div className="mkdf-grid">
                                    <ul id="menu-main-menu">
                                        {
                                            [...links.left,...links.right].map((link,index)=>
                                                <li key={`mobile-menu-item-${index}`}
                                                    className="menu-item menu-item-type-custom menu-item-object-custom">
                                                    <h6><Link to={link.href}><span>{link.text}</span></Link></h6>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="mkdf-mobile-widget-area">
                            <div className="mkdf-mobile-widget-area-inner">
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;