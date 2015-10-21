do ($=jQuery) ->
  $.fn.toggleForm = (opt) ->
    to_s = (value) -> value + ''
    checkValue = (checkObject, value, op) ->
      if op == 'checked'
        return checkObject.prop('checked')
      if op == 'unchecked'
        return !checkObject.prop('checked')

      check = checkObject.val()
      if op == '='
        if settings.value instanceof Array
          return $.inArray(check, value.map(to_s)) >= 0
        else
          return check == to_s(value)
      else if op == '>'
        return check > to_s(value)
      else if op == '>='
        return check >= to_s(value)
      else if op == '<'
        return check < to_s(value)
      else if op == '<='
        return check <= to_s(value)
      else if op == '!='
        return !checkValue(check, value, '=')
      else
        console.error("Error! Undefined Operator: '#{op}'")


    # set defaults
    defaults = {
      operator: '=',
      value: [],
      targetSelector: '',
      onTargetShown: ->,
      onTargetHidden: ->
    }

    # merge settings
    settings = $.extend(defaults, opt)

    # fixme: 函数にまとめたい
    target = settings.targetSelector
    if checkValue($(@), settings.value, settings.operator)
      $(target).each ->
        $(@).show()
      settings.cb_show()
    else
      $(target).each ->
        $(@).hide()
      settings.cb_hide()

    # 検索フォーム用
    $(@).each ->
      $(@).change ->
        target = settings.targetSelector
        if checkValue($(@), settings.value, settings.operator)
          $(target).each ->
            $(@).show()
          settings.onTargetShown()
        else
          $(target).each ->
            $(@).hide()
          settings.onTargetHidden()
    @
