function ABCmouseUtils() {};

//////////////////////////////////////////////////////////////////////////
//
// CSS-related functions
//
//////////////////////////////////////////////////////////////////////////


// returns true if the element contains that className
ABCmouseUtils.hasClassName = function(element, className) {
	element = ABCmouseUtils.$(element);
	var pattern = new RegExp("\\b" + className + "\\b");

	return pattern.test(element.className);
};

// add a className to the element
ABCmouseUtils.addClassName = function(element, className) {
	element = ABCmouseUtils.$(element);

	if(!ABCmouseUtils.hasClassName(element, className)) {
		element.className += " " + className;
	}

};

// remove a className of the element
ABCmouseUtils.removeClassName = function(element, className) {
	element = ABCmouseUtils.$(element);
	var pattern = new RegExp("\\b" + className + "\\b");

	if(ABCmouseUtils.hasClassName(element, className)) {
		element.className = element.className.replace(pattern, "");
	}
};

// toggle a className on an element
ABCmouseUtils.toggleClassName = function(element, className) {
	element = ABCmouseUtils.$(element);

	if(ABCmouseUtils.hasClassName(element, className)) {
		ABCmouseUtils.removeClassName(element, className);
	} else {
		ABCmouseUtils.addClassName(element, className);
	}
};

ABCmouseUtils.showElement = function(element) {
	element = ABCmouseUtils.$(element);
	element.style.display = "block";
	element.style.visibility = "visible";
};

ABCmouseUtils.hideElement = function(element, useVisibility) {
	element = ABCmouseUtils.$(element);
	useVisibility = useVisibility || false;
	
	if(useVisibility) {
		element.style.visibility = "hidden";
	} else {
		element.style.display = "none";
	}
};

// returns an object with all the element-related util functions
ABCmouseUtils.getElement = function(element) {

	element = ABCmouseUtils.$(element);
	
	return {
		element: element,
		addClassName: function(className) { ABCmouseUtils.addClassName(this.element, className); return this;},
		removeClassName: function(className) { ABCmouseUtils.removeClassName(this.element, className); return this;},
		toggleClassName: function(className) { ABCmouseUtils.toggleClassName(this.element, className); return this;},
		hasClassName: function(className) { return ABCmouseUtils.hasClassName(this.element, className);},
		show: function() { ABCmouseUtils.showElement(this.element); return this;},
		hide: function(visibility) { ABCmouseUtils.hideElement(this.element, visibility);}
	};
};

//className: "class1 class2 class3"
ABCmouseUtils.getElementsByClassName = function(className, element) {

	className = "." + ABCmouseUtils.trim(className).split(/ +/).join(".");

	if(document.querySelectorAll) {
		if(element == null) {
			return document.querySelectorAll(className);
		} else {
			element = ABCmouseUtils.$(element);
			return element.querySelectorAll(className);
		}
	}
	
	return new Array();
};

ABCmouseUtils.getComputedStyle = function(element, style) {
	element = ABCmouseUtils.$(element);
	
	if(window.getComputedStyle && window.getComputedStyle(element)[style]) {
		return window.getComputedStyle(element)[style];	
	} else if(element.currentStyle && element.currentStyle[style]) { //for IE 8 and prior
		return element.currentStyle[style];
	} else if(element.style[style]) { //if no computed style support return the element's inline style
		return element.style[style];
	} else {
		return "";
	}
};

ABCmouseUtils.zoomPage = function(zoomLevel) {
	document.body.style.zoom = zoomLevel;
};

ABCmouseUtils.replaceImageSources = function(isHD, imageHost) {

	var isHD = isHD || "";
	if(window.devicePixelRatio && window.devicePixelRatio >= 1.5) {
		isHD = "_hd";
		ABCmouseUtils.addClassName(document.body, 'is_hd');
	}

	images = document.getElementsByTagName("img");
	for(i = 0; i < images.length; i++) {
		if(images[i].getAttribute("data-realsrc")) { //data-realsrc must be defined relative to the PHP $IMGHOST
			var imgHost = images[i].getAttribute("src").replace("/blank.png",""); // the original img src MUST be "$IMGHOST/blank.png"
			var imgPath = images[i].getAttribute("data-realsrc");
			var newPath = imgPath.replace(/(\.jpg|\.png|\.gif)/i,isHD+"$1");
			var newSrc = imgHost + newPath;
			images[i].setAttribute("src", newSrc);
		}
	}
}

ABCmouseUtils.verticallyCenter = function(element, styleType, alterParentHeight) {
	var alterParentHeight = alterParentHeight || false;
	var element = ABCmouseUtils.$(element);
	
	var elementHeight = element.offsetHeight; //use offsetHeight to include border, padding, scrollbar, etc.
	var parentHeight = element.parentNode.clientHeight //use clientHeight to include padding but not border or scrollbar
	var verticalOffset = (parentHeight - elementHeight)/2;
	
	if(styleType == "margin") { element.style.marginTop = verticalOffset + "px"; }
	else if(styleType == "position") { element.style.top = verticalOffset + "px"; }
	else if(styleType == "padding") { //be careful with this one since it affects the position of other elements in the parent div
		var parentDeclaredHeight = parseInt(ABCmouseUtils.getComputedStyle(element.parentNode, "height"));
		var newParentHeight = parentDeclaredHeight;
		if(alterParentHeight) { newParentHeight = parentDeclaredHeight - verticalOffset; }
		element.parentNode.style.height = newParentHeight+"px";
		element.parentNode.style.paddingTop = verticalOffset+"px";
	}
}

ABCmouseUtils.horizontallyCenter = function(element, styleType, alterParentWidth) {
	var alterParentWidth = alterParentWidth || false;
	var element = ABCmouseUtils.$(element);
	
	var elementWidth = element.offsetWidth; //use offsetWidth to include border, padding, scrollbar, etc.
	var parentWidth = element.parentNode.clientWidth //use clientWidth to include padding but not border or scrollbar
	var horizOffset = (parentWidth - elementWidth)/2;
	
	if(styleType == "margin") { element.style.marginLeft = horizOffset + "px"; }
	else if(styleType == "position") { element.style.left = horizOffset + "px"; }
	else if(styleType == "padding") { //be careful with this one since it affects the position of other elements in the parent div
		var parentDeclaredWidth = parseInt(ABCmouseUtils.getComputedStyle(element.parentNode, "width"));
		var newParentWidth = parentDeclaredWidth;
		if(alterParentWidth) { newParentWidth = parentDeclaredWidth - horizOffset; }
		element.parentNode.style.width = newParentWidth+"px";
		element.parentNode.style.paddingLeft = horizOffset+"px";
	}
}

