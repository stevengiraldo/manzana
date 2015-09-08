!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t,e){function i(){return new Date(Date.UTC.apply(Date,arguments))}function a(){var t=new Date;return i(t.getFullYear(),t.getMonth(),t.getDate())}function s(t,e){return t.getUTCFullYear()===e.getUTCFullYear()&&t.getUTCMonth()===e.getUTCMonth()&&t.getUTCDate()===e.getUTCDate()}function n(t){return function(){return this[t].apply(this,arguments)}}function r(e,i){function a(t,e){return e.toLowerCase()}var s,n=t(e).data(),r={},h=new RegExp("^"+i.toLowerCase()+"([A-Z])");i=new RegExp("^"+i.toLowerCase());for(var o in n)i.test(o)&&(s=o.replace(h,a),r[s]=n[o]);return r}function h(e){var i={};if(g[e]||(e=e.split("-")[0],g[e])){var a=g[e];return t.each(f,function(t,e){e in a&&(i[e]=a[e])}),i}}var o=function(){var e={get:function(t){return this.slice(t)[0]},contains:function(t){for(var e=t&&t.valueOf(),i=0,a=this.length;a>i;i++)if(this[i].valueOf()===e)return i;return-1},remove:function(t){this.splice(t,1)},replace:function(e){e&&(t.isArray(e)||(e=[e]),this.clear(),this.push.apply(this,e))},clear:function(){this.length=0},copy:function(){var t=new o;return t.replace(this),t}};return function(){var i=[];return i.push.apply(i,arguments),t.extend(i,e),i}}(),d=function(e,i){this._process_options(i),this.dates=new o,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=t(e),this.isInline=!1,this.isInput=this.element.is("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.picker=t(D.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("tfoot .today, tfoot .clear").attr("colspan",function(t,e){return parseInt(e)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};d.prototype={constructor:d,_process_options:function(s){this._o=t.extend({},this._o,s);var n=this.o=t.extend({},this._o),r=n.language;switch(g[r]||(r=r.split("-")[0],g[r]||(r=p.language)),n.language=r,n.startView){case 2:case"decade":n.startView=2;break;case 1:case"year":n.startView=1;break;default:n.startView=0}switch(n.minViewMode){case 1:case"months":n.minViewMode=1;break;case 2:case"years":n.minViewMode=2;break;default:n.minViewMode=0}switch(n.maxViewMode){case 0:case"days":n.maxViewMode=0;break;case 1:case"months":n.maxViewMode=1;break;default:n.maxViewMode=2}n.startView=Math.min(n.startView,n.maxViewMode),n.startView=Math.max(n.startView,n.minViewMode),n.multidate!==!0&&(n.multidate=Number(n.multidate)||!1,n.multidate!==!1&&(n.multidate=Math.max(0,n.multidate))),n.multidateSeparator=String(n.multidateSeparator),n.weekStart%=7,n.weekEnd=(n.weekStart+6)%7;var h=D.parseFormat(n.format);if(n.startDate!==-(1/0)&&(n.startDate?n.startDate instanceof Date?n.startDate=this._local_to_utc(this._zero_time(n.startDate)):n.startDate=D.parseDate(n.startDate,h,n.language):n.startDate=-(1/0)),n.endDate!==1/0&&(n.endDate?n.endDate instanceof Date?n.endDate=this._local_to_utc(this._zero_time(n.endDate)):n.endDate=D.parseDate(n.endDate,h,n.language):n.endDate=1/0),n.daysOfWeekDisabled=n.daysOfWeekDisabled||[],t.isArray(n.daysOfWeekDisabled)||(n.daysOfWeekDisabled=n.daysOfWeekDisabled.split(/[,\s]*/)),n.daysOfWeekDisabled=t.map(n.daysOfWeekDisabled,function(t){return parseInt(t,10)}),n.daysOfWeekHighlighted=n.daysOfWeekHighlighted||[],t.isArray(n.daysOfWeekHighlighted)||(n.daysOfWeekHighlighted=n.daysOfWeekHighlighted.split(/[,\s]*/)),n.daysOfWeekHighlighted=t.map(n.daysOfWeekHighlighted,function(t){return parseInt(t,10)}),n.datesDisabled=n.datesDisabled||[],!t.isArray(n.datesDisabled)){var o=[];o.push(D.parseDate(n.datesDisabled,h,n.language)),n.datesDisabled=o}n.datesDisabled=t.map(n.datesDisabled,function(t){return D.parseDate(t,h,n.language)});var d=String(n.orientation).toLowerCase().split(/\s+/g),l=n.orientation.toLowerCase();if(d=t.grep(d,function(t){return/^auto|left|right|top|bottom$/.test(t)}),n.orientation={x:"auto",y:"auto"},l&&"auto"!==l)if(1===d.length)switch(d[0]){case"top":case"bottom":n.orientation.y=d[0];break;case"left":case"right":n.orientation.x=d[0]}else l=t.grep(d,function(t){return/^left|right$/.test(t)}),n.orientation.x=l[0]||"auto",l=t.grep(d,function(t){return/^top|bottom$/.test(t)}),n.orientation.y=l[0]||"auto";else;if(n.defaultViewDate){var c=n.defaultViewDate.year||(new Date).getFullYear(),u=n.defaultViewDate.month||0,f=n.defaultViewDate.day||1;n.defaultViewDate=i(c,u,f)}else n.defaultViewDate=a();n.showOnFocus=n.showOnFocus!==e?n.showOnFocus:!0},_events:[],_secondaryEvents:[],_applyEvents:function(t){for(var i,a,s,n=0;n<t.length;n++)i=t[n][0],2===t[n].length?(a=e,s=t[n][1]):3===t[n].length&&(a=t[n][1],s=t[n][2]),i.on(s,a)},_unapplyEvents:function(t){for(var i,a,s,n=0;n<t.length;n++)i=t[n][0],2===t[n].length?(s=e,a=t[n][1]):3===t[n].length&&(s=t[n][1],a=t[n][2]),i.off(a,s)},_buildEvents:function(){var e={keyup:t.proxy(function(e){-1===t.inArray(e.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:t.proxy(this.keydown,this),paste:t.proxy(this.paste,this)};this.o.showOnFocus===!0&&(e.focus=t.proxy(this.show,this)),this.isInput?this._events=[[this.element,e]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),e],[this.component,{click:t.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:t.proxy(this.show,this)}]],this._events.push([this.element,"*",{blur:t.proxy(function(t){this._focused_from=t.target},this)}],[this.element,{blur:t.proxy(function(t){this._focused_from=t.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":t.proxy(function(t){this.update(t.date)},this)}]),this._secondaryEvents=[[this.picker,{click:t.proxy(this.click,this)}],[t(window),{resize:t.proxy(this.place,this)}],[t(document),{mousedown:t.proxy(function(e){this.element.is(e.target)||this.element.find(e.target).length||this.picker.is(e.target)||this.picker.find(e.target).length||this.picker.hasClass("datepicker-inline")||t(this.picker).hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(e,i){var a=i||this.dates.get(-1),s=this._utc_to_local(a);this.element.trigger({type:e,date:s,dates:t.map(this.dates,this._utc_to_local),format:t.proxy(function(t,e){0===arguments.length?(t=this.dates.length-1,e=this.o.format):"string"==typeof t&&(e=t,t=this.dates.length-1),e=e||this.o.format;var i=this.dates.get(t);return D.formatDate(i,e,this.o.language)},this)})},show:function(){return this.element.attr("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&t(this.element).blur(),this)},hide:function(){return this.isInline?this:this.picker.is(":visible")?(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this._trigger("hide"),this):this},remove:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(e){var i;if(e.originalEvent.clipboardData&&e.originalEvent.clipboardData.types&&-1!==t.inArray("text/plain",e.originalEvent.clipboardData.types))i=e.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;i=window.clipboardData.getData("Text")}this.setDate(i),this.update(),e.preventDefault()},_utc_to_local:function(t){return t&&new Date(t.getTime()+6e4*t.getTimezoneOffset())},_local_to_utc:function(t){return t&&new Date(t.getTime()-6e4*t.getTimezoneOffset())},_zero_time:function(t){return t&&new Date(t.getFullYear(),t.getMonth(),t.getDate())},_zero_utc_time:function(t){return t&&new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()))},getDates:function(){return t.map(this.dates,this._utc_to_local)},getUTCDates:function(){return t.map(this.dates,function(t){return new Date(t)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var t=this.dates.get(-1);return"undefined"!=typeof t?new Date(t):null},clearDates:function(){var t;this.isInput?t=this.element:this.component&&(t=this.element.find("input")),t&&t.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var e=t.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,e),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var e=t.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,t.map(e,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this},setDate:n("setDates"),setUTCDate:n("setUTCDates"),setValue:function(){var t=this.getFormattedDate();return this.isInput?this.element.val(t):this.component&&this.element.find("input").val(t),this},getFormattedDate:function(i){i===e&&(i=this.o.format);var a=this.o.language;return t.map(this.dates,function(t){return D.formatDate(t,i,a)}).join(this.o.multidateSeparator)},setStartDate:function(t){return this._process_options({startDate:t}),this.update(),this.updateNavArrows(),this},setEndDate:function(t){return this._process_options({endDate:t}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(t){return this._process_options({daysOfWeekDisabled:t}),this.update(),this.updateNavArrows(),this},setDaysOfWeekHighlighted:function(t){return this._process_options({daysOfWeekHighlighted:t}),this.update(),this},setDatesDisabled:function(t){this._process_options({datesDisabled:t}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return this;var e=this.picker.outerWidth(),i=this.picker.outerHeight(),a=10,s=t(this.o.container),n=s.width(),r=s.height(),h=s.scrollTop(),o=s.offset(),d=[];this.element.parents().each(function(){var e=t(this).css("z-index");"auto"!==e&&0!==e&&d.push(parseInt(e))});var l=Math.max.apply(Math,d)+10,c=this.component?this.component.parent().offset():this.element.offset(),u=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),p=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),f=c.left-o.left,g=c.top-o.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(f-=e-p)):c.left<0?(this.picker.addClass("datepicker-orient-left"),f-=c.left-a):f+e>n?(this.picker.addClass("datepicker-orient-right"),f=c.left+p-e):this.picker.addClass("datepicker-orient-left");var D,v,m=this.o.orientation.y;if("auto"===m&&(D=-h+g-i,v=h+r-(g+u+i),m=Math.max(D,v)===v?"top":"bottom"),this.picker.addClass("datepicker-orient-"+m),"top"===m?g-=i+parseInt(this.picker.css("padding-top")):g+=u,this.o.rtl){var y=n-(f+p);this.picker.css({top:g,right:y,zIndex:l})}else this.picker.css({top:g,left:f,zIndex:l});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var e=this.dates.copy(),i=[],a=!1;return arguments.length?(t.each(arguments,t.proxy(function(t,e){e instanceof Date&&(e=this._local_to_utc(e)),i.push(e)},this)),a=!0):(i=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),i=i&&this.o.multidate?i.split(this.o.multidateSeparator):[i],delete this.element.data().date),i=t.map(i,t.proxy(function(t){return D.parseDate(t,this.o.format,this.o.language)},this)),i=t.grep(i,t.proxy(function(t){return t<this.o.startDate||t>this.o.endDate||!t},this),!0),this.dates.replace(i),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate,a?this.setValue():i.length&&String(e)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&e.length&&this._trigger("clearDate"),this.fill(),this.element.change(),this},fillDow:function(){var t=this.o.weekStart,e="<tr>";for(this.o.calendarWeeks&&(this.picker.find(".datepicker-days .datepicker-switch").attr("colspan",function(t,e){return parseInt(e)+1}),e+='<th class="cw">&#160;</th>');t<this.o.weekStart+7;)e+='<th class="dow">'+g[this.o.language].daysMin[t++%7]+"</th>";e+="</tr>",this.picker.find(".datepicker-days thead").append(e)},fillMonths:function(){for(var t="",e=0;12>e;)t+='<span class="month">'+g[this.o.language].monthsShort[e++]+"</span>";this.picker.find(".datepicker-months td").html(t)},setRange:function(e){e&&e.length?this.range=t.map(e,function(t){return t.valueOf()}):delete this.range,this.fill()},getClassNames:function(e){var i=[],a=this.viewDate.getUTCFullYear(),n=this.viewDate.getUTCMonth(),r=new Date;return e.getUTCFullYear()<a||e.getUTCFullYear()===a&&e.getUTCMonth()<n?i.push("old"):(e.getUTCFullYear()>a||e.getUTCFullYear()===a&&e.getUTCMonth()>n)&&i.push("new"),this.focusDate&&e.valueOf()===this.focusDate.valueOf()&&i.push("focused"),this.o.todayHighlight&&e.getUTCFullYear()===r.getFullYear()&&e.getUTCMonth()===r.getMonth()&&e.getUTCDate()===r.getDate()&&i.push("today"),-1!==this.dates.contains(e)&&i.push("active"),(e.valueOf()<this.o.startDate||e.valueOf()>this.o.endDate||-1!==t.inArray(e.getUTCDay(),this.o.daysOfWeekDisabled))&&i.push("disabled"),(e.valueOf()<this.o.startDate||e.valueOf()>this.o.endDate||-1!==t.inArray(e.getUTCDay(),this.o.daysOfWeekHighlighted))&&i.push("highlighted"),this.o.datesDisabled.length>0&&t.grep(this.o.datesDisabled,function(t){return s(e,t)}).length>0&&i.push("disabled","disabled-date"),this.range&&(e>this.range[0]&&e<this.range[this.range.length-1]&&i.push("range"),-1!==t.inArray(e.valueOf(),this.range)&&i.push("selected")),i},fill:function(){var a,s=new Date(this.viewDate),n=s.getUTCFullYear(),r=s.getUTCMonth(),h=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),o=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),d=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,c=g[this.o.language].today||g.en.today||"",u=g[this.o.language].clear||g.en.clear||"";if(!isNaN(n)&&!isNaN(r)){this.picker.find(".datepicker-days .datepicker-switch").text(g[this.o.language].months[r]+" "+(this.o.maxViewMode<2?"":n)),this.picker.find("tfoot .today").text(c).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(u).toggle(this.o.clearBtn!==!1),this.picker.find("thead .datepicker-title").text(this.o.title).toggle(""!==this.o.title),this.updateNavArrows(),this.fillMonths();var p=i(n,r-1,28),f=D.getDaysInMonth(p.getUTCFullYear(),p.getUTCMonth());p.setUTCDate(f),p.setUTCDate(f-(p.getUTCDay()-this.o.weekStart+7)%7);var v=new Date(p);v.setUTCDate(v.getUTCDate()+42),v=v.valueOf();for(var m,y=[];p.valueOf()<v;){if(p.getUTCDay()===this.o.weekStart&&(y.push("<tr>"),this.o.calendarWeeks)){var w=new Date(+p+(this.o.weekStart-p.getUTCDay()-7)%7*864e5),k=new Date(Number(w)+(11-w.getUTCDay())%7*864e5),C=new Date(Number(C=i(k.getUTCFullYear(),0,1))+(11-C.getUTCDay())%7*864e5),b=(k-C)/864e5/7+1;y.push('<td class="cw">'+b+"</td>")}if(m=this.getClassNames(p),m.push("day"),this.o.beforeShowDay!==t.noop){var T=this.o.beforeShowDay(this._utc_to_local(p));T===e?T={}:"boolean"==typeof T?T={enabled:T}:"string"==typeof T&&(T={classes:T}),T.enabled===!1&&m.push("disabled"),T.classes&&(m=m.concat(T.classes.split(/\s+/))),T.tooltip&&(a=T.tooltip)}m=t.unique(m),y.push('<td class="'+m.join(" ")+'"'+(a?' title="'+a+'"':"")+">"+p.getUTCDate()+"</td>"),a=null,p.getUTCDay()===this.o.weekEnd&&y.push("</tr>"),p.setUTCDate(p.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(y.join(""));var _=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?"Months":n).end().find("span").removeClass("active");if(t.each(this.dates,function(t,e){e.getUTCFullYear()===n&&_.eq(e.getUTCMonth()).addClass("active")}),(h>n||n>d)&&_.addClass("disabled"),n===h&&_.slice(0,o).addClass("disabled"),n===d&&_.slice(l+1).addClass("disabled"),this.o.beforeShowMonth!==t.noop){var M=this;t.each(_,function(e,i){if(!t(i).hasClass("disabled")){var a=new Date(n,e,1),s=M.o.beforeShowMonth(a);s===!1&&t(i).addClass("disabled")}})}y="",n=10*parseInt(n/10,10);var U=this.picker.find(".datepicker-years").find(".datepicker-switch").text(n+"-"+(n+9)).end().find("td");n-=1;for(var x,F=t.map(this.dates,function(t){return t.getUTCFullYear()}),S=-1;11>S;S++){if(x=["year"],a=null,-1===S?x.push("old"):10===S&&x.push("new"),-1!==t.inArray(n,F)&&x.push("active"),(h>n||n>d)&&x.push("disabled"),this.o.beforeShowYear!==t.noop){var Y=this.o.beforeShowYear(new Date(n,0,1));Y===e?Y={}:"boolean"==typeof Y?Y={enabled:Y}:"string"==typeof Y&&(Y={classes:Y}),Y.enabled===!1&&x.push("disabled"),Y.classes&&(x=x.concat(Y.classes.split(/\s+/))),Y.tooltip&&(a=Y.tooltip)}y+='<span class="'+x.join(" ")+'"'+(a?' title="'+a+'"':"")+">"+n+"</span>",n+=1}U.html(y)}},updateNavArrows:function(){if(this._allow_update){var t=new Date(this.viewDate),e=t.getUTCFullYear(),i=t.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-(1/0)&&e<=this.o.startDate.getUTCFullYear()&&i<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&e>=this.o.endDate.getUTCFullYear()&&i>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.o.startDate!==-(1/0)&&e<=this.o.startDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&e>=this.o.endDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(e){e.preventDefault(),e.stopPropagation();var a,s,n,r=t(e.target).closest("span, td, th");if(1===r.length)switch(r[0].nodeName.toLowerCase()){case"th":switch(r[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var h=D.modes[this.viewMode].navStep*("prev"===r[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,h),this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,h),1===this.viewMode&&this._trigger("changeYear",this.viewDate)}this.fill();break;case"today":var o=new Date;o=i(o.getFullYear(),o.getMonth(),o.getDate(),0,0,0),this.showMode(-2);var d="linked"===this.o.todayBtn?null:"view";this._setDate(o,d);break;case"clear":this.clearDates()}break;case"span":r.hasClass("disabled")||(this.viewDate.setUTCDate(1),r.hasClass("month")?(n=1,s=r.parent().find("span").index(r),a=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(s),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode?(this._setDate(i(a,s,n)),this.showMode()):this.showMode(-1)):(n=1,s=0,a=parseInt(r.text(),10)||0,this.viewDate.setUTCFullYear(a),this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(i(a,s,n)),this.showMode(-1)),this.fill());break;case"td":r.hasClass("day")&&!r.hasClass("disabled")&&(n=parseInt(r.text(),10)||1,a=this.viewDate.getUTCFullYear(),s=this.viewDate.getUTCMonth(),r.hasClass("old")?0===s?(s=11,a-=1):s-=1:r.hasClass("new")&&(11===s?(s=0,a+=1):s+=1),this._setDate(i(a,s,n)))}this.picker.is(":visible")&&this._focused_from&&t(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(t){var e=this.dates.contains(t);if(t||this.dates.clear(),-1!==e?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(e):this.o.multidate===!1?(this.dates.clear(),this.dates.push(t)):this.dates.push(t),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(t,e){e&&"date"!==e||this._toggle_multidate(t&&new Date(t)),e&&"view"!==e||(this.viewDate=t&&new Date(t)),this.fill(),this.setValue(),e&&"view"===e||this._trigger("changeDate");var i;this.isInput?i=this.element:this.component&&(i=this.element.find("input")),i&&i.change(),!this.o.autoclose||e&&"date"!==e||this.hide()},moveMonth:function(t,i){if(!t)return e;if(!i)return t;var a,s,n=new Date(t.valueOf()),r=n.getUTCDate(),h=n.getUTCMonth(),o=Math.abs(i);if(i=i>0?1:-1,1===o)s=-1===i?function(){return n.getUTCMonth()===h}:function(){return n.getUTCMonth()!==a},a=h+i,n.setUTCMonth(a),(0>a||a>11)&&(a=(a+12)%12);else{for(var d=0;o>d;d++)n=this.moveMonth(n,i);a=n.getUTCMonth(),n.setUTCDate(r),s=function(){return a!==n.getUTCMonth()}}for(;s();)n.setUTCDate(--r),n.setUTCMonth(a);return n},moveYear:function(t,e){return this.moveMonth(t,12*e)},dateWithinRange:function(t){return t>=this.o.startDate&&t<=this.o.endDate},keydown:function(t){if(!this.picker.is(":visible"))return void((40===t.keyCode||27===t.keyCode)&&this.show());var e,i,s,n=!1,r=this.focusDate||this.viewDate;switch(t.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),t.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation)break;e=37===t.keyCode?-1:1,t.ctrlKey?(i=this.moveYear(this.dates.get(-1)||a(),e),s=this.moveYear(r,e),this._trigger("changeYear",this.viewDate)):t.shiftKey?(i=this.moveMonth(this.dates.get(-1)||a(),e),s=this.moveMonth(r,e),this._trigger("changeMonth",this.viewDate)):(i=new Date(this.dates.get(-1)||a()),i.setUTCDate(i.getUTCDate()+e),s=new Date(r),s.setUTCDate(r.getUTCDate()+e)),this.dateWithinRange(s)&&(this.focusDate=this.viewDate=s,this.setValue(),this.fill(),t.preventDefault());break;case 38:case 40:if(!this.o.keyboardNavigation)break;e=38===t.keyCode?-1:1,t.ctrlKey?(i=this.moveYear(this.dates.get(-1)||a(),e),s=this.moveYear(r,e),this._trigger("changeYear",this.viewDate)):t.shiftKey?(i=this.moveMonth(this.dates.get(-1)||a(),e),s=this.moveMonth(r,e),this._trigger("changeMonth",this.viewDate)):(i=new Date(this.dates.get(-1)||a()),i.setUTCDate(i.getUTCDate()+7*e),s=new Date(r),s.setUTCDate(r.getUTCDate()+7*e)),this.dateWithinRange(s)&&(this.focusDate=this.viewDate=s,this.setValue(),this.fill(),t.preventDefault());break;case 32:break;case 13:r=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(r),n=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(t.preventDefault(),"function"==typeof t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}if(n){this.dates.length?this._trigger("changeDate"):this._trigger("clearDate");var h;this.isInput?h=this.element:this.component&&(h=this.element.find("input")),h&&h.change()}},showMode:function(t){t&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,this.viewMode+t))),this.picker.children("div").hide().filter(".datepicker-"+D.modes[this.viewMode].clsName).show(),this.updateNavArrows()}};var l=function(e,i){this.element=t(e),this.inputs=t.map(i.inputs,function(t){return t.jquery?t[0]:t}),delete i.inputs,u.call(t(this.inputs),i).on("changeDate",t.proxy(this.dateUpdated,this)),this.pickers=t.map(this.inputs,function(e){return t(e).data("datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=t.map(this.pickers,function(t){return t.getUTCDate()}),this.updateRanges()},updateRanges:function(){var e=t.map(this.dates,function(t){return t.valueOf()});t.each(this.pickers,function(t,i){i.setRange(e)})},dateUpdated:function(e){if(!this.updating){this.updating=!0;var i=t(e.target).data("datepicker"),a=i.getUTCDate(),s=t.inArray(e.target,this.inputs),n=s-1,r=s+1,h=this.inputs.length;if(-1!==s){if(t.each(this.pickers,function(t,e){e.getUTCDate()||e.setUTCDate(a)}),a<this.dates[n])for(;n>=0&&a<this.dates[n];)this.pickers[n--].setUTCDate(a);else if(a>this.dates[r])for(;h>r&&a>this.dates[r];)this.pickers[r++].setUTCDate(a);this.updateDates(),delete this.updating}}},remove:function(){t.map(this.pickers,function(t){t.remove()}),delete this.element.data().datepicker}};var c=t.fn.datepicker,u=function(i){var a=Array.apply(null,arguments);a.shift();var s;return this.each(function(){var n=t(this),o=n.data("datepicker"),c="object"==typeof i&&i;if(!o){var u=r(this,"date"),f=t.extend({},p,u,c),g=h(f.language),D=t.extend({},p,g,u,c);if(n.hasClass("input-daterange")||D.inputs){var v={inputs:D.inputs||n.find("input").toArray()};n.data("datepicker",o=new l(this,t.extend(D,v)))}else n.data("datepicker",o=new d(this,D))}return"string"==typeof i&&"function"==typeof o[i]&&(s=o[i].apply(o,a),s!==e)?!1:void 0}),s!==e?s:this};t.fn.datepicker=u;var p=t.fn.datepicker.defaults={autoclose:!1,beforeShowDay:t.noop,beforeShowMonth:t.noop,beforeShowYear:t.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:2,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,container:"body",immediateUpdates:!1,title:""},f=t.fn.datepicker.locale_opts=["format","rtl","weekStart"];t.fn.datepicker.Constructor=d;var g=t.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}},D={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(t){return t%4===0&&t%100!==0||t%400===0},getDaysInMonth:function(t,e){return[31,D.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(t){var e=t.replace(this.validParts,"\x00").split("\x00"),i=t.match(this.validParts);if(!e||!e.length||!i||0===i.length)throw new Error("Invalid date format.");return{separators:e,parts:i}},parseDate:function(a,s,n){function r(){var t=this.slice(0,u[l].length),e=u[l].slice(0,t.length);return t.toLowerCase()===e.toLowerCase()}if(!a)return e;if(a instanceof Date)return a;"string"==typeof s&&(s=D.parseFormat(s));var h,o,l,c=/([\-+]\d+)([dmwy])/,u=a.match(/([\-+]\d+)([dmwy])/g);if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(a)){for(a=new Date,l=0;l<u.length;l++)switch(h=c.exec(u[l]),o=parseInt(h[1]),h[2]){case"d":a.setUTCDate(a.getUTCDate()+o);break;case"m":a=d.prototype.moveMonth.call(d.prototype,a,o);break;case"w":a.setUTCDate(a.getUTCDate()+7*o);break;case"y":a=d.prototype.moveYear.call(d.prototype,a,o)}return i(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),0,0,0)}u=a&&a.match(this.nonpunctuation)||[],a=new Date;var p,f,v={},m=["yyyy","yy","M","MM","m","mm","d","dd"],y={yyyy:function(t,e){return t.setUTCFullYear(e)},yy:function(t,e){return t.setUTCFullYear(2e3+e)},m:function(t,e){if(isNaN(t))return t;for(e-=1;0>e;)e+=12;for(e%=12,t.setUTCMonth(e);t.getUTCMonth()!==e;)t.setUTCDate(t.getUTCDate()-1);return t},d:function(t,e){return t.setUTCDate(e)}};y.M=y.MM=y.mm=y.m,y.dd=y.d,a=i(a.getFullYear(),a.getMonth(),a.getDate(),0,0,0);var w=s.parts.slice();if(u.length!==w.length&&(w=t(w).filter(function(e,i){return-1!==t.inArray(i,m)}).toArray()),u.length===w.length){var k;for(l=0,k=w.length;k>l;l++){if(p=parseInt(u[l],10),h=w[l],isNaN(p))switch(h){case"MM":f=t(g[n].months).filter(r),p=t.inArray(f[0],g[n].months)+1;break;case"M":f=t(g[n].monthsShort).filter(r),p=t.inArray(f[0],g[n].monthsShort)+1}v[h]=p}var C,b;for(l=0;l<m.length;l++)b=m[l],b in v&&!isNaN(v[b])&&(C=new Date(a),y[b](C,v[b]),isNaN(C)||(a=C))}return a},formatDate:function(e,i,a){if(!e)return"";"string"==typeof i&&(i=D.parseFormat(i));var s={d:e.getUTCDate(),D:g[a].daysShort[e.getUTCDay()],DD:g[a].days[e.getUTCDay()],m:e.getUTCMonth()+1,M:g[a].monthsShort[e.getUTCMonth()],MM:g[a].months[e.getUTCMonth()],yy:e.getUTCFullYear().toString().substring(2),yyyy:e.getUTCFullYear()};s.dd=(s.d<10?"0":"")+s.d,s.mm=(s.m<10?"0":"")+s.m,e=[];for(var n=t.extend([],i.separators),r=0,h=i.parts.length;h>=r;r++)n.length&&e.push(n.shift()),e.push(s[i.parts[r]]);return e.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};D.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+D.headTemplate+"<tbody></tbody>"+D.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+D.headTemplate+D.contTemplate+D.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+D.headTemplate+D.contTemplate+D.footTemplate+"</table></div></div>",t.fn.datepicker.DPGlobal=D,t.fn.datepicker.noConflict=function(){return t.fn.datepicker=c,this},t.fn.datepicker.version="1.4.1-dev",t(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(e){var i=t(this);i.data("datepicker")||(e.preventDefault(),u.call(i,"show"))}),t(function(){u.call(t('[data-provide="datepicker-inline"]'))})});