var mkdfGlobalVars = { "vars": { "mkdfElementAppearAmount": -100, "mkdfStickyHeaderHeight": 0, "mkdfStickyHeaderTransparencyHeight": 95, "mkdfTopBarHeight": 0, "mkdfLogoAreaHeight": 0, "mkdfMenuAreaHeight": 95, "mkdfMobileHeaderHeight": 70 } };

function setREVStartSize(e) {
    try {
        e.c = jQuery(e.c); var i = jQuery(window).width(), t = 9999, r = 0, n = 0, l = 0, f = 0, s = 0, h = 0;
        if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) { f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e) }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) { var u = (e.c.width(), jQuery(window).height()); if (void 0 != e.fullScreenOffsetContainer) { var c = e.fullScreenOffsetContainer.split(","); if (c) jQuery.each(c, function (e, i) { u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0)) } f = u } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight); e.c.closest(".rev_slider_wrapper").css({ height: f })
    } catch (d) { console.log("Failure at Presize of Slider:" + d) }
};
if (setREVStartSize !== undefined) setREVStartSize(
    { c: '#rev_slider_4_3', responsiveLevels: [1920, 1700, 1025, 480], gridwidth: [1300, 1441, 850, 480], gridheight: [936, 555, 800, 770], sliderLayout: 'fullwidth' });

var revapi4,
    tpj;
function init_rev4() {
    if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad); else onLoad();
    function onLoad() {
        if (tpj === undefined) { tpj = jQuery; if ("off" == "on") tpj.noConflict(); }
        if (tpj("#rev_slider_4_3").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_4_3");
        } else {
            revapi4 = tpj("#rev_slider_4_3").show().revolution({
                sliderType: "standard",
                jsFileLocation: "revslider/js/",
                sliderLayout: "fullwidth",
                dottedOverlay: "none",
                delay: 3500,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "off",
                    arrows: {
                        style: "custom-1",
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 1024,
                        hide_onleave: false,
                        tmp: '',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    }
                    ,
                    bullets: {
                        enable: true,
                        hide_onmobile: false,
                        hide_over: 769,
                        style: "custom-1-dark",
                        hide_onleave: false,
                        direction: "horizontal",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20,
                        space: 10,
                        tmp: ''
                    }
                },
                responsiveLevels: [1920, 1700, 1025, 480],
                visibilityLevels: [1920, 1700, 1025, 480],
                gridwidth: [1300, 1441, 850, 480],
                gridheight: [936, 555, 800, 770],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "enterpoint",
                    speed: 400,
                    speedbg: 0,
                    speedls: 0,
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }; // END OF revapi call 
    }; //END OF ON LOAD FUNCTION 
}; // END OF WRAPPING FUNCTION 
// init_rev4();