!function(s){"use strict";s.fn.berserkforms=function(e){var t=s.extend({},{formWrap:"brk-form-wrap",formWrapActive:"brk-form-wrap-active",inputLabel:"input-label"},e),n=0;return this.each(function(){var e=s(this),r=null,a=null;s(this).addClass("rendered"),r=void 0!==e.attr("placeholder")&&e.attr("placeholder"),e.removeAttr("placeholder"),void 0!==e.attr("id")?a=e.attr("id"):(a="brkin-"+n,e.attr("id",a)),e.wrap(function(){return'<div class="'+t.formWrap+'"></div>'}),void 0===e.attr("readonly")&&!1!==r&&e.parent().append('<label class="'+t.inputLabel+'" for="'+a+'">'+r+"</label>"),""!==e.val()&&void 0===e.attr("readonly")&&e.parent().addClass(t.formWrapActive),e.on("focus",function(){void 0===e.attr("readonly")&&e.parent().addClass(t.formWrapActive)}),e.on("blur",function(){""===e.val()&&e.parent().removeClass(t.formWrapActive)}),n++}),this}}(jQuery),function(i){Berserk.behaviors.form_controls={attach:function(e,r){if(i('.brk-form-strict [type="text"]:not(.rendered), .brk-form-strict [type="search"]:not(.rendered), .brk-form-strict [type="password"]:not(.rendered), .brk-form-strict [type="email"]:not(.rendered), .brk-form-strict [type="tel"]:not(.rendered), .brk-form-strict textarea:not(.rendered)').berserkforms(),void 0===i.fn.styler)return console.log("Waiting for the styler library"),void setTimeout(Berserk.behaviors.form_controls.attach,r.timeout_delay,e,r);var a,t=i("select"),n=i(".wpDataTables select");0!==t.length&&0===n.length&&i(e).parent().find("select:not(.rendered)").styler(),(a=i(e).parent().find('[type="date"]:not(.rendered)')).each(function(){var e=i(this);i(this).addClass("rendered"),e.wrap(function(){return'<div class="brk-form-date-wrap"></div>'})}),a.parent().append('<span class="icon-before"><i class="fa fa-calendar" aria-hidden="true"></i></span>'),i(e).parent().find('.brk-form [type="file"]:not(.rendered)').each(function(){var a=i(this),e="brk-form-file-wrap";i(this).addClass("rendered"),"file"===a.attr("type")&&(a.parents().hasClass("brk-form-strict")?(a.wrap(function(){return'<label class="'+e+'"></label>'}),a.parent().append('<span class="file-info">Choose file</span><span class="icon-before"><i class="fa fa-upload" aria-hidden="true"></i></span>')):a.parents().hasClass("brk-form-round")?(a.wrap(function(){return'<label class="'+e+'"></label>'}),a.parent().append('<span class="file-info">Choose file</span><span class="icon-before"><i class="fal fa-upload" aria-hidden="true"></i></span>')):a.parents().hasClass("brk-form-transparent")&&(a.wrap(function(){return'<label class="brk-form-file-wrap-transparent"></label>'}),a.parent().append('<span class="file-info">Choose file</span><span class="icon-before"><i class="fa fa-upload" aria-hidden="true"></i></span>'))),a.on("change",function(){var e=a.val(),r=i(".file-info");e=e.replace(/\\/g,"/").split("/").pop(),r.html(e)})}),i("body").find('.brk-form [type="checkbox"]:not(.rendered)').each(function(){var e=i(this);i(this).addClass("rendered"),"checkbox"===e.attr("type")&&(e.wrap(function(){return'<label class="brk-form-checkbox"></label>'}),e.parent().append('<span class="checkbox-custom"><i class="fa fa-check" aria-hidden="true"></i></span>'))}),i(e).parent().find('.brk-form [type="radio"]:not(.rendered)').each(function(){var e=i(this);i(this).addClass("rendered"),"radio"===e.attr("type")&&(e.wrap(function(){return'<label class="brk-form-radio"></label>'}),e.parents().hasClass("brk-form-transparent")?e.parent().append('<span class="radio-custom"><i class="fa fa-check" aria-hidden="true"></i></span>'):e.parent().append('<span class="radio-custom"></span>'))}),i(".brk-subscribe-mail:not(.rendered)").addClass("rendered").each(function(){var a=i(this);a.on("submit",function(e){e.preventDefault();var r=i(this).serialize();i.getJSON("php/subscribe.php",r,function(e){var r="<span class='brk-subscribe-message font__family-open-sans font__size-14 line__height-21 opacity-80'>"+e.status+"</span>";a.append(r),setTimeout(function(){a.find(".brk-subscribe-message").fadeOut(),a.trigger("reset")},3e3)})})});var s=i("input,textarea");s.on("focus",function(){i(this).data("placeholder",i(this).attr("placeholder")),i(this).attr("placeholder","")}),s.on("blur",function(){i(this).attr("placeholder",i(this).data("placeholder"))})}}}(jQuery);