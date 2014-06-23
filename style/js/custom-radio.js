//////////////////////////////////////////////////////
//
//			Script for creating custom Radio butons and CheckBoxes
//
//			It creates a hidden radio/checkbox button right before the image tag with the attributes (name, value) especified on the img tag
//
//			The img tag takes the following attributes:
//
//				- customInput: "customRadioGroup" for radio buttons and "customCheckBox" for checkboxes
//				- onload(CustomRadioButton.add(this)): this where all happens, this is for adding both radio buttons and checkboxes
//				- name: the name for the real input tag
//				- value: the value for the input tag
//				- onImg: the checked image for the radio/checkbox
//				- offImg: the unchecked image for the radio/checkbox
//				- checked: for prechecking the radio/checkbox
//			
//			Example:
//
//			<img src="/images/radio_uncheck.png" customInput="customRadioGroup" value="10" name="productId" onImg="/images/radio_check.png" offImg="/images/radio_uncheck.png" onload="CustomRadioButton.add(this)" checked="checked"/>
//
//////////////////////////////////////////////////////

function CustomRadioButton(imgNode) {
	this.imgNode = imgNode;
	this.radioButton = null;
	this.type = "radio";

	this.onImg = null;
	this.offImg = null;
	this.value = 0;
	this.checked = false;
	this.name = null;
	this.oncheck = null;
	
	initAtrributes(CustomRadioButton.ATTRIBUTES, this, this.imgNode);
	
	this.changeValue = function(value) {
		this.radioButton.value = this.value = value;
	};
	
	this.changeName = function(name) {
		this.radioButton.name = this.name = name;
	};

	this.update = function() {
		if(this.radioButton.checked) {
			this.imgNode.src = this.onImg;
			this.checked = true;
		} else {
			this.checked = false;
			this.imgNode.src = this.offImg;
		}
	};

	this.check = function() {
		//if(this.radioButton.checked) return;
		if(this.type == "checkbox")
			this.radioButton.checked = !this.radioButton.checked;
		else
			this.radioButton.checked = true;
		CustomRadioButton.updateRadioGroup(this.name);
		
		if(this.oncheck != null) {
			eval(this.oncheck);
		}
	};
	
	this.uncheck = function() {
		this.radioButton.checked = false;
		CustomRadioButton.updateRadioGroup(this.name);
	};
	
	this.setup = function() {
		var radioButton = createRadioButton(this);
		this.imgNode.parentNode.insertBefore(radioButton, this.imgNode);
		radioButton.checked = (this.checked == false)?false:true;
		this.radioButton = radioButton;

		this.imgNode.onclick = function() {
			CustomRadioButton.get(this).check();
		};
	};
	
	function createRadioButton(customRadioButton) {
		var radioButton = document.createElement("input");
		
		radioButton.id = "radio_"+customRadioButton.imgNode.id;
		radioButton.type = customRadioButton.type;
		radioButton.name = customRadioButton.name;
		radioButton.value = customRadioButton.value;
		radioButton.style.display = "none";
		
		return radioButton;
	}
}

//////////////////////////////////

CustomRadioButton.radioButtons = new Array();
CustomRadioButton.listeners = new Array();
CustomRadioButton.ATTRIBUTES = new Array(
	{property: null, attribute: "customInput", optional: false},
	{property: "name", attribute: "name", optional: false}, 
	{property: "value", attribute: "value", optional: false}, 
	{property: "onImg", attribute: "onImg", optional: false}, 
	{property: "offImg", attribute: "offImg", optional: false}, 
	{property: "checked", attribute: "checked", optional: true},
	{property: "oncheck", attribute: "oncheck", optional: true});

//////////////////////////////////

CustomRadioButton.add = function(imgElement) {
	// only add new code if element is not from template
	var imageId = imgElement.getAttribute("id");
	if( imageId.indexOf('%%id%%') < 0 ){
		if(!hasValidMarkup(imgElement, CustomRadioButton.ATTRIBUTES)) return;
		var name = imgElement.getAttribute("name");

		if(CustomRadioButton.isACustomRadioButton(imgElement)) return;

		var customRadioButton = null;
		if(keyInArray(name, CustomRadioButton.radioButtons)) {
			customRadioButton = CustomRadioButton.createCustomInput(imgElement);
			CustomRadioButton.radioButtons[name].push(customRadioButton);
		} else {
			customRadioButton = CustomRadioButton.createCustomInput(imgElement);
			CustomRadioButton.radioButtons[name] = new Array();
			CustomRadioButton.radioButtons[name].push(customRadioButton);
		}

		//remove onload event
		imgElement.onload = null;

		customRadioButton.setup();
		CustomRadioButton.updateRadioGroup(name);
	}
};

//////////////////////////////////

CustomRadioButton.createCustomInput = function(imgElement) {
	var type = imgElement.getAttribute("customInput");
	var customElement = null;
	if(type.toLowerCase() == "customcheckbox") {
		customElement = new CustomRadioButton(imgElement);
		customElement.type = "checkbox";
		return customElement;
	} else {
		return new CustomRadioButton(imgElement);
	}
};

//////////////////////////////////