ABCmouseUtils.centerFixedDiv = function(vars) { //div must have style=position:fixed;
	if(typeof(vars) == "string") {
		var element = document.getElementById(vars);
		var elementWidth = element.offsetWidth;
		var elementHeight = element.offsetHeight;
		var verticalScale = 2;
	}
	else if(vars.nodeType == 1) { // "vars instanceof HTMLElement" does not work in IE8 ||| nodeType=1 means "ELEMENT_NODE"
		var element = ABCmouseUtils.$(vars);
		var elementWidth = element.offsetWidth;
		var elementHeight = element.offsetHeight;
		var verticalScale = 2;
	}
	else if(vars instanceof Object) {
		var element = ABCmouseUtils.$(vars.element); //should work if element is element.id or element
		var elementWidth = vars.width || element.offsetWidth;
		var elementHeight = vars.height || element.offsetHeight;
		var verticalScale = vars.vscale || 2;
	}
	if(window.innerWidth && window.innerHeight) {
		var winWidth = window.innerWidth;
		var winHeight = window.innerHeight;
	} else { //for IE<8
		var winWidth = document.body.offsetWidth;
		var winHeight = document.body.offsetHeight;
	}
	var horizOffset = (winWidth - elementWidth)/2;
	var vertOffset = (winHeight - elementHeight)/verticalScale;
	if(vertOffset < 5) { vertOffset = 5; }
	element.style.top = vertOffset+"px";
	element.style.left = horizOffset+"px";
}

//////////////////////////////////////////////////////////////////////////
//
// Popup-related functions
//
//////////////////////////////////////////////////////////////////////////


ABCmouseUtils.PopupCover = function() {

	if(ABCmouseUtils.PopupCover.activeCover != null) return;
	ABCmouseUtils.PopupCover.activeCover = this;

	var cover = document.createElement("div");
	cover.className = "popupcover";

	this.close = function() {
		cover.parentNode.removeChild(cover);
		ABCmouseUtils.PopupCover.activeCover = null;
	};
	
	cover.onclick = function(event) { ABCmouseUtils.stopPropagation(event)}; //this is needed to prevent clicks going through the mask
	document.body.appendChild(cover);
};

ABCmouseUtils.PopupCover.close = function() {

	if(ABCmouseUtils.PopupCover.activeCover != null) {
		ABCmouseUtils.PopupCover.activeCover.close();

	}
};

ABCmouseUtils.getPosition = function(width, height, stylePosition) {
	var pageSize = ABCmouseUtils.getPageSize();
	var position = {x: 0, y: 0};
	
	position.x = Math.round((pageSize.width - width)/2);
	position.y = Math.round((pageSize.height - height)/2);

	if(position.y < 0)
		position.y = 0;
		
	if(position.x < 0)
		position.x = 0;

	if(stylePosition == "absolute") {
		var scrollingPosition = ABCmouseUtils.getScrollXY();
		position.x += scrollingPosition.x;
		position.y += scrollingPosition.y;
	}
	
	return position;
};

ABCmouseUtils.getPageSize = function() {
	var width = 0
	var height = 0;
	
	var app_pattern = /ela_app.+iphone/i;
	
	if(app_pattern.test(navigator.userAgent)) { //usin app on iphone
		return {width: 1060, height: 770}; //fix for the iphone
	}
	
	if(window.innerWidth == null) {
		width = document.documentElement.clientWidth;
		height = document.documentElement.clientHeight;
	} else {
		width = window.innerWidth;
		height = window.innerHeight;
	}

	return {width: width, height: height};
};

ABCmouseUtils.getScrollXY = function() {
	var scrOfX = 0, scrOfY = 0;
	
	if( typeof( window.pageYOffset ) == 'number' ) {
		//Netscape compliant
		scrOfY = window.pageYOffset;
		scrOfX = window.pageXOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		//DOM compliant
		scrOfY = document.body.scrollTop;
		scrOfX = document.body.scrollLeft;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
		//IE6 standards compliant mode
		scrOfY = document.documentElement.scrollTop;
		scrOfX = document.documentElement.scrollLeft;
	}

	return {x: scrOfX, y: scrOfY};
};

ABCmouseUtils.showIframePopup = function(config) {
	var url = config.url;
	var width = config.width || 500;
	var height = config.height || 300;
	var stylePosition = config.stylePosition || "fixed";
	var position = config.position || ABCmouseUtils.getPosition(width, height, stylePosition);
	var rePosition = (config.rePosition != null) ? config.rePosition : true;
	var parent_div = config.parent_div || null;
	var popupIframe = ABCmouseUtils.createElement("div", {});
	var dimScreen = (config.dimScreen != null) ? config.rePosition : true;
	var id = "iframe_popup_" + (new Date()).getTime();	//fix for safari 09/23/2013 Marco
	var mobile = (config.dimScreen != null) ? config.mobile : false;
	var y_offset = config.y_offset || 1;

	popupIframe.innerHTML = '<iframe id="' + id + '" width="' + width + '" height="' + height + '" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" allowtransparency="true" style="background-color: transparent;"></iframe>';
	
	popupIframe.style.zIndex = "100";
	popupIframe.width = width + "px";
	popupIframe.height = height + "px";
	popupIframe.style.position = stylePosition;
	popupIframe.style.top = (position.y/y_offset) + "px";
	popupIframe.style.left = position.x + "px";
	popupIframe.style.display = "block";

	if(parent_div) {
		parent_div = ABCmouseUtils.$(parent_div);
		parent_div.appendChild(popupIframe);

	} else {
		document.body.appendChild(popupIframe);
	}

	ABCmouseUtils.$(id).src = url; //fix for safari 09/23/2013 Marco

	if(rePosition) {
		ABCmouseUtils.addEventListener(window, "resize", function() {
			if(popupIframe && !ABCmouseUtils.isKeyboardUp) { //prevents resizing the popup when the keyboard is up
				var position = ABCmouseUtils.getPosition(width, height, stylePosition);
				popupIframe.style.top = (position.y/y_offset) + "px";
				popupIframe.style.left = position.x + "px";
			
			}
		});
		
		ABCmouseUtils.addEventListener(window, "orientationchange", function() {
			if(popupIframe && !ABCmouseUtils.isKeyboardUp) { //prevents resizing the popup when the keyboard is up
				var position = ABCmouseUtils.getPosition(width, height, stylePosition);
				popupIframe.style.top = (position.y/y_offset) + "px";
				popupIframe.style.left = position.x + "px";
			
			}
		});
	}

	ABCmouseUtils.showIframePopup.lastInstance = popupIframe;
	if(dimScreen){

		new ABCmouseUtils.PopupCover();

	}


};

