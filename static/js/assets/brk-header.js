!function(W){"use strict";Berserk.behaviors.header_init={attach:function(e,n){W(e).parent().find(".brk-header:not(.rendered)").addClass("rendered").each(function(){var c=W(this),r=c.find(".brk-header__main-bar"),a=r.data("height-scroll"),n=992,o=c.data("sticky-hide");W("body").width();if(W(".brk-header__top-bar").length){var t=c.find(".brk-header__top-bar_hide"),s=c.find(".brk-header__top-bar_scroll"),l=c.find(".brk-header__top-bar").data("top");l=l||0;var e=function(e){if(e<=(window.innerWidth||W(window).width())){if(t.length){var n=t.innerHeight()-l;if(W("body").hasClass("admin-bar")){var i=n-32;c.css("top","-"+i+"px")}else c.css("top","-"+n+"px")}}else c.css("top","0")},i=function(e){if(1!==o)if(e<=(window.innerWidth||W(window).width())){if(s.length){var n=s.innerHeight()-l;if(0<W(window).scrollTop())if(W(".brk-open-top-bar").length&&c.find(".brk-open-top-bar").removeClass("active"),W("body").hasClass("admin-bar")){var i=n-32;c.css("top","-"+i+"px")}else c.css("top","-"+n+"px");else W(window).scrollTop()<=0&&(W(".brk-open-top-bar").length&&c.find(".brk-open-top-bar").addClass("active"),W("body").hasClass("admin-bar")?c.css("top","32px"):c.css("top","0"))}}else c.css("top","0")};setTimeout(function(){e(n)},2e3),i(n),W(window).on("resize scroll",function(){e(n),i(n)})}if(W(".brk-open-top-bar").length&&!c.find(".brk-header__top-bar_scroll")){var d=c.find(".brk-open-top-bar");d.on("click",function(){d.toggleClass("active"),c.toggleClass("top-bar-active")})}function b(e){var n=window.innerWidth||W(window).width();if(a)var i=r.data("height-temp");c.hasClass("brk-header_not-fixed")||e<=n&&(0<W(window).scrollTop()?(c.addClass("brk-header_scroll"),a&&r.css("height",a+"px")):W(window).scrollTop()<=0&&(c.removeClass("brk-header_scroll"),a&&r.css("height",i+"px"))),0<W(window).scrollTop()?W(".brk-header-mobile").addClass("brk-header-mobile_scroll"):W(window).scrollTop()<=0&&W(".brk-header-mobile").removeClass("brk-header-mobile_scroll")}if(W(window).on("scroll",function(){if(c.find(".brk-header__top-bar_scroll")&&0<W(window).scrollTop()){var e=c.find(".brk-open-top-bar");e.unbind("click"),e.on("click",function(){e.toggleClass("active"),c.toggleClass("top-bar-active")})}}),a&&r.data("height-temp",r.height()),b(n),W(window).on("scroll",function(){b(n)}),1===o){var h=0;setTimeout(function(){W(window).on("scroll",function(){var e=W(this).scrollTop(),n=!1,i=!1;0<e&&(h<e?(n=!1,e<c.height()+c.offset().top&&!1===i&&(c.addClass("brk-header_sticky-hide"),i=!0)):(i=!1,e>c.offset().top&&!1===n&&(c.removeClass("brk-header_sticky-hide"),n=!0)),h=e)})},2500)}var k=!1;function v(e){var n=window.innerWidth||W(window).width();if(n<e&&!k){c.wrap('<div class="brk-header-mobile-wrap"><div class="brk-header-mobile-wrap__body"></div></div>');var i=W(".brk-header-mobile-wrap"),r=W(".brk-header-mobile-wrap__body"),a=c.data("logo-src"),o=c.data("bg-mobile");r.prepend('<div class="brk-before"></div><div class="brk-header-mobile-wrap__header"><div class="brk-header-mobile-wrap__close"><span></span></div></div>'),""!==a&&W(".brk-header-mobile-wrap__header").prepend('<div class="brk-header-mobile-wrap__logo"><img src="'+a+'" alt=""></div>'),""!==o&&void 0!==o&&i.css("background-image","url("+o+")"),i.before('<div class="brk-header-mobile-wrap-layer"></div>'),k=!0}else e<=n&&k&&(W(".brk-header-mobile-wrap__header").detach(),W(".brk-header-mobile-wrap-layer").remove(),W(".brk-before, .brk-header-mobile-wrap__header").remove(),c.unwrap(),c.unwrap(),k=!1);var t=W(".brk-header-mobile"),s=t.find(".brk-header-mobile__open"),l=(i=W(".brk-header-mobile-wrap")).find(".brk-header-mobile-wrap__close"),d=W(".brk-header-mobile-wrap-layer");t.length&&s.on("click",function(){W("body").addClass("brk-modal-open"),i.addClass("is-active"),d.addClass("is-active")}),i.length&&l.on("click",function(){W("body").removeClass("brk-modal-open"),i.removeClass("is-active"),d.removeClass("is-active")})}v(n),W(window).on("resize load",function(){v(n)});var f=!1;function p(e){var n=W(".brk-nav, .brk-header-popup-menu"),i=n.find(".brk-nav__children"),r=n.find(".brk-nav__menu > li").children("a"),a=n.find("a"),o=window.innerWidth||W(window).width();if(o<e&&!f){if(i.prepend('<div class="brk-nav__link-open"><i class="fa fa-angle-right"></i></div>'),W(".brk-nav__link-open").length){var t=W(".brk-nav__link-open");0<t.length&&t.on("click",function(){var e=W(this),n=e.parent(),i=n.children(".brk-nav-drop-down");n.toggleClass("children-active"),e.toggleClass("is-active"),i.slideToggle(400)}),r.each(function(){var e=W(this),n=e.attr("href");"/"!==n&&("#"===n[0]&&1===n.length||"javascript:void(0)"===n||!n.length)&&e.on("click",function(e){e.preventDefault();var n=W(this).parent(),i=n.children(".brk-nav-drop-down"),r=n.children(".brk-nav__link-open");n.toggleClass("children-active"),r.toggleClass("is-active"),i.slideToggle(400)})})}a.each(function(){var e=W(this),i=e.attr("href");"#"===i[0]&&e.on("click",function(e){if(e.preventDefault(),W(i).length){var n=W(this).parents(".brk-header-mobile-wrap");W("body").removeClass("brk-modal-open"),n.removeClass("is-active"),W(".brk-header-mobile-wrap-layer").removeClass("is-active")}})}),f=!0}else 0<W(".brk-nav__link-open").length&&e<=o&&f&&(W(".brk-nav__link-open").remove(),i.removeClass("children-active"),f=!1)}W(window).on("load",function(){p(n)}),W(window).on("resize",function(){p(n)}),W(".brk-nav__drop-down-effect").each(function(){var e=W(this),a=e.find(".dd-effect");e.on("mouseenter",function(){var e,n,i,r;e=a,n=10,r="left"===i?{opacity:0,left:10}:{opacity:0,left:-10},(e="left"===i?W(e.get().reverse()):e).css(r).each(function(e){W(this).delay(n*e).animate({opacity:1,left:0})})})}),W(".brk-quantity").find(".brk-quantity__arrows").on("click",function(){var e=W(this).parent().find(".brk-quantity__value"),n=e.val();W(this).hasClass("minus")&&1<n?e.val(+n-1):W(this).hasClass("plus")&&e.val(+n+1)});var u,_=W(".brk-info-menu"),w=W(".brk-info-menu-open"),m=_.find(".brk-info-menu__close"),g=window.innerWidth||W(window).width();function C(e,n,i,r){n=(e=W(e)).find(n),i=e.find(i);var a=window.innerWidth||W(window).width();a<r?n.unbind("click").on("click",function(){i.slideToggle(400)}):r<=a&&(n.unbind("click"),i.css("display",""))}function y(e){var n=window.innerWidth||W(window).width();n<e?W(".brk-lang:not(.brk-lang-rendered)").addClass("brk-lang-rendered").each(function(){var e=W(this),n=e.find(".brk-lang__open"),i=e.find(".brk-lang__option");e.unbind(),n.on("click",function(){i.slideToggle(300)})}).removeClass("brk-lang_interactive-rendered"):e<=n&&(W(".brk-lang_interactive:not(.brk-lang_interactive-rendered)").addClass("brk-lang_interactive-rendered").each(function(){var e=W(this),n=e.closest(".brk-header__top-bar, .brk-header__main-bar"),i=n.find(".container-fluid, .container"),r=n.find(".brk-header__item:not(.brk-lang_interactive)"),a=r.parents('[class*="col"]');n.css({height:n.outerHeight(),transition:"height .3s"}),e.on({mouseenter:function(){r.css("opacity","0"),i.css("background","transparent !important"),n.addClass("top-bar-bg"),W("div").is(".brk-overlay")||c.after('<div class="brk-overlay"></div>'),a.css("border","0")},mouseleave:function(){r.css("opacity","1"),i.removeAttr("style"),n.removeClass("top-bar-bg"),W("div").is(".brk-overlay")&&W(".brk-overlay").remove(),a.css("border","")}})}).removeClass("brk-lang-rendered"),W(".brk-lang__option").css("display",""),W(".brk-lang").find(".brk-lang__open").unbind("click"))}function T(){var i=window.innerWidth||W(window).width();if(!(i<992)){W(".brk-mini-cart, .brk-social-links, .brk-search, .brk-lang, .brk-nav__sub-menu, .flexMenu-popup").each(function(){var e=W(this),n=i/2+350;e.offset().left+e.width()/2<n?e.removeClass("brk-location-screen-left brk-location-screen-right").addClass("brk-location-screen-left"):e.removeClass("brk-location-screen-left brk-location-screen-right").addClass("brk-location-screen-right")})}}function x(){var e=W(".brk-mini-cart__open"),n=window.innerWidth||W(window).width();e.on("click",function(e){n<992&&e.preventDefault()})}w.on("click",function(){_.toggleClass("active"),w.toggleClass("open-active"),n<=g&&W("body").toggleClass("brk-modal-open")}),m.on("click",function(){_.hasClass("active")&&_.removeClass("active"),w.hasClass("open-active")&&w.removeClass("open-active"),n<=g&&W("body").hasClass("brk-modal-open")&&W("body").removeClass("brk-modal-open")}),W(document).on("click",function(e){W(e.target).closest(".brk-info-menu").length||W(e.target).closest(".brk-info-menu-open").length||(_.hasClass("active")&&_.removeClass("active"),w.hasClass("open-active")&&w.removeClass("open-active"),n<=g&&W("body").hasClass("brk-modal-open")),e.stopPropagation()}),C(".brk-mini-cart",".brk-mini-cart__open, .brk-mini-cart__info-open",".brk-mini-cart__menu",n),C(".brk-social-links",".brk-social-links__open",".brk-social-links__block",n),C(".brk-search",".brk-search__open",".brk-search__block",n),W(window).on("resize",function(){C(".brk-mini-cart",".brk-mini-cart__open, .brk-mini-cart__info-open",".brk-mini-cart__menu",n),C(".brk-social-links",".brk-social-links__open",".brk-social-links__block",n),C(".brk-search",".brk-search__open",".brk-search__block",n)}),u=window.innerWidth||W(window).width(),n<=u&&W(".brk-search_interactive").each(function(){var e=W(this),n=e.parents(".brk-header__main-bar"),i=n.children(".container-fluid, .container"),r=e.find(".brk-search__open"),a=e.find(".brk-search__close"),o=e.find(".brk-search__block"),t=o.find('[type="search"]'),s=n.find(".brk-header__item:not(.brk-search_interactive)"),l=s.parents('[class*="col"]');r.on("click",function(){o.addClass("active"),i.addClass("position-relative"),s.hide(0),W(this).hide(0),W("div").is(".brk-overlay")||c.after('<div class="brk-overlay"></div>'),setTimeout(function(){t.focus()},150),l.css("border","0")}),a.on("click",function(){o.removeClass("active"),s.show(0),r.show(0),i.removeClass("position-relative"),W("div").is(".brk-overlay")&&W(".brk-overlay").remove(),l.css("border","")}),W(document).on("click",function(e){W(e.target).closest(".brk-header").length||(o.removeClass("active"),s.show(0),r.show(0),i.removeClass("position-relative"),W("div").is(".brk-overlay")&&W(".brk-overlay").remove(),l.css("border","")),e.stopPropagation()})}),window.addEventListener("load",function(){y(n)}),W(window).on("resize",function(){y(n)}),function(){if(0<W(".brk-header-popup-menu").length){c.after('<div class="brk-header-popup-menu-layer"></div>');var n=W(".brk-header-popup-menu").find(".brk-header-popup-menu__open-close"),i=W(".brk-header-popup-menu__menu"),r=W(".brk-header-popup-menu-layer"),a=i.find("a");0<W(".brk-header_vertical").length&&(W(".brk-header").append(i),i.addClass("brk-moved-by-js")),n.on("click",function(){W(this).toggleClass("is-active"),i.fadeToggle(300),r.fadeToggle(500)}),r.on("click",function(){var e=W(this);n.toggleClass("is-active"),i.fadeToggle(300),e.fadeToggle(500)}),a.each(function(){var e=W(this).attr("href");"#"===e[0]&&1<e.length&&W(e).length&&a.on("click",function(){n.removeClass("is-active"),i.fadeOut(300),r.fadeOut(500)})})}}(),W(".brk-totop").on("click",function(){W("html, body").stop().animate({scrollTop:0},500)}),T(),W(window).on("load resize",function(){setTimeout(function(){T()},300)}),x(),W(window).on("load resize",function(){x()})})}},Berserk.behaviors.header_init_menu_flex={attach:function(e,n){if(!(W(".brk-nav:not(.rendered)").length<1)){if("function"!=typeof W.fn.flexMenu)return console.log("Waiting for the flexMenu library"),void setTimeout(Berserk.behaviors.header_init_menu_flex.attach,n.timeout_delay,e,n);var r=!0;W(e).parent().find(".brk-nav:not(.rendered)").addClass("rendered").each(function(){var e=W(this),n=e.find(".brk-nav__menu"),i=e.data("flexmenu-link-text");0===e.closest(".brk-header_vertical").length&&(i=i||"More",W(window).on("load",function(){setTimeout(a(n,i),350)}),W(window).on("resize",function(){a(n,i)}),setTimeout(function(){W(window).trigger("resize")},500))})}function a(n,e){var i=window.innerWidth||W(window).width();i<992&&!r?(n.flexMenu({undo:!0}),r=!0):992<=i&&r&&(n.flexMenu({linkText:e}),setTimeout(function(){if(W(".flexMenu-viewMore").length){var e=W(".flexMenu-popup").offset().left+80;n.find(".flexMenu-viewMore .brk-nav__mega-menu").attr("style","width: calc(100vw - "+e+"px)")}},500),r=!1)}}}}(jQuery);