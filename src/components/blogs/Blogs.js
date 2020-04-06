import React, { useState,useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import { EmptySpace } from '../home/Home';
import { useEffect } from "react";
import AppContext,{DefaultConfiguration} from '../../AppContext';

function BlogsPage() {
    return (
        <div className="mkdf-content">
            <div className="mkdf-content-inner">
                <div className="mkdf-container mkdf-default-page-template">
                    <div className="mkdf-row-grid-section-wrapper mkdf-content-aligment-center">
                        <div className="mkdf-row-grid-section">
                            <div className="vc_row wpb_row vc_row-fluid vc_custom_1536313322425">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner">
                                        <div className="wpb_wrapper">
                                            <Blogs />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Blogs(props) {
    let configuration=useContext(AppContext);
    let blogs=configuration.blogs||DefaultConfiguration.blogs;

    return (
        <React.Fragment>
            <div
                className="mkdf-section-title-holder  mkdf-st-standard mkdf-st-title-left mkdf-st-normal-space destinations">
                <div className="mkdf-st-inner">
                    <h2 className="mkdf-st-title"> {props.heading || "Blogs"} </h2>
                    <p className="mkdf-st-text">
                        {props.subheading || "We are the Travelorie, your favorite travel assistants!"}
                    </p>
                </div>
            </div>
            <EmptySpace height="44px" />
            <div
                className="mkdf-destination-list-holder mkdf-grid-list mkdf-pl-gallery mkdf-four-columns mkdf-small-space mkdf-pl-standard-shader  mkdf-pl-pag-no-pagination"
                data-type="gallery" data-number-of-columns="four"
                data-space-between-items="small" data-number-of-items="-4"
                data-image-proportions="full"
                data-selected-projects="1235,1232,1230,2480"
                data-orderby="date" data-order="ASC"
                data-item-style="standard-shader" data-enable-title="yes"
                data-enable-category="yes" data-enable-excerpt="no"
                data-excerpt-length="20"
                data-pagination-type="no-pagination"
                data-enable-article-animation="no"
                data-destination-slider-on="no" data-enable-loop="yes"
                data-enable-autoplay="yes" data-slider-speed="5000"
                data-slider-speed-animation="600"
                data-enable-navigation="yes" data-enable-pagination="yes"
                data-max-num-pages="1" data-next-page="2">
                <div className="mkdf-pl-inner mkdf-outer-space  clearfix">
                    {
                        blogs.map((blog, index) =>
                            <article key={index}
                                className="mkdf-pl-item mkdf-item-space  post-1230 destination-item type-destination-item status-publish has-post-thumbnail hentry destination-category-low-budget destination-tag-home9">
                                <div className="mkdf-pl-item-inner">
                                    <Link to={blog.href}
                                        target="_self"
                                        rel="noopener noreferrer">
                                        <div className="mkdf-pli-image">
                                            <img width="800" height="600"
                                                src={blog.imageUrl}
                                                className="attachment-full size-full wp-post-image"
                                                alt="o"
                                                sizes="(max-width: 800px) 100vw, 800px" />
                                        </div>
                                    </Link>

                                    <div className="mkdf-pli-text-holder">
                                        <div className="mkdf-pli-text-wrapper">
                                            <div className="mkdf-pli-text">
                                                <div>{blog.text}</div>
                                                <div
                                                    className="mkdf-pli-category-holder">
                                                    {
                                                        blog.tags.map((tag, tagIndex) =>
                                                            <Link key={tagIndex}
                                                                className="mkdf-pli-category"
                                                                to={tag.href}
                                                                rel="noopener noreferrer">{tag.name}</Link>
                                                        )
                                                    }
                                                </div>
                                                <Link
                                                    to={blog.href}
                                                    target="_self"
                                                    rel="noopener noreferrer"
                                                    className="mkdf-btn mkdf-btn-medium mkdf-btn-outline">
                                                    <span
                                                        className="mkdf-btn-text">Explore</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

function Blog(props) {
    let { blogid } = useParams();
    let [html, setHtml] = useState(null);

    useEffect(function () {
        fetch(`/blogs-pages/${blogid}.html`).then(response => response.text()).then(d => {
            setHtml(d);
        }).catch(r => {
            setHtml(`<h3>Blog ${blogid} is not yet available`);
        })
    }, [blogid])
    return (
        <div class="mkdf-content">
            <div class="mkdf-content-inner">
                <div class="mkdf-container">

                    <div class="mkdf-container-inner clearfix">
                        <div class="mkdf-grid-row mkdf-grid-huge-gutter">
                            <div class="mkdf-page-content-holder mkdf-grid-col-12">
                                <div class="mkdf-blog-holder mkdf-blog-single mkdf-blog-single-standard">
                                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
export { BlogsPage, Blog };