ABCmouseUtils.closeIframePopup = function(iframeWindow) {
	var iframes = document.getElementsByTagName("iframe");

	//for popups that use the old closePopup function
	//if the window object of the iframe is not pass just close the last popup
	if(iframeWindow == null && ABCmouseUtils.showIframePopup.lastInstance != null) {
		ABCmouseUtils.showIframePopup.lastInstance.style.display = "none";
		ABCmouseUtils.removeElement(ABCmouseUtils.showIframePopup.lastInstance);
		ABCmouseUtils.PopupCover.close();
		return;
	}

	for(var x=0; x < iframes.length; x++) {
		if(iframes[x].contentWindow == iframeWindow) {
			var popup = iframes[x].parentNode;
			popup.style.display = "none";
			ABCmouseUtils.removeElement(popup);
			break;
		}
	}

	ABCmouseUtils.PopupCover.close();
};

ABCmouseUtils.resizeIframePopup = function(iframeWindow, width, height) {
	var iframePopup = null;

	//if the window object of the iframe is not pass just use the last instance
	if(iframeWindow == null && ABCmouseUtils.showIframePopup.lastInstance != null) {
		iframePopup = ABCmouseUtils.showIframePopup.lastInstance.getElementsByTagName("iframe")[0];
	} else if(iframeWindow) {
		var iframes = document.getElementsByTagName("iframe");
		
		for(var x=0; x < iframes.length; x++) {
			if(iframes[x].contentWindow == iframeWindow) {
				iframePopup = iframes[x];
				break;
			}
		}
	}

	if(iframePopup) {
		if(width > 0) iframePopup.style.width = width + "px";
		if(height > 0) iframePopup.style.height = height + "px";
	}
};

ABCmouseUtils.ABCmousePopup = function(config) {
	this.id = config.id || "abcmouse_popup_" + new Date().getTime();
	this.title = config.title || "ABCmouse.com";
	this.className = config.className || "";
	this.text = config.text || "";
	this.script = config.script;
	this.script_vars = config.script_vars || {};
	this.buttons = config.buttons || [];
	this.width = config.width;
	this.height = config.height;
	this.stylePosition = config.stylePosition;
	this.popup = null;
	this.popup_body = null;
	this.onclose = config.onclose || null;
	this.vertical_scale = config.vertical_scale || 1;
	this.reposition = (config.reposition === false) ? false : true;
	this.dimPage = (config.dimPage === false) ? false : true;
	this.parent_div = config.parent_div;
	this.position = config.position;
	
	this.buildFrame();
	this.buildContent();

	ABCmouseUtils.ABCmousePopup.instances[this.id] = this;

};

ABCmouseUtils.ABCmousePopup.instances = {};

ABCmouseUtils.ABCmousePopup.get = function(id) {
	return ABCmouseUtils.ABCmousePopup.instances[id];
};

ABCmouseUtils.ABCmousePopup.closeAll = function() {
	for(var id in ABCmouseUtils.ABCmousePopup.instances) {
		if(ABCmouseUtils.ABCmousePopup.instances.hasOwnProperty(id) && typeof(ABCmouseUtils.ABCmousePopup.instances[id] != 'function')) {
			ABCmouseUtils.ABCmousePopup.instances[id].close();
		}
	}
};

ABCmouseUtils.ABCmousePopup.prototype.buildFrame = function() {
	var popup_header, popup_title, close_icon, position, self = this;
	this.popup = ABCmouseUtils.createElement("div", { className: "abcmouse_popup " + this.className, id: this.id});
	
	close_icon = ABCmouseUtils.createElement("div", { className: "abcmouse_popup_close_btn"});
	close_icon.onclick = function() {
		self.close();
	}
	/*ABCmouseUtils.addEventListener(close_icon, "click", function() {
		self.close();
	});*/
	
	popup_title = ABCmouseUtils.createElement("div", { className: "abcmouse_popup_title"});
	popup_title.innerHTML = this.title;
	popup_header = ABCmouseUtils.createElement("div", { className: "abcmouse_popup_header"});
	
	popup_header.appendChild(popup_title);
	popup_header.appendChild(close_icon);
	
	this.popup.appendChild(popup_header);
	
	this.popup_body = ABCmouseUtils.createElement("div", {
		className: "abcmouse_popup_body"
	});
	
	this.popup.appendChild(this.popup_body);
	
	this.popup.appendChild(ABCmouseUtils.createElement("div", {
		className: "abcmouse_popup_footer"
	}));
	
	ABCmouseUtils.addEventListener(window, "resize", function() {
		if(self.reposition && !ABCmouseUtils.isKeyboardUp) {
			self.rePosition();
		}
	});
	
	ABCmouseUtils.addEventListener(window, "orientationchange", function() {
		if(!ABCmouseUtils.isKeyboardUp && self.reposition) {
			self.rePosition();
		}
	});
};

ABCmouseUtils.ABCmousePopup.prototype.buildContent = function() {
	var position;
	
	if(this.script) {
		this.buildServiceContent();
	} else {
		this.buildTextContent();
	}
};

