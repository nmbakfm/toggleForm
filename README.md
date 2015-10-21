# toggleForm.js

## Overview

When `<input>` value changed as target one, toggle shown/hidden HTML Elements.

## Install

```
bower install toggleForm
```

**NOTICE:** toggleForm depends on jQuery.

## Usage

```html
<p>show message if input value is "abc".</p>
<input id="input-field" type="text" /><br/>
<span id="text-abc">You type correct value</span>

<script type="text/javascript">
$(function(){
  $("#input-field").toggleForm({
    value: "abc",
    targetSelector: "#text-abc"
  })
});
</script>
```

## Options

|field||
|:--:|:---|
|value|if a value of `<input>` is this `value` show `targetSelector` element. required except for the case using `checked` or `unchecked` as `operator`|
|operator|'=', '!=', '>', '>=', '<', '<=', 'checked', 'unchecked' are available. '=' is default value|
|targetSelector|selector of HTML element that will change display|
|onTargetShown|this function called when `targetSelector` get shown|
|onTargetHidden|this function called when `targetSelector` get hidden|

* * *

plz improve my poor English ;(
