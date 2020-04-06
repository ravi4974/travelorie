import React, { useContext,useState } from 'react';
import './Footer.css';
import AppContext,{DefaultConfiguration} from '../../AppContext';

function Footer() {
    const configuration = useContext(AppContext);
    const socials = configuration.header.socials||DefaultConfiguration.header.socials;

    let [email,setEmail]=useState('');

    const changeEmail=(e)=>{
        setEmail(e.target.value);
    }

    return (
        <footer className="mkdf-page-footer ">
            <div className="mkdf-footer-top-holder">
                <div className="mkdf-footer-top-inner mkdf-grid">
                    <div className="mkdf-grid-row mkdf-footer-top-alignment-center">
                        <div className="mkdf-column-content mkdf-grid-col-6">
                            <div id="text-10" className="widget mkdf-footer-column-2 widget_text">
                                <div className="mkdf-widget-title-holder"><span className="mkdf-widget-title-before"></span>
                                    <h6 className="mkdf-widget-title">Follow us</h6>
                                </div>
                                <div className="textwidget"></div>
                            </div>
                            {
                                socials.map((social, index) =>
                                    <a key={index} className="mkdf-icon-widget-holder mkdf-icon-has-hover" data-hover-color="#f7775e"
                                        href={social.href} target="_blank" rel="noopener noreferrer" style={{ width: "33%" }}>
                                        <span className={`mkdf-icon-element ${social.icon}`}></span>
                                        <span className="mkdf-icon-text">{social.text}</span>
                                    </a>
                                )
                            }
                        </div>
                        <div className="mkdf-column-content mkdf-grid-col-6">
                            <div className="widget mkdf-contact-form-7-widget ">
                                <div className="mkdf-widget-title-holder"><span className="mkdf-widget-title-before"></span>
                                    <h6 className="mkdf-widget-title" style={{ marginBottom: "32px" }}>NEWSLETTER</h6>
                                </div>
                                <div role="form" className="wpcf7" id="wpcf7-f249-o1" lang="en-US" dir="ltr">
                                    <div className="screen-reader-response"></div>
                                    <form method="post" onSubmit={e=>{e.preventDefault(); return false;}}
                                        className="wpcf7-form cf7_custom_style_3" noValidate>
                                        <div className="mkdf-form-newsletter">
                                            <span className="wpcf7-form-control-wrap your-email">
                                                <input type="email"
                                                    name="your-email" size="40"
                                                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                    aria-required="true" aria-invalid="false"
                                                    placeholder="Email Address"
                                                    onChange={changeEmail}
                                                    value={email} />
                                            </span>
                                            <br />
                                            <input type="submit" value="SUBSCRIBE"
                                                className="wpcf7-form-control wpcf7-submit" />
                                        </div>
                                        <div className="wpcf7-response-output wpcf7-display-none"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;