ABCmouseUtils.ABCmousePopup.prototype.buildTextContent = function() {
	var popup_text, popup_buttons, popup_button, button, self = this;
	
	popup_text = ABCmouseUtils.createElement("div", {
		className: "store_popup_text abcmouse_popup_text"
	});
	popup_text.innerHTML = this.text;
	
	popup_buttons = ABCmouseUtils.createElement("div", {
		className: "store_popup_buttons abcmouse_popup_buttons"
	});
	
	for(var index=0; index < this.buttons.length; index++) {
		button = this.buttons[index];
		popup_button = ABCmouseUtils.createElement("img", {
			className: button.className || "abcmouse_popup_btn",
			src: button.src
		});

		popup_button.onclick = (function(button) {
			return function() {
				if(button.closeButton === true) {
					self.close();
				} else if(typeof button.onclick == "function") {
					button.onclick(self);
				}
			};
		}(button));
		
		popup_buttons.appendChild(popup_button);
	}
	
	this.popup_body.appendChild(popup_text);
	this.popup_body.appendChild(popup_buttons);
};

ABCmouseUtils.ABCmousePopup.prototype.buildServiceContent = function() {
	var self = this, position;
	this.script_vars.popup_id = this.id;
	
	ajax(this.script, this.script_vars, function(popup_content){
		var script_regex = /<\s*script[^>]*>((?:.|\n|\r|\t)+?)<\/script>/g;
		var style_regex = /<\s*style[^>]*>((?:.|\n|\r|\t)+?)<\/style>/g;
		var matches, script, style;
		
		var popup_html = popup_content;
		while(matches = script_regex.exec(popup_html)) {
			popup_html = popup_html.replace(matches[0],"");
		}
		
		while(matches = style_regex.exec(popup_html)) {
			popup_html = popup_html.replace(matches[0],"");
		}
		
		while(matches = style_regex.exec(popup_content)) {
			if(document.createStyleSheet) { //for IE 8
				style = document.createStyleSheet();
				style.cssText = matches[1];
			} else {
				style = document.createElement("style");
				style.type = "text/css";
				style.innerHTML  = matches[1];
				document.getElementsByTagName("head")[0].appendChild(style);				
			}
		}
		
		self.popup_body.innerHTML = popup_html;
		
		while(matches = script_regex.exec(popup_content)) {
			script = document.createElement("script");
			script.type = "text/javascript";
			script.text = matches[1];
			document.getElementsByTagName("head")[0].appendChild(script);
		}
		
		self.rePosition();
	});
};

ABCmouseUtils.ABCmousePopup.prototype.rePosition = function() {
	var position = (this.position) ? this.position : ABCmouseUtils.getPosition(this.popup.offsetWidth || this.width || 576, this.popup.offsetHeight || this.height || 303, this.stylePosition);
	var vert_offset_scale = this.vertical_scale;
	this.popup.style.top = (position.y/vert_offset_scale) + "px";
	this.popup.style.left = position.x + "px";
};

ABCmouseUtils.ABCmousePopup.prototype.show = function() {
	if(this.parent_div) {
		var parent_div = ABCmouseUtils.$(this.parent_div);
		parent_div.appendChild(this.popup);

	} else {
		document.body.appendChild(this.popup);
	}
	
	this.rePosition();
	
	if(this.dimPage) {
		new ABCmouseUtils.PopupCover();
	}
};

ABCmouseUtils.ABCmousePopup.prototype.close = function() {
	this.popup.parentNode.removeChild(this.popup);

	if (navigator.userAgent.indexOf("Safari")!=-1) {  //pl10022013
		document.ontouchmove = function(e){ return true; }
	}		

	ABCmouseUtils.PopupCover.close();
	delete ABCmouseUtils.ABCmousePopup.instances[this.id];
	
	if(typeof(this.onclose) == "function") {
		this.onclose();
	}
};
	
ABCmouseUtils.showTestimonialPopup = function(age, group) {
	var age = age || 4;
	var group = group || 'parent';
	var ie8Class = "";

	if (navigator.userAgent.indexOf("Safari")!=-1) {  //pl10012013
		document.ontouchmove = function(e){e.preventDefault();}
	}

	if(navigator.userAgent.match(/MSIE 8/i)) { ie8Class = "is_ie8"; }
	var testimonialConfig = {
		id: "testimonial_popup",
		title: "Testimonials",
		className: ie8Class,
		text: "",
		script: "/testimonial_popup.php?agenum="+age+"&group="+group,
		script_vars: {},
		buttons: [],
		popup: null,
		popup_body: null,
		width: 742,
		height: 531
	};
	new ABCmouseUtils.ABCmousePopup(testimonialConfig).show();
}

ABCmouseUtils.Spinner = function(img) {
	this.img = img;
	this.imgTag = null;
	this.timer = null;
	
	this.show = function() {
		if(this.imgTag == null) {
			this.imgTag = document.createElement("img");
			this.imgTag.src = this.img;
			document.body.appendChild(this.imgTag);
			this.imgTag.style.position = "fixed";
			this.imgTag.style.zIndex = "111";
		}
		
		var position = ABCmouseUtils.getPosition(this.imgTag.offsetWidth || 310, this.imgTag.offsetHeight || 160);
		
		this.imgTag.style.top = position.y + "px";
		this.imgTag.style.left = position.x + "px";
		
		var self = this;
		this.timer = setTimeout(function() {
			self.imgTag.src = self.img;
		},100);
		this.imgTag.style.display = "block";
	};
	
	this.hide = function() {
		if(this.imgTag != null)
			this.imgTag.parentNode.removeChild(this.imgTag);
			
		clearTimeout(this.timer);
	};
};

ABCmouseUtils.Spinner.instances = {};

ABCmouseUtils.Spinner.create = function(name, img) {
	ABCmouseUtils.preloadImage(img);
	ABCmouseUtils.Spinner.instances[name] = new ABCmouseUtils.Spinner(img);
	return ABCmouseUtils.Spinner.instances[name];
};

ABCmouseUtils.Spinner.get = function(name) {
	return ABCmouseUtils.Spinner.instances[name];
};

