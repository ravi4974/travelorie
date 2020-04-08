import React, { useEffect } from "react";
import './Home.css';
import Blogs from '../blogs/Blogs';
import { useContext } from "react";
import AppContext,{DefaultConfiguration} from "../../AppContext";

function Home() {
    return (
        <div className="mkdf-content">
            <div className="mkdf-content-inner">
                <div className="mkdf-full-width">
                    <div className="mkdf-full-width-inner">
                        <div className="mkdf-grid-row">
                            <div className="mkdf-page-content-holder mkdf-grid-col-12">
                                <Banner />

                                <div className="mkdf-row-grid-section-wrapper mkdf-content-aligment-center">
                                    <div className="mkdf-row-grid-section">
                                        <div className="vc_row wpb_row vc_row-fluid vc_custom_1536313322425">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <Category />
                                                        <EmptySpace />
                                                        <Blogs />
                                                        <EmptySpace />
                                                        <Essentials />
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

function Banner() {
    let configuration=useContext(AppContext);
    let slides=configuration.home.slides||DefaultConfiguration.home.slides;

    useEffect(()=>{
        if(slides.length) window.init_rev4();
        return function cleanup(){
            window.revapi4 && (window.revapi4.revkill());
        }
    });

    return (
        <div className="vc_row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="wpb_revslider_element wpb_content_element">
                            <div id="rev_slider_4_3_wrapper"
                                className="rev_slider_wrapper fullwidthbanner-container"
                                data-source="gallery">
                                <div id="rev_slider_4_3" className="rev_slider fullwidthabanner" data-version="5.4.8.3">
                                    <ul>
                                        {
                                            slides.map((slide, index) =>
                                                <li key={index} data-index={`rs-${index}`}
                                                    data-transition="zoomin,zoomout"
                                                    data-slotamount="default,default"
                                                    data-hideafterloop="0"
                                                    data-hideslideonmobile="off"
                                                    data-easein="default,default"
                                                    data-easeout="default,default"
                                                    data-masterspeed="default,default"
                                                    data-rotate="0,0" data-fstransition="fade"
                                                    data-fsmasterspeed="300" data-fsslotamount="7"
                                                    data-saveperformance="off" data-title="Slide">
                                                    <img src={`${process.env.PUBLIC_URL}/${slide.background}`}
                                                        alt="a" title="h6-slider-img-1" 
                                                        width="1834" height="934"
                                                        data-bgposition="center center"
                                                        data-kenburns="on" data-duration="10000"
                                                        data-ease="Linear.easeNone"
                                                        data-scalestart={index % 2 ? "110" : "100"} data-scaleend={index % 2 ? "100" : "110"}
                                                        data-rotatestart="0" data-rotateend="0"
                                                        data-blurstart="0" data-blurend="0"
                                                        data-offsetstart="0 0" data-offsetend="0 0"
                                                        data-bgparallax="6" className="rev-slidebg"
                                                        data-no-retina />
                                                    <div className="tp-caption slide-layer-1" id={`slide-layer-1-${index}`}
                                                        data-x="['center','center','center','center']"
                                                        data-hoffset="['0','-30','0','0']"
                                                        data-y="['middle','middle','middle','middle']"
                                                        data-voffset="['0','0','0','0']"
                                                        data-whitespace="nowrap" data-type="image"
                                                        data-basealign="slide"
                                                        data-responsive_offset="off"
                                                        data-responsive="off"
                                                        data-frames='[{"delay":300,"speed":600,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                                        data-textalign="['inherit','inherit','inherit','inherit']">
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/images/internal/scratch.png`}
                                                            alt="a"
                                                            data-ww="['1233px','1003px','783px','374px']"
                                                            data-hh="['189px','154px','120px','57px']"
                                                            width="1233" height="189"
                                                            data-no-retina />
                                                    </div>
                                                    <div className="tp-caption tp-resizeme slide-layer-2"
                                                        id={`slide-layer-2-${index}`}
                                                        data-x="['center','center','center','center']"
                                                        data-hoffset="['297','245','193','120']"
                                                        data-y="['middle','middle','middle','middle']"
                                                        data-voffset="['11','5','6','2']"
                                                        data-fontsize="['70','60','55','30']"
                                                        data-lineheight="['80','70','65','40']"
                                                        data-whitespace="nowrap" data-type="text"
                                                        data-responsive_offset="on"
                                                        data-frames='[{"delay":700,"speed":600,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                                        data-textalign="['inherit','inherit','inherit','inherit']">
                                                        {slide.text["caption-suffix"]} </div>
                                                    <div className="tp-caption tp-resizeme slide-layer-3"
                                                        id={`slide-layer-3-${index}`}
                                                        data-x="['center','center','center','center']"
                                                        data-hoffset="['-139','-126','-93','-49']"
                                                        data-y="['middle','middle','middle','middle']"
                                                        data-voffset="['-3','0','1','-2']"
                                                        data-fontsize="['144','120','90','55']"
                                                        data-lineheight="['154','130','100','65']"
                                                        data-whitespace="nowrap" data-type="text"
                                                        data-responsive_offset="on"
                                                        data-frames='[{"delay":500,"speed":600,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                                        data-textalign="['inherit','inherit','inherit','inherit']">
                                                        {slide.text.caption} </div>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Category() {
    let configuration=useContext(AppContext);
    let categories=configuration.home.categories||DefaultConfiguration.home.categories;

    return (
        <div
            className="mkdf-destination-category-list-holder mkdf-grid-list mkdf-six-columns mkdf-normal-space">
            <div className="mkdf-pcl-inner mkdf-outer-space clearfix">
                {
                    categories.map((category, index) =>
                        <article key={index} className="mkdf-pcl-item mkdf-item-space">
                            <a className="mkdf-pcli-link"
                                href={category.href}
                                rel="noopener noreferrer">&nbsp;</a>
                            <div className="mkdf-pcl-item-inner">
                                <div className="mkdf-pcli-image">
                                    <img width="110" height="75"
                                        src={category.icon}
                                        className="attachment-full size-full"
                                        alt="o" /> </div>
                                <div className="mkdf-pcli-text-holder">
                                    <div className="mkdf-pcli-text-wrapper">
                                        <div className="mkdf-pcli-text">
                                            <h4 className="mkdf-pcli-title entry-title">{category.name}</h4>
                                            <p className="mkdf-pcli-count">{category.count} destinations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                }
            </div>
        </div>
    )
}


function Essentials(props) {
    let configuration=useContext(AppContext);
    let essentials=configuration.home.essentials||DefaultConfiguration.home.essentials;

    return (
        <div
            className="vc_row wpb_row vc_row-fluid vc_custom_1535026110695 vc_row-has-fill mkdf-content-aligment-center essentials">
            <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div
                            className="mkdf-section-title-holder  mkdf-st-standard mkdf-st-title-left mkdf-st-normal-space ">
                            <div className="mkdf-st-inner">
                                <h3 className="mkdf-st-title">
                                    MY TRAVEL ESSENTIALS </h3>
                                <p className="mkdf-st-text">
                                    A useful travel essentials you should add to your
																packing list </p>
                            </div>
                        </div>
                        <EmptySpace height="55px"/>
                        <div
                            className="mkdf-elements-holder mkdf-one-column mkdf-responsive-mode-768">
                            <div className="mkdf-eh-item    "
                                data-item-classname="mkdf-eh-custom-2903"
                                data-1367-1600="0 12% 0" data-1025-1366="34px 7% 0"
                                data-769-1024="57px 9% 0" data-681-768="57px 4% 0"
                                data-680="0px">
                                <div className="mkdf-eh-item-inner">
                                    <div className="mkdf-eh-item-content mkdf-eh-custom-2903">
                                        <div
                                            className="mkdf-image-gallery mkdf-grid-list mkdf-disable-bottom-space  mkdf-ig-grid-type mkdf-five-columns mkdf-normal-space  mkdf-image-behavior-custom-link">
                                            <div className="mkdf-ig-inner mkdf-outer-space">
                                                {
                                                    essentials.map((essential)=>
                                                        <div key={essential.name} className="mkdf-ig-image mkdf-item-space">
                                                            <div className="mkdf-ig-image-inner">
                                                                <a className="mkdf-ig-custom-link"
                                                                    href={essential.href}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    title={essential.name}>
                                                                    <img src={essential.imageUrl}
                                                                        alt="a" width="200"
                                                                        height="200" /> </a>
                                                            </div>
                                                        </div>
                                                    )
                                                }
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

function EmptySpace(props) {
    return (
        <div className="vc_empty_space" style={{ height: props.height || '60px' }}>
            <span className="vc_empty_space_inner"></span>
        </div>
    )
}

export default Home;

export {EmptySpace};