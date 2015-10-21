(function() {
  (function($) {
    return $.fn.toggleForm = function(opt) {
      var checkValue, defaults, settings, target, to_s;
      to_s = function(value) {
        return value + '';
      };
      checkValue = function(checkObject, value, op) {
        var check;
        if (op === 'checked') {
          return checkObject.prop('checked');
        }
        if (op === 'unchecked') {
          return !checkObject.prop('checked');
        }
        check = checkObject.val();
        if (op === '=') {
          if (settings.value instanceof Array) {
            return $.inArray(check, value.map(to_s)) >= 0;
          } else {
            return check === to_s(value);
          }
        } else if (op === '>') {
          return check > to_s(value);
        } else if (op === '>=') {
          return check >= to_s(value);
        } else if (op === '<') {
          return check < to_s(value);
        } else if (op === '<=') {
          return check <= to_s(value);
        } else if (op === '!=') {
          return !checkValue(check, value, '=');
        } else {
          return console.error("Error! Undefined Operator: '" + op + "'");
        }
      };
      defaults = {
        operator: '=',
        value: [],
        targetSelector: '',
        onTargetShown: function() {},
        onTargetHidden: function() {}
      };
      settings = $.extend(defaults, opt);
      target = settings.targetSelector;
      if (checkValue($(this), settings.value, settings.operator)) {
        $(target).each(function() {
          return $(this).show();
        });
        settings.cb_show();
      } else {
        $(target).each(function() {
          return $(this).hide();
        });
        settings.cb_hide();
      }
      $(this).each(function() {
        return $(this).change(function() {
          target = settings.targetSelector;
          if (checkValue($(this), settings.value, settings.operator)) {
            $(target).each(function() {
              return $(this).show();
            });
            return settings.onTargetShown();
          } else {
            $(target).each(function() {
              return $(this).hide();
            });
            return settings.onTargetHidden();
          }
        });
      });
      return this;
    };
  })(jQuery);

}).call(this);