//////////////////////////////////////////////////////////////////////////
//
// Cookie-related functions
//
//////////////////////////////////////////////////////////////////////////


ABCmouseUtils.setCookie = function(c_name, value, expiredays, path, domain) {
	var path = path || "/";
	var hostnameArray = window.location.hostname.split(".");
	var domain = domain || hostnameArray.slice(hostnameArray.length - 2).join(".");

	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	
	document.cookie = c_name+ "=" + escape(value) + ";domain=" + domain + ";path=" + path + ((expiredays == null || expiredays == 0) ? "" : ";expires=" + exdate.toUTCString());
};

ABCmouseUtils.getCookie = function(c_name) {
	if(document.cookie.length>0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end));
		}
	}
	return "";
};

ABCmouseUtils.deleteCookie = function(name, path, domain) {
	var path = path || "/";
	var hostnameArray = window.location.hostname.split(".");
	var domain = domain || hostnameArray.slice(hostnameArray.length - 2).join(".");
	
	if(getCookie(name) != "") {
		document.cookie = name + "=" + ( ( path ) ? ";path=" + path : "") + ( ( domain ) ? ";domain=" + domain : "" ) + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
	}
};


//////////////////////////////////////////////////////////////////////////
//
// tracking-related functions
//
//////////////////////////////////////////////////////////////////////////


function track(tag, kvp, redirectUrl) {
	var vars = {tag: tag, kvp: kvp};
	if(redirectUrl != null) {
		ajax('/xml/track.php', vars, function(){ location.href = redirectUrl; });
	} else {
		ajax('/xml/track.php', vars, function(){});
	}
}


//////////////////////////////////////////////////////////////////////////
//
// form-related functions
//
//////////////////////////////////////////////////////////////////////////


ABCmouseUtils.disableCopyPaste = function(element) {
	element = ABCmouseUtils.$(element);
	element.onpaste = function() {
		return false
	};
};

ABCmouseUtils.disableCopyPasteByClassName = function(className) {
	var text_fields = ABCmouseUtils.getElementsByClassName(className);
	
	ABCmouseUtils.forEach(text_fields, function(text_field) {
		ABCmouseUtils.disableCopyPaste(text_field);
	});
};

ABCmouseUtils.setMobileTypes = function() {
	var elements = document.getElementsByTagName("input");
	
	ABCmouseUtils.forEach(elements, function(element) {
		if(element.getAttribute("data-mobile-type")) {
			element.type = element.getAttribute("data-mobile-type");
		}
	});
};

ABCmouseUtils.setTextMaxLength = function(element, maxLength, maxNewLines) {
	element = ABCmouseUtils.$(element);
	maxNewLines = maxNewLines || Infinity;
	
	ABCmouseUtils.addEventListener(element, "keypress", function(event) {
		var validKeyCodes = [8,46,38,37,39,40]; //backspace, delete, arrow-keys
		if(ABCmouseUtils.inArray(validKeyCodes, event.keyCode)) return;
		
		var newLineCount = element.value.match(/\n/g) ? element.value.match(/\n/g).length : 0;
		
		if(event.keyCode == 13) { //new line
			newLineCount++;
		}
	
		if(newLineCount > maxNewLines || element.value.replace(/[\n\r]+/g, "").length >= maxLength) {
			ABCmouseUtils.cancelEventListener(event);
		}
	});
};

ABCmouseUtils.getDropDownValue = function(dropDown) {
	dropDown = ABCmouseUtils.$(dropDown);
	return dropDown.options.item(dropDown.selectedIndex).value;
};

ABCmouseUtils.setDropDownValue = function(dropDown, value) {
	dropDown = ABCmouseUtils.$(dropDown);
	
	for(var x=0; x < dropDown.options.length; x++) {
		if(dropDown.item(x).value == value) {
			dropDown.selectedIndex = x;
			return x;
		}
	}
	
	return -1;
};

ABCmouseUtils.getFormElementValue = function(formElement) {
	formElement = (typeof(formElement) == "string") ? document.getElementById(formElement) : formElement;
	
	if(formElement == null) {
		return false;
	}

	switch(formElement.type) {
		case "text":
		case "textarea":
		case "hidden":
		case "password":
			return formElement.value;
			break;
		case "select":
			return ABCmouseUtils.getDropDownValue(formElement);
			break;
		default:
			return false;
	}
};

ABCmouseUtils.validateEmail = function(email) {
	var emailRegex = /^([a-zA-Z0-9_\-\.])+@((([0-2]?[0-5]?[0-5]|[0-9]?[0-9]|[0-9])\.([0-2]?[0-5]?[0-5]|[0-9]?[0-9]|[0-9])\.([0-2]?[0-5]?[0-5]|[0-9]?[0-9]|[0-9])\.([0-2]?[0-5]?[0-5]|[0-9]?[0-9]|[0-9]))|((([a-zA-Z0-9\-])+\.)+([a-zA-Z\-])+))$/;
	return emailRegex.test(ABCmouseUtils.trim(email));
};

ABCmouseUtils.validatePhone = function(phone,language) {
	var language = language || "";
	var phone = phone.replace(/\D/,"");
	var phoneRegex;
	switch(language) {
		case "zhs": { phoneRegex = /^1[\d]{10}$/; break; }
		case "zht": { phoneRegex = /^0[\d]{9}$/; break; }
		default: { phoneRegex = /^1?[\d]{10}$/; break; }
	}
	return phoneRegex.test(phone);
}

ABCmouseUtils.validateEmailCharCount = function(email) {
	if(!ABCmouseUtils.validateEmail(email)) { return "invalid"; }
	
	var domains3 = new Array('yahoo','ymail','hotmail','msn','live'); // domains that require more than 3 characters in the username
	var domains5 = new Array('gmail'); // domains that require more than 5 characters in the username
	var username = email.split("@")[0].toLowerCase() || "username";
	var domain = email.split("@")[1].toLowerCase() || "domain.com";
	
	for(var i = 0; i < domains3.length; i++) {
		if(domain.indexOf(domains3[i]) != -1) {
			if(username.length < 4) { return "in_use"; }
			// meant to throw "This email is already in use" error so that users cannot submit invalid emails
		}
	}
	for(var i = 0; i < domains5.length; i++) {
		if(domain.indexOf(domains5[i]) != -1) {
			if(username.length < 6) { return "in_use"; }
			// meant to throw "This email is already in use" error so that users cannot submit invalid emails
		}
	}
	return "valid";
}

