---
layout: demo
title: Histogram animation with React
bodyclass: demo
custom_css:
  - demo
---

<style>
.bar rect {
  fill: steelblue;
  shape-rendering: crispEdges;
}

.bar.barheight-enter rect {
  height: 0;
}

.bar.barheight-enter.barheight-enter-active rect {
  transition: height .5s ease-in;
}

.bar text {
  fill: #fff;
  font-size: 11px;
}

.axis text {
  font-size: 11px;
}

.axis path, .axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}
</style>
<div id="react-transition" style="border: 1px solid #ccc;"></div>
<p></p>

Using
[React Tween State](https://github.com/chenglou/react-tween-state) to
get a feel for animating elements with react. This animates the
histogram bars height starting from 0 height and animates the width
starting from 0 width.

{% include javascript.html js_file="react-histogram-transition" %}
