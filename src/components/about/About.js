import React from "react";
import {EmptySpace} from '../home/Home';

function About() {
    return (
        <div className="mkdf-content">
            <div className="mkdf-content-inner">
                <EmptySpace/>
                <div className="mkdf-title-holder mkdf-centered-type mkdf-title-va-header-bottom mkdf-has-bg-image mkdf-bg-responsive" data-height="300">
                    <div className="mkdf-title-image">
                        <img src="images/internal/about-me.jpg" alt="o" />
                    </div>
                    <div className="mkdf-title-wrapper">
                        <div className="mkdf-title-inner">
                            <div className="mkdf-grid">
                                <h1 className="mkdf-page-title entry-title">About Me</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mkdf-full-width">
                    <div className="mkdf-full-width-inner">
                        <div className="mkdf-grid-row">
                            <div className="mkdf-page-content-holder mkdf-grid-col-12">
                                <div className="mkdf-row-grid-section-wrapper ">
                                    <div className="mkdf-row-grid-section">
                                        <div className="vc_row wpb_row vc_row-fluid vc_custom_1535450293209">
                                            <div className="wpb_column vc_column_container">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <h2>
                                                                    Hi!I’m Prankur:)<br />
                                                                    Let’s go travel
                                                                </h2>

                                                            </div>
                                                        </div>
                                                        <EmptySpace height="20px"/>

                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p>Lorem Ipsum Nam nec tellus a odio tincidunt auctor. Proin gravida nibh vel velit auctor aliquet. Bendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. <u>Duis sed odio sit amet nibh</u> vulputate</p>

                                                            </div>
                                                        </div>
                                                        <EmptySpace height="20px"/>

                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor Class aptent taciti sociosqu ad litora torquen&nbsp;?</p>

                                                            </div>
                                                        </div>
                                                        <EmptySpace height="20px"/>

                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p>Want to know more? Read our <a href="https://backpacktraveler.qodeinteractive.com"><span style={{color:"#f7775e"}}>Most asked questions</span></a></p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;