ABCmouseUtils.addEnterListener = function(element, listener) {
	ABCmouseUtils.addEventListener(element, "keypress", function(event) {
		if(event.keyCode == 13) {
			listener.apply(element,arguments);
		}
	});
};

ABCmouseUtils.setDefaultText = function(element, defaultText, color) {
	element = ABCmouseUtils.$(element);
	color = color || "#B0B0B0";
	var isPassword = (element.type == "password");
	var currentColor = ABCmouseUtils.getComputedStyle(element, "color");
	
	if(element.value == "" || element.value == defaultText) {
		if(isPassword) {
			element = swapInput(element, "text");
		}
		
		element.value = defaultText;
		element.style.color = color;
	}
	
	ABCmouseUtils.addEventListener(element, "focus", focusEvent);
	ABCmouseUtils.addEventListener(element, "blur", blurEvent);
	
	function focusEvent() {
		if(this.value == defaultText) {
			if(isPassword) {
				element = swapInput(element, "password");
				setTimeout(function() { element.focus();}, 1); //needed for IE8
			}
			element.value = "";
			element.style.color = currentColor;
		}
	}
	
	function blurEvent() {
		if(ABCmouseUtils.trim(this.value) == "") {
			if(isPassword) {
				element = swapInput(element, "text");
			}
			element.value = defaultText;
			element.style.color = color;
		}
	}
	
	function swapInput(element, type) {
		var clone = ABCmouseUtils.cloneElement(element, ["id","name","class","tabindex"]);
		clone.type = type;
		var parent = element.parentNode;
		
		ABCmouseUtils.removeElement(element);
		parent.appendChild(clone);
		
		ABCmouseUtils.addEventListener(clone, "focus", focusEvent);
		ABCmouseUtils.addEventListener(clone, "blur", blurEvent);
		
		return clone;
	}
};

ABCmouseUtils.cloneElement = function(element, attributes) {
	var attr = {};
	
	if(attributes) {
		var attributes_lower = [];
		
		ABCmouseUtils.forEach(attributes, function(attribute) {
			attributes_lower.push(attribute.toLowerCase());
		});
		
		ABCmouseUtils.forEach(element.attributes, function(attribute) {
			if(ABCmouseUtils.inArray(attributes_lower, attribute.name.toLowerCase())) {
				attr[attribute.name] = attribute.value;
			}
		});	
	} else {
		ABCmouseUtils.forEach(element.attributes, function(attribute) {
			attr[attribute.name] = attribute.value;
		});	
	}
	
	return ABCmouseUtils.createElement(element.tagName, attr);
};


ABCmouseUtils.hideKeyboardOnTap = function() {

	ABCmouseUtils.addEventListener(document.body, "touchstart", function(event) {
		var target = ABCmouseUtils.getEventTarget(event);

		if(target.tagName.toLowerCase() != "input" && target.tagName.toLowerCase() != "select") {

			if(target.getAttribute('nohidekeyboard')=='true') {
				return;
			}

			var inputElments = document.getElementsByTagName("input");
			ABCmouseUtils.forEach(inputElments, function(element) {
				element.blur();
			});
		}

	});
};

ABCmouseUtils.submitFormWithAjax = function(formId, url, extra_data, callback) {
	var form = ABCmouseUtils.$(formId);
	url = url || window.location.pathname;

	var postData = {};
	var formElement;
	
	for(var x=0; x < form.elements.length; x++) {
		formElement = form.elements[x];

		if(formElement.type.toLowerCase() == 'checkbox' && formElement.checked) {
			postData[form.elements[x].name] = formElement.value;
		} else {
			postData[form.elements[x].name] = ABCmouseUtils.getFormElementValue(formElement);
		}
	}
	
	if(extra_data) {
		for(property in extra_data) {
			postData[property] = extra_data[property];
		}
	}
	
	ajax(url, postData, function(data) {
		if(typeof(callback) == "function") {
			callback.apply(null,arguments);
		}
	});
};


ABCmouseUtils.preText = function(element, preText, type) {

	if(element.value == preText) {
		element.value = "";
		element.style.color = "#000000";
		//element.type = type || "text";
		
		if(type == "password") {
			element.parentNode.removeChild(element);
			var temp = document.createElement("span");

			temp.innerHTML = '<input id="'+element.name+'" tabindex="3" class="textField" type="password" name="'+element.name+'" value="" style="color: #000000;" onfocus="ABCmouseUtils.preText(this, \''+preText+'\', \'password\')" onblur="ABCmouseUtils.preText(this, \''+preText+'\', \'password\')" />';
			document.getElementById("mini-reg-form").appendChild(temp);
			document.getElementById(element.name).focus();
		}
	} else if(element.value == "" && type != "password") {
		element.value = preText;
		element.style.color = "#666666";
	}
}


ABCmouseUtils.addMiniRegClasses = function (elementIDs) {
	elementIDs = elementIDs || new Array();
	for(i = 0; i < elementIDs.length; i++) {
		element = document.getElementById(elementIDs[i]);
		if(element != null) {
			ABCmouseUtils.addClassName(element, "is_minireg");
		}
	}
}

