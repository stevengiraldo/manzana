!function(t){var a=new Array,e=new Array;t.fn.doAutosize=function(a){var e=t(this).data("minwidth"),i=t(this).data("maxwidth"),n="",u=t(this),s=t("#"+t(this).data("tester_id"));if(n!==(n=u.val())){var d=n.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");s.html(d);var o=s.width(),r=o+a.comfortZone>=e?o+a.comfortZone:e,l=u.width(),p=l>r&&r>=e||r>e&&i>r;p&&u.width(r)}},t.fn.resetAutosize=function(a){var e=t(this).data("minwidth")||a.minInputWidth||t(this).width(),i=t(this).data("maxwidth")||a.maxInputWidth||t(this).closest(".tagsinput").width()-a.inputPadding,n=t(this),u=t("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:n.css("fontSize"),fontFamily:n.css("fontFamily"),fontWeight:n.css("fontWeight"),letterSpacing:n.css("letterSpacing"),whiteSpace:"nowrap"}),s=t(this).attr("id")+"_autosize_tester";!t("#"+s).length>0&&(u.attr("id",s),u.appendTo("body")),n.data("minwidth",e),n.data("maxwidth",i),n.data("tester_id",s),n.css("width",e)},t.fn.addTag=function(i,n){return n=jQuery.extend({focus:!1,callback:!0},n),this.each(function(){var u=t(this).attr("id"),s=t(this).val().split(a[u]);if(""==s[0]&&(s=new Array),i=jQuery.trim(i),n.unique){var d=t(this).tagExist(i);1==d&&t("#"+u+"_tag").addClass("not_valid")}else var d=!1;if(""!=i&&1!=d){if(t("<span>").addClass("tag").append(t("<span>").text(i).append("&nbsp;&nbsp;"),t('<a class="tagsinput-remove-link">',{href:"#",title:"Remove tag",text:""}).click(function(){return t("#"+u).removeTag(escape(i))})).insertBefore("#"+u+"_addTag"),s.push(i),t("#"+u+"_tag").val(""),n.focus?t("#"+u+"_tag").focus():t("#"+u+"_tag").blur(),t.fn.tagsInput.updateTagsField(this,s),n.callback&&e[u]&&e[u].onAddTag){var o=e[u].onAddTag;o.call(this,i)}if(e[u]&&e[u].onChange){var r=s.length,o=e[u].onChange;o.call(this,t(this),s[r-1])}}}),!1},t.fn.removeTag=function(n){return n=unescape(n),this.each(function(){var u=t(this).attr("id"),s=t(this).val().split(a[u]);for(t("#"+u+"_tagsinput .tag").remove(),str="",i=0;i<s.length;i++)s[i]!=n&&(str=str+a[u]+s[i]);if(t.fn.tagsInput.importTags(this,str),e[u]&&e[u].onRemoveTag){var d=e[u].onRemoveTag;d.call(this,n)}}),!1},t.fn.tagExist=function(e){var i=t(this).attr("id"),n=t(this).val().split(a[i]);return jQuery.inArray(e,n)>=0},t.fn.importTags=function(a){id=t(this).attr("id"),t("#"+id+"_tagsinput .tag").remove(),t.fn.tagsInput.importTags(this,a)},t.fn.tagsInput=function(i){var n=jQuery.extend({interactive:!0,defaultText:"",minChars:0,width:"",height:"",autocomplete:{selectFirst:!1},hide:!0,delimiter:",",unique:!0,removeWithBackspace:!0,placeholderColor:"#666666",autosize:!0,comfortZone:20,inputPadding:12},i);return this.each(function(){n.hide&&t(this).hide();var i=t(this).attr("id");(!i||a[t(this).attr("id")])&&(i=t(this).attr("id","tags"+(new Date).getTime()).attr("id"));var u=jQuery.extend({pid:i,real_input:"#"+i,holder:"#"+i+"_tagsinput",input_wrapper:"#"+i+"_addTag",fake_input:"#"+i+"_tag"},n);a[i]=u.delimiter,(n.onAddTag||n.onRemoveTag||n.onChange)&&(e[i]=new Array,e[i].onAddTag=n.onAddTag,e[i].onRemoveTag=n.onRemoveTag,e[i].onChange=n.onChange);var s=t("#"+i).attr("class").replace("tagsinput",""),d='<div id="'+i+'_tagsinput" class="tagsinput '+s+'"><div class="tagsinput-add-container" id="'+i+'_addTag"><div class="tagsinput-add"></div>';if(n.interactive&&(d=d+'<input id="'+i+'_tag" value="" data-default="'+n.defaultText+'" />'),d+="</div></div>",t(d).insertAfter(this),t(u.holder).css("width",n.width),t(u.holder).css("min-height",n.height),t(u.holder).css("height","100%"),""!=t(u.real_input).val()&&t.fn.tagsInput.importTags(t(u.real_input),t(u.real_input).val()),n.interactive){if(t(u.fake_input).val(t(u.fake_input).attr("data-default")),t(u.fake_input).css("color",n.placeholderColor),t(u.fake_input).resetAutosize(n),t(u.holder).bind("click",u,function(a){t(a.data.fake_input).focus()}),t(u.fake_input).bind("focus",u,function(a){t(a.data.fake_input).val()==t(a.data.fake_input).attr("data-default")&&t(a.data.fake_input).val(""),t(a.data.fake_input).css("color","#000000")}),void 0!=n.autocomplete_url){autocomplete_options={source:n.autocomplete_url};for(attrname in n.autocomplete)autocomplete_options[attrname]=n.autocomplete[attrname];void 0!==jQuery.Autocompleter?(t(u.fake_input).autocomplete(n.autocomplete_url,n.autocomplete),t(u.fake_input).bind("result",u,function(a,e){e&&t("#"+i).addTag(e[0]+"",{focus:!0,unique:n.unique})})):void 0!==jQuery.ui.autocomplete&&(t(u.fake_input).autocomplete(autocomplete_options),t(u.fake_input).bind("autocompleteselect",u,function(a,e){return t(a.data.real_input).addTag(e.item.value,{focus:!0,unique:n.unique}),!1}))}else t(u.fake_input).bind("blur",u,function(a){var e=t(this).attr("data-default");return""!=t(a.data.fake_input).val()&&t(a.data.fake_input).val()!=e?a.data.minChars<=t(a.data.fake_input).val().length&&(!a.data.maxChars||a.data.maxChars>=t(a.data.fake_input).val().length)&&t(a.data.real_input).addTag(t(a.data.fake_input).val(),{focus:!0,unique:n.unique}):(t(a.data.fake_input).val(t(a.data.fake_input).attr("data-default")),t(a.data.fake_input).css("color",n.placeholderColor)),!1});t(u.fake_input).bind("keypress",u,function(a){return a.which==a.data.delimiter.charCodeAt(0)||13==a.which?(a.preventDefault(),a.data.minChars<=t(a.data.fake_input).val().length&&(!a.data.maxChars||a.data.maxChars>=t(a.data.fake_input).val().length)&&t(a.data.real_input).addTag(t(a.data.fake_input).val(),{focus:!0,unique:n.unique}),t(a.data.fake_input).resetAutosize(n),!1):void(a.data.autosize&&t(a.data.fake_input).doAutosize(n))}),u.removeWithBackspace&&t(u.fake_input).bind("keydown",function(a){if(8==a.keyCode&&""==t(this).val()){a.preventDefault();var e=t(this).closest(".tagsinput").find(".tag:last").text(),i=t(this).attr("id").replace(/_tag$/,"");e=e.replace(/[\s\u00a0]+x$/,""),t("#"+i).removeTag(escape(e)),t(this).trigger("focus")}}),t(u.fake_input).blur(),u.unique&&t(u.fake_input).keydown(function(a){(8==a.keyCode||String.fromCharCode(a.which).match(/\w+|[\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1,/]+/))&&t(this).removeClass("not_valid")})}}),this},t.fn.tagsInput.updateTagsField=function(e,i){var n=t(e).attr("id");t(e).val(i.join(a[n]))},t.fn.tagsInput.importTags=function(n,u){t(n).val("");var s=t(n).attr("id"),d=u.split(a[s]);for(i=0;i<d.length;i++)t(n).addTag(d[i],{focus:!1,callback:!1});if(e[s]&&e[s].onChange){var o=e[s].onChange;o.call(n,n,d[i])}}}(jQuery);