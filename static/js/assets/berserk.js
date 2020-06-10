"use strict";var Berserk=Berserk||{settings:{timeout_delay:200},behaviors:{}},brk_xmode=!1;function isSafari(){var s=window.navigator.userAgent,o=!!s.match(/iP(ad|od|hone)/i),e=!!s.match(/Safari/i),n=!s.match(/Chrome|CriOS|OPiOS|mercury|FxiOS|Firefox/i),t=!1;o?t=!!s.match(/WebKit/i)&&e&&n:t=void 0!==window.safari||e&&n;return t}Berserk.settings.gmap_api_key="undefined"!=typeof brk&&void 0!==brk.gmap_api_key?brk.gmap_api_key:"AIzaSyDEE4w3qmvL1fF91KiHhySPYZNiULI0YRo",Berserk.settings.recaptcha_api_key="undefined"!=typeof brk&&void 0!==brk.recaptcha_api_key?brk.recaptcha_api_key:"6Lfsu3QUAAAAAO6j2iAsncliNSQqISfipl0DjPAp",Berserk.settings.project_prefix="undefined"!=typeof brk&&void 0!==brk.shorcodesurl?brk.shorcodesurl:"",jQuery.noConflict(),window.lazySizesConfig=window.lazySizesConfig||{},window.lazySizesConfig.expand=500,function(){if(!brk_xmode){var s=document.getElementById("brk-direction-bootstrap"),o=document.getElementById("brk-direction-offsets"),e=document.getElementsByClassName("rev_slider_wrapper");location.search.indexOf("dir=rtl")+1?(document.documentElement.setAttribute("dir","rtl"),s.setAttribute("href","css/assets/bootstrap-rtl.css"),o.setAttribute("href","css/assets/offsets-rtl.css"),e.length&&(e[0].style.direction="ltr")):location.search.indexOf("dir=ltr")+1&&(document.documentElement.setAttribute("dir","ltr"),s.setAttribute("href","css/assets/bootstrap.css"),o.setAttribute("href","css/assets/offsets.css"))}}(),function(i){isSafari()&&i("html").addClass("brk-safari"),jQuery.cachedScript=function(s,o){return o=i.extend(o||{},{crossDomain:!0,dataType:"script",cache:!0,url:s}),jQuery.ajax(o)},Berserk.attachBehaviors=function(s,o){s=s||document,o=o||Berserk.settings,i.each(Berserk.behaviors,function(){i.isFunction(this.attach)&&this.attach(s,o)})},i(function(){Berserk.attachBehaviors(i("body"),Berserk.settings),function(){if(i("[data-brk-library]:not(.brk-library-rendered)").addClass("brk-library-rendered").each(function(){var s=i(this).data("brk-library").split(",");for(t in s)void 0===r[s[t]]&&(r[s[t]]=1,m(s[t]))}),Object.keys(c.css).length){var s,o="",e="";for(t in brk_xmode&&(e='class="brk-css-add" '),c.css)s=Berserk.settings.project_prefix&&-1===c.css[t].indexOf("//")?Berserk.settings.project_prefix:"",console.log("CSS added: "+s+c.css[t]),o+="<link "+e+'rel="stylesheet"  href="'+s+c.css[t]+'">';i("head").append(o)}if(Object.keys(c.js).length){var n=0;for(t in c.js)s=Berserk.settings.project_prefix&&-1===c.js[t].indexOf("//")?Berserk.settings.project_prefix:"",console.log("JS added: "+s+c.js[t]),i.cachedScript(s+c.js[t],{success:function(s,o){n+=1,Object.keys(c.js).length===n&&(Berserk.attachBehaviors(i("body"),Berserk.settings),c={css:{},js:{}})}})}}(),i(document).on("trigger-behaviors",function(s){Berserk.attachBehaviors(i(".trigger-behaviors"),Berserk.settings),i(".trigger-behaviors").removeClass("trigger-behaviors")})}),i(function(){var e=[],n=0;i.each({".font__family-oxygen":"Oxygen:300,400,700",".font__family-montserrat":"Montserrat:100,200,300,400,500,600,700",".font__family-open-sans":"Open+Sans:300,400,600,700",".font__family-playfair":"Playfair+Display:400,400i,700",".font__family-roboto":"Roboto:100,300,400,700",".font__family-roboto-slab":"Roboto+Slab:100,300,400,700",".font__family-poppins":"Poppins:100,200,300,400,600,700",".font__family-pacifico":"Pacifico:300,400,700",".font__family-montserrat-alt":"Montserrat+Alternates:400,700"},function(s,o){i(s).length&&(e[n]=o,n++)});var s=e.join("|");i("head").append('<link id = "css-google-fonts" href="https://fonts.googleapis.com/css?family='+s+'" rel="stylesheet">')});i("html"),i(document),i(window);var t=0;i.fn.isOnScreen=function(s){var o=this.outerHeight(),e=this.outerWidth();if(!e||!o)return!1;var n=i(window),t={top:n.scrollTop(),left:n.scrollLeft()};t.right=t.left+n.width(),t.bottom=t.top+n.height();var c=this.offset();c.right=c.left+e,c.bottom=c.top+o;var r={top:t.bottom-c.top,left:t.right-c.left,bottom:c.bottom-t.top,right:c.right-t.left};return"function"==typeof s?s(r):0<r.top-o&&0<r.left&&0<r.right&&0<r.bottom-o},i.fn.isAppearOnScreen=function(s){var o=this.outerHeight(),e=this.outerWidth();if(!e||!o)return!1;var n=i(window),t={top:n.scrollTop(),left:n.scrollLeft()};t.right=t.left+n.width(),t.bottom=t.top+n.height();var c=this.offset();c.right=c.left+e,c.bottom=c.top+o;var r={top:t.bottom-c.top,left:t.right-c.left,bottom:c.bottom-t.top,right:c.right-t.left};return"function"==typeof s?s(r):0<r.top&&0<r.left&&0<r.right&&0<r.bottom},i.fn.rotate=function(s){return i(this).css({"-webkit-transform":"rotate("+s+"deg)","-moz-transform":"rotate("+s+"deg)","-ms-transform":"rotate("+s+"deg)",transform:"rotate("+s+"deg)"}),i(this)},i.fn.setGradientBackground=function(s){return s.end?i(this).css({background:s.start,background:"-moz-linear-gradient(top, "+s.start+" 0%, "+s.end+" 100%)",background:"-webkit-gradient(left top, left bottom, color-stop(0%, "+s.start+"), color-stop(100%, "+s.end+"))",background:"-webkit-linear-gradient(top, "+s.start+" 0%, "+s.end+" 100%)",background:"-o-linear-gradient(top, "+s.start+" 0%, "+s.end+" 100%)",background:"-ms-linear-gradient(top, "+s.start+" 0%, "+s.end+" 100%)",background:"linear-gradient(to bottom, "+s.start+" 0%, "+s.end+" 100%)",filter:"progid:DXImageTransform.Microsoft.gradient( startColorstr="+s.start+", endColorstr="+s.end+", GradientType=0 )"}):i(this).css({background:s.start}),i(this)},i.fn.addClassDelay=function(o,e,n){n=void 0===n||n,i(this).each(function(s){n&&i(this).delay(s*e).queue(function(s){i(this).addClass(o),s()})})};var s=i(".active__effect-main");s.length&&s.each(function(){var s=i(this).find(".active__effect"),o=i(this).find(".active");s.on("mouseenter",function(){s.removeClass("current"),s.trigger("hover")}),i(".active__effect-main").on("mouseleave",function(){s.removeClass("current"),o.addClass("current")})}),window.addEventListener("load",function(){i("a:not(.nohash-animat)").on("click",function(s){var o=i(this).attr("href");if(""!==this.hash&&"#top"!==this.hash&&"collapse"!==this.getAttribute("data-toggle")&&"tab"!==this.getAttribute("data-toggle")&&!i(this).hasClass("fancybox")&&!i(this).parent().parent().get(0).getAttribute("data-tabgroup")&&"#"===o[0]){s.preventDefault();var e=this.hash;i(e).length&&i("html, body").animate({scrollTop:i(e).offset().top},800,"swing",function(){window.location.hash=e})}}),window.location.hash&&(window.scrollTo(0,0),setTimeout(function(){i("html, body").animate({scrollTop:i(window.location.hash).offset().top},800,"swing")},800))}),Berserk.behaviors.smooth_scroll_top={attach:function(s,o){i('a[href="#top"]').each(function(){var s=i(this);i(window).on("scroll",function(){s.is('[id="toTop"]')&&(150<i(this).scrollTop()?s.fadeIn():s.fadeOut())}),s.on("click",function(){return i("body, html").animate({scrollTop:0},300),!1})})}},Berserk.behaviors.border_theme_init={attach:function(s,o){i("body").hasClass("brk-bordered-theme")?i(":root").attr("style","--b-radius: "+i("body").attr("data-border")+"px;"):i(":root").attr("style","--b-radius:;")}},Berserk.behaviors.counter_lib_init={attach:function(s,o){var e;(e=jQuery).fn.counter=function(c){c=e.extend({start:0,end:10,time:10,step:1e3,callback:function(){}},c);var s=e(this);e(this).html(Math.round(c.start));var o=(c.end-c.start)/(1e3/c.step*c.time);setTimeout(function(){!function s(o,e,n){var t=parseInt(o.html(),10)+e;n<=t?(o.html(Math.round(n)),c.callback()):(o.html(Math.round(t)),setTimeout(function(){s(o,e,n)},c.step))}(s,o,c.end)},c.step)}}},i(document).ready(function(){"undefined"!=typeof WOW&&(new WOW).init()}),Berserk.behaviors.fancybox_init={attach:function(s,o){if(!(i(".fancybox:not(.rendered), .fancybox-media:not(.rendered)").length<1)){if(void 0===i.fn.fancybox)return console.log("Waiting for the fancybox library"),void setTimeout(Berserk.behaviors.fancybox_init.attach,200,s,o);var e=i(".fancybox:not(.rendered)",s),n=i(".fancybox-media:not(.rendered)",s);e.length&&e.fancybox({openEffect:"elastic",closeEffect:"elastic"}).addClass("rendered"),n.length&&n.fancybox({openEffect:"fade",closeEffect:"fade",helpers:{media:{}}}).addClass("rendered")}}},Berserk.behaviors.scrollbar_init={attach:function(s,o){i(s).parent().find(".scrollbar-inner:not(.rendered)").addClass("rendered").each(function(){if(i(this).length){if(void 0===i.fn.scrollbar)return console.log("Waiting for the scrollbar library"),void setTimeout(Berserk.behaviors.scrollbar_init.attach,200,s,o);i(this).scrollbar()}})}},"function"==typeof i.UItoTop&&i().UItoTop({text:"",min:200,inDelay:0,outDelay:0});var c={css:{},js:{}},r={},o={"css/assets/brk-header-elements.css":!0,"css/components/theme-options.css":!0,"css/components/accordions.css":!0,"css/components/tabs.css":!0,"css/components/buttons.css":!0,"css/components/pricing-tables.css":!0,"css/components/testimonials.css":!0,"css/components/CFA.css":!0,"css/components/form-controls.css":!0,"css/components/flip-boxes.css":!0,"css/components/elements.css":!0,"css/components/titles.css":!0,"vendor/fancybox/css/jquery.fancybox.min.css":!0,"js/assets/brk-customizer.js":!0,"js/assets/brk-header.js":!0,"js/components/accordions.js":!0,"js/components/tabs.js":!0,"js/components/buttons.js":!0,"js/components/form-controls.js":!0,"vendor/formStyler/js/jquery.formstyler.min.js":!0,"css/components/footer.css":!0,"css/components/image-map.css":!0,"css/components/media-embeds.css":!0,"js/components/media-embeds.js":!0,"js/components/image-map.js":!0,"js/components/footer.js":!0,"js/components/portfolio-masonry.js":!0,"js/components/progress-bars.js":!0,"js/components/portfolio-rows.js":!0,"js/components/steps.js":!0,"js/components/parallax-video.js":!0,"js/components/counter.js":!0,"js/components/sliders.js":!0,"js/components/breadcrumbs.js":!0,"js/components/info-box.js":!0,"js/components/shop-components-tiles.js":!0,"js/components/blog-page.js":!0},a={component__map:{js:["https://maps.googleapis.com/maps/api/js?key="+Berserk.settings.gmap_api_key,"js/components/google-maps.js"]},twitter_init:{js:["js/assets/twitter-init.js"]},recaptcha:{js:["https://www.google.com/recaptcha/api.js?render="+Berserk.settings.recaptcha_api_key,"js/assets/recaptcha.js"]}},p={};function m(s){if(void 0!==e[s]){if(void 0!==e[s].dependency)for(t in e[s].dependency)void 0===r[e[s].dependency[t]]&&(r[e[s].dependency[t]]=1,m(e[s].dependency[t]));if(void 0!==e[s].css)for(t in e[s].css)o[e[s].css[t]]||(o[e[s].css[t]]=!0,c.css[e[s].css[t]]=e[s].css[t]);if(void 0!==e[s].js)for(t in e[s].js)o[e[s].js[t]]||(o[e[s].js[t]]=!0,c.js[e[s].js[t]]=e[s].js[t])}}i(document).ready(function(){i.each(a,function(s,o){i('[data-brk-library*="'+s+'"]:not(.lazyloaded):not(.lazyload)').addClass("lazyload")})}),addEventListener("lazybeforeunveil",function(s){var o=s.target.getAttribute("data-brk-library");o&&function(s){var o=s.split(","),e="";for(var n in o)if(a[o[n]]){if(void 0!==a[o[n]].js)for(var t in a[o[n]].js)p[a[o[n]].js[t]]||(p[a[o[n]].js[t]]=!0,e=Berserk.settings.project_prefix&&-1===a[o[n]].js[t].indexOf("//")?Berserk.settings.project_prefix:"",console.log("JS added: "+e+a[o[n]].js[t]),i.cachedScript(e+a[o[n]].js[t],{success:function(s,o){Berserk.attachBehaviors(i("body"),Berserk.settings)}}));if(void 0!==a[o[n]].css)for(t in a[o[n]].css)p[a[o[n]].css[t]]||(p[a[o[n]].css[t]]=!0,e=Berserk.settings.project_prefix&&-1===a[o[n]].css[t].indexOf("//")?Berserk.settings.project_prefix:"",console.log("CSS added: "+e+a[o[n]].css[t]),i("head").append('<link rel="stylesheet"  href="'+e+a[o[n]].css[t]+'">'))}}(o)});var e={font_awesome__5:{js:["//use.fontawesome.com/releases/v5.0.1/js/all.js"]},waypoints:{js:["vendor/waypoints/js/jquery.waypoints.min.js"]},"pe-icon-7":{css:["vendor/pe-icon-7-stroke/css/pe-icon-7-stroke.css"]},slider__swiper:{dependency:["component__sliders_css"],css:["vendor/swiper/css/swiper.min.css"],js:["vendor/swiper/js/swiper.min.js","js/assets/swiper-skin.js"]},slider__slick:{css:["vendor/slickCarousel/css/slick.css","css/components/sliders.css"],js:["vendor/slickCarousel/js/slick.min.js","js/assets/sliders-skin.js"]},slider__rotator:{js:["js/assets/rotation-slider.js"]},jquerySlider:{js:["vendor/jquerySlider/js/jquery-ui.min.js"]},isotope:{js:["vendor/isotope/js/isotope.pkgd.min.js"]},datatables_js:{js:["vendor/datatables/js/jquery.dataTables.min.js"]},scrollbar:{css:["vendor/jquery.scrollbar/css/jquery.scrollbar.css"],js:["vendor/jquery.scrollbar/js/jquery.scrollbar.min.js"]},assets_particleground:{js:["js/assets/jquery.particleground.min.js"]},assets_fss:{js:["js/assets/fss.min.js"]},assets_skrollr:{js:["js/assets/skrollr.min.js"]},paper:{js:["vendor/paper/js/paper-full.js"]},anime:{js:["vendor/animejs/js/anime.min.js","js/assets/brk-hover3d.js"]},fancybox:{css:["vendor/fancybox/css/jquery.fancybox.min.css"],js:["vendor/fancybox/js/jquery.fancybox.min.js"]},odometer:{js:["vendor/odometer/js/odometer.min.js"]},typewriter:{js:["vendor/typewriter/js/core.js"]},jqueryAutocomplete:{css:["vendor/jqueryAutocomplete/css/jquery-ui.css"],js:["vendor/jqueryAutocomplete/js/jquery-ui.min.js"]},assets__typing_rotator:{js:["js/assets/typing-rotator.js"]},assets__image_caption:{dependency:["anime"],js:["js/components/image-caption-parallax.js"]},"brk-customizer":{dependency:["component__accordions"],css:["css/components/theme-options.css"],js:["js/assets/brk-customizer.js"]},flexmenu:{js:["js/assets/flexmenu.js"]},component__social_links:{css:["css/components/social-links.css"]},component__breadcrumbs_css:{css:["css/components/breadcrumbs.css"]},component__breadcrumbs_js:{js:["js/components/breadcrumbs.js"]},component__breadcrumbs:{js:["js/components/breadcrumbs.js"],dependency:["jquerySlider","component__breadcrumbs_css"]},component__accordions:{css:["css/components/accordions.css"],js:["js/components/accordions.js"]},component__sliders:{js:["js/components/sliders.js"],dependency:["component__sliders_css"]},component__sliders_css:{css:["css/components/sliders.css"]},component__content_slider:{css:["css/components/content-sliders.css"]},component__team:{css:["css/components/team.css"],js:["js/components/team.js"]},component__social_block:{css:["css/components/social.css"]},component__flip_box_css:{css:["css/components/flip-boxes.css"]},component__flip_box:{dependency:["component__flip_box_css"]},component__app_showcase:{css:["css/components/flip-boxes.css"]},component__title:{css:["css/components/titles.css"]},component__typing_rotator:{css:["css/components/typing-rotator.css"]},component__dividers:{css:["css/components/dividers.css"]},component__progress_circle:{css:["css/components/progress-circles.css"],js:["js/components/progress-circles.js"]},component__counter:{css:["css/components/counter.css"],js:["js/components/counter.js"],dependency:["waypoints"]},component__button:{css:["css/components/buttons.css"],js:["js/components/buttons.js"]},component__alert:{css:["css/components/alerts.css"],js:["js/components/alerts.js"]},component__form:{css:["css/components/form-controls.css"],js:["vendor/formStyler/js/jquery.formstyler.min.js","js/components/form-controls.js"]},component__forum_post:{css:["css/components/forum-post.css"]},component__forum_main:{css:["css/components/forum-main.css"]},component__forum_author:{css:["css/components/forum-author.css"]},component__countdown:{css:["css/components/countdown.css"],js:["vendor/jqueryCountdown/js/jquery.countdown.min.js","vendor/underscore/js/underscore-min.js","js/components/countdown.js"]},component__image_frames:{css:["css/components/image-frames.css"]},component__info_box:{css:["css/components/info-box.css"],js:["js/components/info-box.js"],dependency:["waypoints"]},component__call_to_action:{css:["css/components/CFA.css"],js:["js/components/CFA.js"]},component__list:{css:["css/components/lists.css"]},component__panel:{css:["css/components/panels.css"]},component__pricing_table:{css:["css/components/pricing-tables.css"]},component__blog_css:{css:["css/components/blog.css"]},component__blog_js:{js:["js/components/blog.js"]},component__blog:{js:["js/components/blog.js"],dependency:["slider__slick","component__blog_css"]},component__blog_grid:{css:["css/components/blog-grid.css"]},component__blog_page_css:{css:["css/components/blog-page.css"]},component__blog_page:{js:["js/components/blog-page.js"],dependency:["component__social_links","component__blog","component__blog_page_css"]},component__cta:{css:["css/components/cta.css"],js:["js/components/cta.js"]},component__widgets_css:{css:["css/components/widgets.css"]},component__widgets:{js:["js/components/widgets.js"],dependency:["component__widgets_css","slider__slick"]},component__winter:{css:["css/components/winter.css"]},component__media_embeds:{css:["css/components/media-embeds.css"],js:["js/components/media-embeds.js"]},component__pagination:{css:["css/components/pagination.css"],js:["js/components/pagination.js"]},component__index:{css:["css/components/index.css"],js:["js/components/index.js"],dependency:["jqueryAutocomplete","isotope"]},component__team_page_css:{css:["css/components/team-member.css"]},component__team_page:{dependency:["component__social_links","component__team_page_css"]},"component__portfolio_page-styles":{css:["css/components/portfolio-page.css"]},component__portfolio_page:{dependency:["component__portfolio_page-styles","anime"]},component__portfolio_list:{css:["css/components/portfolio-list.css"]},component__portfolio_grid:{css:["css/components/portfolio-grid.css"],js:["js/components/portfolio-grid.js"],dependency:["anime"]},component__portfolio_row:{css:["css/components/portfolio-rows.css"],js:["js/components/portfolio-rows.js"],dependency:["isotope","anime"]},component__portfolio_isotope_css:{css:["css/components/portfolio-isotope.css"]},component__portfolio_isotope:{js:["js/components/portfolio-isotope.js"],dependency:["component__portfolio_isotope_css","isotope","anime"]},component__portfolio_category:{css:["css/components/portfolio-categories.css"],js:["js/components/portfolio-categories.js"]},component__portfolio_galleries:{css:["css/components/portfolio-galleries.css"],dependency:["component__social_links"]},component__portfolio_masonry:{css:["css/components/portfolio-masonry.css"],js:["js/components/portfolio-masonry.js"],dependency:["component__media_embeds","isotope","component__content_slider"]},"component__portfolio_masonry-2":{css:["css/components/portfolio-masonry-2.css"],dependency:["component__portfolio_isotope"]},component__progress_bar:{css:["css/components/progress-bars.css"],js:["js/components/progress-bars.js"]},component__promo:{css:["css/components/promo.css"],js:["js/components/promo.js"]},component__sequence:{css:["css/components/sequence.css"]},component__services:{css:["css/components/services.css"]},component__shape_box:{css:["css/components/shape-box.css"],js:["js/components/shape-box.js"]},component__steps:{css:["css/components/steps.css"],js:["js/components/steps.js"]},component__tabs:{css:["css/components/tabs.css"],js:["js/components/tabs.js"]},component__tabbed_contents:{css:["css/components/tabbed-contents.css"],js:["js/components/tabs.js"]},component__testimonials:{css:["css/components/testimonials.css"]},component__tiles:{css:["css/components/tiles.css"]},component__icons:{css:["css/components/icons.css"],js:["js/components/icons.js"]},component__title_section:{css:["css/components/section-titles.css"]},component__delimiters:{css:["css/components/delimiters.css"]},component__backgrounds_css:{css:["css/components/backgrounds.css"]},component__backgrounds_js:{js:["js/components/backgrounds.js"]},component__backgrounds:{dependency:["component__backgrounds_css","component__backgrounds_js","assets_particleground","assets_skrollr","assets_fss","paper"]},component__image_caption_css:{css:["css/components/image-caption-parallax.css"]},component__image_caption:{dependency:["component__image_caption_css","assets__image_caption"]},component__tags:{css:["css/components/tags.css"]},component__tags_js:{js:["js/components/tags.js"]},component__timelines_css:{css:["css/components/timelines.css"]},component__timelines:{dependency:["component__timelines_css","component__content_slider"]},component__timelines_js:{js:["js/components/timelines.js"]},component__gallery_sliders_css:{css:["css/components/gallery-sliders.css"]},component__gallery_sliders:{js:["js/components/gallery-sliders.js"],dependency:["slider__slick","component__gallery_sliders_css"]},component__tables:{css:["css/components/tables.css"],js:["js/components/tables.js"]},component__shop_row:{css:["css/components/shop-components-row.css"]},component__shop_tiles:{css:["css/components/shop-components-tiles.css"],js:["js/components/shop-components-tiles.js"],dependency:["component__shop_row"]},component__shop_masonry:{css:["css/components/shop-components-masonry.css"],dependency:["component__shop_row"]},component__shop_grid_filter:{css:["css/components/shop-components-grid-filter.css"],js:["js/components/shop-components-grid-filter.js"],dependency:["isotope"]},component__shop_honeycomb:{css:["css/components/shop-components-honeycomb.css"]},component__shop_product_row:{css:["css/components/shop-components-row.css"]},component__shop_grid:{dependency:["component__flip_box"]},component__shop_cards:{css:["css/components/shop-components-cards.css"]},component__shop_flip:{css:["css/components/shop-components-flip.css"],js:["js/components/shop-components-flip.js"],dependency:["scrollbar"]},component__shop_item_page_sidebar:{css:["css/components/shop-components-item-sidebar.css"]},component__elements:{css:["css/components/elements.css"],js:["js/components/elements.js"]},component__header:{dependency:["flexmenu"],css:["css/assets/brk-header-elements.css"],js:["js/assets/brk-header.js"]},component__footer:{css:["css/components/footer.css"],js:["js/components/footer.js"]},component__svg_pattern:{css:["css/components/svg-pattern.css"]},component__gallery:{css:["css/components/gallery-cols.css"],dependency:["fancybox"]},component__image_map:{css:["css/assets/image-map-pro.css","css/components/image-map.css"],js:["js/assets/image-map-pro.min.js","js/components/image-map.js"],dependency:["component__title"]},component__parallax:{css:["css/components/parallax.css"],js:["vendor/paraxify/js/paraxify.min.js","js/components/parallax.js"],dependency:["waypoints"]},"component__parallax-video":{dependency:["component__parallax"],css:["vendor/jqueryMbYT_player/css/jquery.mb.YTPlayer.min.css","vendor/jqueryMbVimeo_player/css/jquery.mb.vimeo_player.min.css","css/components/parallax-video.css"],js:["vendor/jqueryMbYT_player/js/jquery.mb.YTPlayer.min.js","vendor/jqueryMbVimeo_player/js/jquery.mb.vimeo_player.min.js","js/components/parallax-video.js"]},component__cart:{css:["css/components/cart.css"],js:["js/components/cart.js"]},component__checkout:{css:["css/components/checkout.css"]},component__map:{css:["css/components/google-maps.css"]}};window.xMode?(i("html").removeClass("brk-preloader"),i(".brk-header:not(.brk-header_vertical)").css("display","").addClass("d-flex")):(window.addEventListener("load",function(){i("html").addClass("brk-preloader-remove"),setTimeout(function(){i("html").removeClass("brk-preloader brk-preloader-remove"),i(".brk-header:not(.brk-header_vertical)").css("display","").addClass("d-flex")},1500)}),setTimeout(function(){i("html").addClass("brk-preloader-remove"),setTimeout(function(){i("html").removeClass("brk-preloader brk-preloader-remove"),i(".brk-header:not(.brk-header_vertical)").css("display","").addClass("d-flex")},1500)},5e3)),brk_xmode&&window.addEventListener("load",function(){var s=i(".brk-css-add"),n=i("html").data("brk-skin").replace(/\b.css\b/g,"");s.each(function(){var s=i(this),o=s.attr("href");if(!o.indexOf("css/"+n+"/")+1&&o.indexOf("css/")+1){var e=o.replace(/^\bcss\/\b/g,"css/"+n+"/");s.attr("href",e),console.log(e)}})}),window.xMode&&(i("head").append('<link rel="stylesheet" href="css/assets/novi.css">'),i(".flip-box").on("dblclick",function(){i(this).toggleClass("flip-box-xmode-active")}),i(".btn").on("click",function(s){s.preventDefault()}),i(".btn").on("dblclick",function(){i(this).toggleClass("btn-xmode-active")}))}(jQuery);