ABCmouseUtils.showMiniRegError = function(formID, message) {
	
	if(document.getElementById("miniRegErrorPopup")) { return; }
	
	var errorPopup = document.createElement("div");
	errorPopup.id = "miniRegErrorPopup";
	errorPopup.className = "errorPopup";
	
	//close icon
	var closeIcon = document.createElement("div");
	closeIcon.className = "closeIcon";
	closeIcon.onclick = function() {
		document.getElementById("miniRegErrorPopup").parentNode.removeChild(document.getElementById("miniRegErrorPopup"));
	};
	
	//oops Text
	var oopsText = document.createElement("div");
	oopsText.className = "oopsText";
	oopsText.innerHTML = "<tt8825>Oops!</tt8825>";
	
	//inner div
	var innerErrorDiv = document.createElement("div");
	innerErrorDiv.className = "innerErrorDiv";
	
	//ok button
	var okBtn = document.createElement("div");
	okBtn.className = "okBtn";
	okBtn.onclick = function() {
		document.getElementById("miniRegErrorPopup").parentNode.removeChild(document.getElementById("miniRegErrorPopup"));
	};
	
	//ok Button Text
	var okBtnText = document.createElement("div");
	okBtnText.className = "okBtnText";
	okBtnText.innerHTML = "<tt8827>OK</tt8827>";
	
	//error message
	var errorMessage = document.createElement("div");
	errorMessage.className = "errorMessage";
	errorMessage.innerHTML = message;
	
	errorPopup.appendChild(oopsText);
	errorPopup.appendChild(closeIcon);
	errorPopup.appendChild(innerErrorDiv);
	innerErrorDiv.appendChild(errorMessage);
	innerErrorDiv.appendChild(okBtn);
	okBtn.appendChild(okBtnText);
	
	document.getElementById(formID).appendChild(errorPopup);
}

ABCmouseUtils.submitMiniReg = function(formID, miniRegClassIDs) {
	//prevents the submision of the form while there is an error showing
	if(this.error) return;
	
	miniRegClassIDs = miniRegClassIDs || new Array();
	
	var vars = {};
	var form = document.getElementById(formID);
	var self = this;
	
	//grabs all the elements on the form and adds them to the vars of the ajax service
	for(var x = 0; x < form.elements.length; x++) {
		vars[form.elements[x].name] = form.elements[x].value;
		if(form.elements[x].name == "receiveEmails") {
			if(!form.elements[x].checked) {
				ABCmouseUtils.showMiniRegError(formID, "<tt8829>You must agree to receive emails from ABCmouse.com.</tt8829>");
				track("ReceiveEmailsError", "");
				return false;
			}	
		}
	}
	
	if((vars.email == "Email Address" || vars.email == "") && this.optionalEmail) {
		ABCmouseUtils.addMiniRegClasses(miniRegClassIDs);
		window.location = "/subscribe";
		return;
	}
	
	//vars["source"] = source;
	//vars["homepage_version"] = homepage_version;

	ajax("/xml/service/special_offer_email.php", vars, function(response) {
		if(response == 1) {
			window.location = "/subscribe";
		} else if(response == 2) {
			ABCmouseUtils.showMiniRegError(formID, "<tt8831>The email address you entered is already associated with another member.</tt8831>");
		} else if(response == 3) {
			ABCmouseUtils.showMiniRegError(formID, "<tt8833>Please enter a valid email address.</tt8833>");
		} else {
			ABCmouseUtils.showMiniRegError(formID, "<tt8835>There was an issue processing your email address.</tt8835>");
		}
	});
};

//////////////////////////////////////////////////////////////////////////
//
// string-related functions
//
//////////////////////////////////////////////////////////////////////////


ABCmouseUtils.trim = function(str) {
	str = str.replace(/\s+$/, "");
	str = str.replace(/^\s+/, "");
	return str;
}


//////////////////////////////////////////////////////////////////////////
//
// array-related functions
//
//////////////////////////////////////////////////////////////////////////


ABCmouseUtils.forEach = function(array, callback) {
	for(var x=0; x < array.length; x++) {
		callback.call(null, array[x], x, array);
	}
};

ABCmouseUtils.indexOf = function(array, value, offset) {
	offset = offset || 0;
	
	if(offset < 0) {
		offset = array.length - Math.abs(offset);
		
		for(var x=offset; x >= 0; x--) {
			if(array[x] == value) {
				return x;
			}
		}
	} else {
		for(var x=offset; x < array.length; x++) {
			if(array[x] == value) {
				return x;
			}
		}
	}
	
	return -1;
};

ABCmouseUtils.inArray = function(array, value) { //haystack, needle
	return ABCmouseUtils.indexOf(array, value) != -1;
};

ABCmouseUtils.count = function(array) { //expects object, excludes methods and inherited properties
	var count = 0;
	for(element in array) {
		if(array.hasOwnProperty(element) && typeof(array[element] != 'function')) { count++; }
	}
	return count;
}

//////////////////////////////////////////////////////////////////////////
//
// date-related functions
//
//////////////////////////////////////////////////////////////////////////


//it takes a date object or an integer between 1-12
ABCmouseUtils.getMonthName = function(date, zeroBased) {
	zeroBased = zeroBased || false;
	var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
	
	if(date.getMonth) {
		return monthNames[date.getMonth()];
	} else {
		if(zeroBased) {
			return monthNames[date];
		} else {
			return monthNames[--date];
		}
	}
};


//////////////////////////////////////////////////////////////////////////
//
// Videoplayer Functions
//
//////////////////////////////////////////////////////////////////////////

ABCmouseUtils.openVideo = function(event) {
	var html5VideoSupport = !!document.createElement('video').canPlayType;
	
	if(!html5VideoSupport) {
		//var flowplayer = new FlowVideoPlayer();
		flowplayerObject.play(videoplayer.url, {
			absolutePath: true,
			showSignUpBtn: false,
			dimensions: {width: 900, height: 600}
			//autoclose: true
		});
		return;
	}
	
	document.getElementById('video_holder').style.visibility= 'visible';
	var target = getEventTarget(event);
	target.objref	= videoplayer;
	
	if(videoplayer.getPosition() != 0) videoplayer.setPosition(0);
	videoplayer.play();
	
	new PopupCover();
}

ABCmouseUtils.positionVideoHolder = function() {
	position = ABCmouseUtils.getPosition(900, 600);
	document.getElementById('video_holder').style.position = 'fixed';
	document.getElementById('video_holder').style.top = position.y/2 + "px";
	document.getElementById('video_holder').style.left = position.x + "px";
}

ABCmouseUtils.positionFlowVideoHolder = function() {
	position = ABCmouseUtils.getPosition(900, 600);
	document.getElementById('flowvideoplayerdiv').style.position = 'fixed';
	document.getElementById('flowvideoplayerdiv').style.top = position.y/2 + "px";
	document.getElementById('flowvideoplayerdiv').style.left = position.x + "px";
}