CustomRadioButton.get = function(imgElement) {
	//alert("getting: "+imgElement.id);
	if(typeof(imgElement) == "string") imgElement = document.getElementById(imgElement);
	if(!hasValidMarkup(imgElement, CustomRadioButton.ATTRIBUTES)) return null;
	var name = imgElement.getAttribute("name");
	
	if(keyInArray(name, CustomRadioButton.radioButtons)) {
		for(var radioButton in CustomRadioButton.radioButtons[name]) {
			if(CustomRadioButton.radioButtons[name][radioButton].imgNode == imgElement)
				return CustomRadioButton.radioButtons[name][radioButton];
		}
	}
	
	return null
};

//////////////////////////////////

CustomRadioButton.getValue = function(name) {
	if(name in CustomRadioButton.radioButtons) {
		for(var x=0; x < CustomRadioButton.radioButtons[name].length; x++) {
			if(CustomRadioButton.radioButtons[name][x].checked) {
				return CustomRadioButton.radioButtons[name][x].value;
			}
		}
	}
	
	return null;
};

//////////////////////////////////

CustomRadioButton.validate = function(name) {
	if(CustomRadioButton.radioButtons[name]) {
		for(var index in CustomRadioButton.radioButtons[name]) {
			var customRadioBtn = CustomRadioButton.radioButtons[name][index];
			if(customRadioBtn.radioButton.checked) {
				return true;
			}
		}
	}
	
	return false;
};

//////////////////////////////////

CustomRadioButton.updateRadioGroup = function(name) {
	for(var customRadioButton in CustomRadioButton.radioButtons[name]) {
		if(typeof(CustomRadioButton.radioButtons[name][customRadioButton]) == "function") continue;
		CustomRadioButton.radioButtons[name][customRadioButton].update();
	}
	
	CustomRadioButton.dispatchEvent(name, "checked");
};

//////////////////////////////////

CustomRadioButton.addListener = function(name, eventName, listener) {
	if(eventName in CustomRadioButton.listeners) {
		CustomRadioButton.listeners[eventName].push({name: name, listener: listener});
	} else {
		CustomRadioButton.listeners[eventName] =  new Array();
		CustomRadioButton.listeners[eventName].push({name: name, listener: listener});
	}
};

//////////////////////////////////

CustomRadioButton.dispatchEvent = function(name, eventName) {
	if(name in CustomRadioButton.radioButtons) {
		if(eventName in CustomRadioButton.listeners) {
			for(var x=0; x < CustomRadioButton.listeners[eventName].length; x++) {
				if(CustomRadioButton.listeners[eventName][x].name == name) {
					CustomRadioButton.listeners[eventName][x].listener.call(null);
				}
			}
		}
	}
};

//////////////////////////////////

CustomRadioButton.update = function() {
	for(var key in CustomRadioButton.radioButtons) {
		CustomRadioButton.updateRadioGroup(key);
	}
};

//////////////////////////////////

CustomRadioButton.isACustomRadioButton = function(imgElement) {
	if(imgElement == null || imgElement.getAttribute("name") == null) return false;
	var name = imgElement.getAttribute("name");
	
	if(keyInArray(name, CustomRadioButton.radioButtons)) {
		for(var key in CustomRadioButton.radioButtons[name]) {
			if(CustomRadioButton.radioButtons[name][key].imgNode == imgElement)
				return true;
		}
	}
	
	return false;
}

CustomRadioButton.checkGroup = function(name) {
	for(var i in CustomRadioButton.radioButtons[name]) {
		if(typeof(CustomRadioButton.radioButtons[name][i]) == "function") {
			continue;
		}
		if(!CustomRadioButton.radioButtons[name][i].checked) {
			CustomRadioButton.get(CustomRadioButton.radioButtons[name][i].imgNode).check();
		}
	}
	return;
}

CustomRadioButton.unCheckGroup = function(name) {
	for(var i in CustomRadioButton.radioButtons[name]) {
		if(typeof(CustomRadioButton.radioButtons[name][i]) == "function") {
			continue;
		}
		if(CustomRadioButton.radioButtons[name][i].checked) {
			CustomRadioButton.get(CustomRadioButton.radioButtons[name][i].imgNode).uncheck();
		}
	}
	return;
}

//////////////////////////////////

function keyInArray(key, array) {
	for(var arrayKey in array) {
		if(arrayKey == key)
			return true;
	}
	
	return false;
}

//////////////////////////////////

function inArray(arrayItem, array) {
	for(var key in array) {
		if(array[key] == arrayItem)
			return true;
	}
	
	return false;
}

//////////////////////////////////

function hasValidMarkup(element, attributes) {
	if(element == null) return false;
	
	for(var key in attributes) {
		if(element.getAttribute(attributes[key].attribute) == null && attributes[key].optional == false) {
			return false;
		}
	}
	return true;
}

//////////////////////////////////

function initAtrributes(attributes, obj, element) {
	for(var key in attributes) {
		if(attributes[key].attribute == null) continue;
		if(element.getAttribute(attributes[key].attribute) != null) {
			obj[attributes[key].property] = element.getAttribute(attributes[key].attribute);
		}
	}
}