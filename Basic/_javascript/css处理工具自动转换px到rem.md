```css
/* 函数 */
@function px2em($px, $base-font-size: 16px) {
  @if (unitless($px)) {
    @warn "Assuming #{$px} to be in pixels, attempting to convert it into pixels for you";
    /* That may fail. */
    @return px2em($px + 0px);
  } @else if (unit($px) == em) {
    @return $px;
  }
  @return ($px / $base-font-size) * 1em;
}
/* 混合宏 */
@mixin px2rem($property,$px-values,$baseline-px:16px,$support-for-ie:false){
  /* Conver the baseline into rems */
  $baseline-rem: $baseline-px / 1rem * 1;
  /* Print the first line in pixel values */
  @if $support-for-ie {
    #{$property}: $px-values;
  }
  /* if there is only one (numeric) value, return the property/value line for it. */
  @if type-of($px-values) == "number"{
    #{$property}: $px-values / $baseline-rem;
  }
  @else {
    /* Create an empty list that we can dump values into */
    $rem-values:();
    @each $value in $px-values{
      /* If the value is zero or not a number, return it */
      @if $value == 0 or type-of($value) != "number"{
        $rem-values: append($rem-values, $value / $baseline-rem);
      }
    }
    /* Return the property and its list of converted values */
    #{$property}: $rem-values;
  }
}
```