ABCmouseUtils.changeVideoSrc = function(newFile, event) {
	var isIE8 = navigator.userAgent.search('MSIE 8');
	var videoDiv = document.getElementById('videodiv_1');
	//var srcString = 'http://' + window.location.hostname + '/artwork/home/homepage/video/';
	var srcString = '/artwork/home/homepage/video/';
	videoSource = srcString + newFile;
	if(isIE8 == -1 && videoDiv.canPlayType && videoDiv.canPlayType('video/mp4')) {
		videoSource = videoSource;
		videoplayer.video_file_name = newFile;
	}
	else if(isIE8 != -1) {
		videoSource = videoSource;
		videoplayer.video_file_name = newFile;
	}
	else {
		videoSource = videoSource.replace('.mp4','.ogv');
		videoplayer.video_file_name = newFile.replace('.mp4','.ogv');
	}
	if(isIE8 == -1) {
		videoDiv.src = videoSource;
	} else { videoplayer.url = videoSource; }
	ABCmouseUtils.openVideo(event);
}

//////////////////////////////////////////////////////////////////////////
//
// Miscellaneous functions
//
//////////////////////////////////////////////////////////////////////////


ABCmouseUtils.gotoURL = function(url) {
	window.location =  url;
};

ABCmouseUtils.preloadImage = function(image, callback) {
	var img = new Image();
	img.src = image;
	
	if(typeof(callback) == "function") {
		if(img.width > 0) { //fix for cached images
			callback(); 
		} else {
			ABCmouseUtils.addEventListener(img, "load", callback);
		}
	}
};

ABCmouseUtils.preloadImages = function(images, callback) {
	var preloaderCounter = 0;
	
	ABCmouseUtils.forEach(images, function(image) {
		if(typeof(callback) == "function") {
			ABCmouseUtils.preloadImage(image, doneLoading);
		} else {
			ABCmouseUtils.preloadImage(image);
		}
	});
	
	function doneLoading() {
		preloaderCounter++;
		if(preloaderCounter == images.length) {
			callback();
		}
	}
}

ABCmouseUtils.removeElement = function(element) {
	element = ABCmouseUtils.$(element);
	if(element.parentNode) {
		element.parentNode.removeChild(element);
	}
};

ABCmouseUtils.createElement = function(tag, attributes) {
	var newElement = document.createElement(tag);
	
	for(var attribute_name in attributes) {
		if(attribute_name == "className" || attribute_name == "class") {
			//newElement.setAttribute("class", attributes[attribute_name]);
			newElement.className = attributes[attribute_name];
		} else if(attribute_name == "style") {
			//work around for IE 7
			newElement.style.cssText = attributes[attribute_name];
		} else {
			newElement.setAttribute(attribute_name, attributes[attribute_name]);
		}
	}
	
	return newElement;
};

ABCmouseUtils.buildQueryString = function(data, encode) {
	encode = (encode == null) ? true : encode;
	var queryString = "";
	
	for(var name in data) {
		if(queryString != "") {
			queryString += "&";
		}
		queryString += name + "=" + data[name];
	}

	if(encode) {
		return encodeURIComponent(queryString);
	} else {
		return queryString;
	}
};

ABCmouseUtils.addEventListener = function(element, type, listener) {
	element = ABCmouseUtils.$(element);

	if(element.addEventListener) {
		element.addEventListener(type, listener);
	} else if(element.attachEvent) {
		//work around to set the "this" keyword to be the element
		element.attachEvent("on" + type, function() { listener.apply(element, arguments)});
	} else if(element["on" + type]) {
		var current_listener = element["on" + type];
		
		element["on" + type] = function() {
			if(typeof(current_listener) == "function")
				current_listener();
			listener();
		};
	}
};

ABCmouseUtils.addEventListeners = function(elementIDs, listener, callback) {
	for(elementID in elementIDs) {
		if(elementID != 'indexOf') {
			if(typeof(elementIDs[elementID]) == 'string') { element = document.getElementById(elementIDs[elementID]); }
			else { element = element; }
			if(element != null) {
				ABCmouseUtils.addEventListener(element, listener, callback);
			}
		}
	}
}

ABCmouseUtils.getEventTarget = function(event) {
	event = event || window.event;
	
	if(event.target != null) {
		return event.target;
	} else if(event.srcElement != null) {
		return event.srcElement;
	} else {
		return this;
	}
};

ABCmouseUtils.cancelEventListener = function(event) {
	var event = event || window.event;
	if(event.preventDefault) { event.preventDefault(); }
	if(event.returnValue !== null) { event.returnValue = false; }
	return false;
}

ABCmouseUtils.stopPropagation = function(event) {
	var event = event || window.event;
	
	if(event && event.stopPropagation) {
		event.stopPropagation();
	} else {
		event.cancelBubble = true; //for IE;
	}
	
}

ABCmouseUtils.onLoad = function(func) {
	ABCmouseUtils.addEventListener(window, "load", func);
};

ABCmouseUtils.$ = function(element) {
	var requestedElement = element;
	if(typeof(element) == "string") {
		element = document.getElementById(element);
	}
	
	if(element == null) throw "Element(" + requestedElement + ") can't be null";
	return element;
};


(function(){
	ABCmouseUtils.isKeyboardUp = false;
	ABCmouseUtils.isMobile = /mobile/i.test(navigator.userAgent);
	var initialPageHeight = ABCmouseUtils.getPageSize().height;
	
	ABCmouseUtils.addEventListener(window, "resize", function() {

		var currentPageHeight = ABCmouseUtils.getPageSize().height;
		
		if(currentPageHeight < initialPageHeight && ABCmouseUtils.isMobile) {
			ABCmouseUtils.isKeyboardUp = true;
		} else {
			ABCmouseUtils.isKeyboardUp = false;

		}

	});
	
	ABCmouseUtils.addEventListener(window, "orientationchange", function() {
		initialPageHeight = ABCmouseUtils.getPageSize().height;
	});
})();