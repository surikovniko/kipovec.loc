!/**
 * Highcharts JS v11.4.3 (2024-05-22)
 *
 * Timeline series
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Daniel Studencki
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/timeline",["highcharts"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function i(t,e,i,o){t.hasOwnProperty(e)||(t[e]=o.apply(null,i),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}i(e,"Series/Timeline/TimelinePoint.js",[e["Core/Series/Point.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e,i){var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=e.seriesTypes,s=r.line.prototype.pointClass,a=r.pie.prototype.pointClass,l=i.defined,p=i.isNumber,h=i.merge,c=i.objectEach,d=i.pick;return function(e){function i(t,i){var o,n=e.call(this,t,i)||this;return null!==(o=n.name)&&void 0!==o||(n.name="Event"),n.y=1,n}return n(i,e),i.prototype.alignConnector=function(){var t=this.series,e=this.dataLabel,i=e.connector,o=e.options||{},n=o.connectorWidth||0,r=this.series.chart,s=i.getBBox(),a={x:s.x+(e.translateX||0),y:s.y+(e.translateY||0)};r.inverted?a.y-=n/2:a.x+=n/2,i[r.isInsidePlot(a.x,a.y)?"animate":"attr"]({d:this.getConnectorPath()}),i.addClass("highcharts-color-"+this.colorIndex),t.chart.styledMode||i.attr({stroke:o.connectorColor||this.color,"stroke-width":o.connectorWidth,opacity:e[l(e.newOpacity)?"newOpacity":"opacity"]})},i.prototype.drawConnector=function(){var t=this.dataLabel,e=this.series;t&&(t.connector||(t.connector=e.chart.renderer.path(this.getConnectorPath()).attr({zIndex:-1}).add(t)),this.series.chart.isInsidePlot(t.x||0,t.y||0)&&this.alignConnector())},i.prototype.getConnectorPath=function(){var t,e=this.plotX,i=void 0===e?0:e,o=this.plotY,n=void 0===o?0:o,r=this.series,s=this.dataLabel,a=r.chart,l=r.xAxis.len,h=a.inverted,d=h?"x2":"y2";if(s){var u=s.targetPosition,y=(s.alignAttr||s)[d[0]]<r.yAxis.len/2,f={x1:i,y1:n,x2:i,y2:p(u.y)?u.y:s.y};return h&&(f={x1:n,y1:l-i,x2:u.x||s.x,y2:l-i}),y&&(f[d]+=s[h?"width":"height"]||0),c(f,function(t,e){f[e]-=(s.alignAttr||s)[e[0]]}),a.renderer.crispLine([["M",f.x1,f.y1],["L",f.x2,f.y2]],(null===(t=s.options)||void 0===t?void 0:t.connectorWidth)||0)}return[]},i.prototype.isValid=function(){return null!==this.options.y},i.prototype.setState=function(){var t=e.prototype.setState;this.isNull||t.apply(this,arguments)},i.prototype.setVisible=function(t,e){var i=this.series;e=d(e,i.options.ignoreHiddenPoint),a.prototype.setVisible.call(this,t,!1),i.processData(),e&&i.chart.redraw()},i.prototype.applyOptions=function(i,o){return i=t.prototype.optionsToObject.call(this,i),this.userDLOptions=h(this.userDLOptions,i.dataLabels),e.prototype.applyOptions.call(this,i,o)},i}(s)}),i(e,"Series/Timeline/TimelineSeriesDefaults.js",[],function(){return{colorByPoint:!0,stickyTracking:!1,ignoreHiddenPoint:!0,legendType:"point",lineWidth:4,tooltip:{headerFormat:'<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {point.key}</span><br/>',pointFormat:"{point.description}"},states:{hover:{lineWidthPlus:0}},dataLabels:{enabled:!0,allowOverlap:!0,alternate:!0,backgroundColor:"#ffffff",borderWidth:1,borderColor:"#999999",borderRadius:3,color:"#333333",connectorWidth:1,distance:void 0,formatter:function(){return(this.series.chart.styledMode?'<span class="highcharts-color-'+this.point.colorIndex+'">● </span>':'<span style="color:'+this.point.color+'">● </span>')+('<span class="highcharts-strong">'+(this.key||""))+"</span><br/>"+(this.point.label||"")},style:{textOutline:"none",fontWeight:"normal",fontSize:"0.8em"},shadow:!1,verticalAlign:"middle"},marker:{enabledThreshold:0,symbol:"square",radius:6,lineWidth:2,height:15},showInLegend:!1,colorKey:"x",legendSymbol:"rectangle"}}),i(e,"Series/Timeline/TimelineSeries.js",[e["Core/Series/SeriesRegistry.js"],e["Series/Timeline/TimelinePoint.js"],e["Series/Timeline/TimelineSeriesDefaults.js"],e["Core/Utilities.js"]],function(t,e,i,o){var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),s=t.seriesTypes,a=s.column,l=s.line,p=o.addEvent,h=o.arrayMax,c=o.arrayMin,d=o.defined,u=o.extend,y=o.merge,f=o.pick,g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.alignDataLabel=function(e,i,o,n){var r,s,a,l,p=this.chart.inverted,h=this.visibilityMap.filter(function(t){return!!t}),c=this.visiblePointsCount||0,d=h.indexOf(e),u=this.options.dataLabels,y=e.userDLOptions||{},g=u.alternate?d&&d!==c-1?2:1.5:1,b=Math.floor(this.xAxis.len/c),v=i.padding;e.visible&&(s=Math.abs(y.x||e.options.dataLabels.x),p?(a=(s-v)*2-(e.itemHeight||0)/2,l={width:f(null===(r=u.style)||void 0===r?void 0:r.width,"".concat(.4*this.yAxis.len,"px")),textOverflow:(i.width||0)/a*(i.height||0)/2>b*g?"ellipsis":"none"}):l={width:(y.width||u.width||b*g-2*v)+"px"},i.css(l),this.chart.styledMode||i.shadow(u.shadow)),t.prototype.alignDataLabel.apply(this,arguments)},e.prototype.bindAxes=function(){t.prototype.bindAxes.call(this),this.xAxis.userOptions.type||(this.xAxis.categories=this.xAxis.hasNames=!0)},e.prototype.distributeDL=function(){var t,e=this.options.dataLabels,i=this.chart.inverted,o=1;if(e)for(var n=f(e.distance,i?20:100),r=0,s=this.points;r<s.length;r++){var a=s[r],l=((t={})[i?"x":"y"]=e.alternate&&o%2?-n:n,t);i&&(l.align=e.alternate&&o%2?"right":"left"),a.options.dataLabels=y(l,a.userDLOptions),o++}},e.prototype.generatePoints=function(){t.prototype.generatePoints.call(this);for(var e=this.points,i=0,o=e.length;i<o;++i)e[i].applyOptions({x:this.xData[i]},this.xData[i])},e.prototype.getVisibilityMap=function(){return(this.data.length?this.data:this.userOptions.data||[]).map(function(t){return!!t&&!1!==t.visible&&!t.isNull&&t})},e.prototype.getXExtremes=function(t){var e=this,i=t.filter(function(t,i){return e.points[i].isValid()&&e.points[i].visible});return{min:c(i),max:h(i)}},e.prototype.init=function(){var e=this;t.prototype.init.apply(e,arguments),e.eventsToUnbind.push(p(e,"afterTranslate",function(){for(var t,i=Number.MAX_VALUE,o=0,n=e.points;o<n.length;o++){var r=n[o];r.isInside=r.isInside&&r.visible,r.visible&&!r.isNull&&(d(t)&&(i=Math.min(i,Math.abs(r.plotX-t))),t=r.plotX)}e.closestPointRangePx=i})),e.eventsToUnbind.push(p(e,"drawDataLabels",function(){e.distributeDL()})),e.eventsToUnbind.push(p(e,"afterDrawDataLabels",function(){for(var t,i=0,o=e.points;i<o.length;i++){var n=o[i];(t=n.dataLabel)&&(t.animate=function(t){return this.targetPosition&&(this.targetPosition=t),this.renderer.Element.prototype.animate.apply(this,arguments)},t.targetPosition||(t.targetPosition={}),n.drawConnector())}})),e.eventsToUnbind.push(p(e.chart,"afterHideOverlappingLabel",function(){for(var t=0,i=e.points;t<i.length;t++){var o=i[t];o.dataLabel&&o.dataLabel.connector&&o.dataLabel.oldOpacity!==o.dataLabel.newOpacity&&o.alignConnector()}}))},e.prototype.markerAttribs=function(e,i){var o,n=this.options.marker,r=e.marker||{},s=r.symbol||n.symbol,a=f(r.width,n.width,this.closestPointRangePx),l=f(r.height,n.height),p=0;if(this.xAxis.dateTime)return t.prototype.markerAttribs.call(this,e,i);i&&(o=n.states[i]||{},p=f((r.states&&r.states[i]||{}).radius,o.radius,p+(o.radiusPlus||0))),e.hasImage=s&&0===s.indexOf("url");var h={x:Math.floor(e.plotX)-a/2-p/2,y:e.plotY-l/2-p/2,width:a+p,height:l+p};return this.chart.inverted?{y:h.x&&h.width&&this.xAxis.len-h.x-h.width,x:h.y&&h.y,width:h.height,height:h.width}:h},e.prototype.processData=function(){var e,i=0;this.visibilityMap=this.getVisibilityMap();for(var o=0,n=this.visibilityMap;o<n.length;o++)n[o]&&i++;for(e=0,this.visiblePointsCount=i;e<this.xData.length;e++)this.yData[e]=1;t.prototype.processData.call(this,arguments)},e.defaultOptions=y(l.defaultOptions,i),e}(l);return u(g.prototype,{drawTracker:a.prototype.drawTracker,pointClass:e,trackerGroups:["markerGroup","dataLabelsGroup"]}),t.registerSeriesType("timeline",g),g}),i(e,"masters/modules/timeline.src.js",[e["Core/Globals.js"]],function(t){return t})});