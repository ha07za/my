
(function ($) {
    "use strict";
    
    $(window).on('keyup', function (event) {
        if (event.keyCode === 27) {
            var data = $('.howarabicpopup').data('howarabicpopup');
            if (data.options.closable) {
                $('.howarabicpopup').howarabicpopup('hide');
            }
        }
    });

    $(document).on('click', '.howarabicpopup', function () {
        var data = $(this).data('howarabicpopup');
        if (data.options.closable) {
            $(this).howarabicpopup('hide');
        }
    });

    $(document).on('click', '.howarabicpopup .howarabicpopup-container', function (event) {
        event.stopPropagation();
    });
    
    $(document).on('click', '[data-dismiss="howarabicpopup"]', function () {
        $(this).parent().parent().parent().howarabicpopup('hide');
    });

    $(document).on('click', '[howarabicpopup-target]', function () {
        $($(this).attr('howarabicpopup-target')).howarabicpopup('show');
    });

    var howarabicpopup = function (element, options) {
        this.options = options;
        this.$element = $(element);
    };

    howarabicpopup.prototype = {
        width: function () {

            
        },
        
        show: function () {
            this.$element.show();
            this.options.onShow();
        },
        
        hide: function () {
            this.$element.hide();
            this.options.onClose();
        },

        isVisible: function () {
            return this.$element.css('visibility') === 'visible' ? true : false;
        },
        
        constructor: function () {
            var _this = this,
                container = this.$element.find('.howarabicpopup-container');
                
            if (this.options.autoOpen) {
                this.show();
            }
            
            if (Number(this.options.width)) {
                container.css({
                    'width':  _this.options.width+'px'
                });
            } else {
                switch (_this.options.width) {
                    case 'small':
                        container.css({'width': '40%'});
                        break;
                    case 'medium':
                        container.css({'width': '75%'});
                        break;
                    case 'full':
                        container.css({'width': '95%'});
                        break;
                }
            }
        }
    };

    var old = $.fn.howarabicpopup;

    $.fn.howarabicpopup = function (option, value) {
        var get = '',
            element = this.each(function () {
                var $this = $(this),
                    data = $this.data('howarabicpopup'),
                    options = $.extend({}, $.fn.howarabicpopup.defaults, option, typeof option === 'object' &amp;&amp; option);

                if (!data) {
                    $this.data('howarabicpopup', (data = new howarabicpopup(this, options)));
                    data.constructor();
                }

                if (typeof option === 'string') {
                    get = data[option](value);
                }
            });

        if (typeof get !== 'undefined') {
            return get;
        } else {
            return element;
        }
    };

    $.fn.howarabicpopup.defaults = {
        'width': 640,
        'closable': true,
        'autoOpen': false,
        'onShow': function () {},
        'onClose': function () {}
    };

    $.fn.howarabicpopup.noConflict = function () {
        $.fn.howarabicpopup = old;
        return this;
    };
})(window.jQuery);



  $(&#39;#popup-box&#39;).howarabicpopup({
  &#39;autoOpen&#39;: true
});


  $(&#39;#popup-box&#39;).howarabicpopup({
  &#39;autoOpen&#39;: true
});
