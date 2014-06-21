var userAgent = navigator.userAgent;
var isIE8 = false;
var isIE9 = false;
if(userAgent.match(/MSIE 9/i)) { isIE9 = true; }
if(userAgent.match(/MSIE 8/i)) { isIE8 = true; }

function updateFile(input, type) {
	var idParts = input.id.split("_");
	if(type == 'coverLetter') {
		var jobID = idParts[3];
		if(isIE8 || isIE9) {
			var file = input.value;
			file = file.split('\\').pop();
		} else {
			var file = input.files[0].name;
		}
		var fakeTextId = "cover_letter_" + jobID;
		var removeId = "remove_cover_letter_" + jobID;
		document.getElementById("cover_letter_error_"+jobID).style.display = "none";
	} else if(type == 'resume') {
		var jobID = idParts[2];
		if(isIE8 || isIE9) {
			var file = input.value;
			file = file.split('\\').pop();
		} else {
			var file = input.files[0].name;
		}
		var fakeTextId = "resume_" + jobID;
		var removeId = "remove_resume_" + jobID;
		document.getElementById("resume_error_"+jobID).style.display = "none";
	}
	
	document.getElementById(fakeTextId).innerHTML = file;
	document.getElementById(removeId).style.display = 'block';
}

function removeFile(remove, type) {
	var idParts = remove.id.split("_");
	if(type == 'coverLetter') {
		var jobID = idParts[3];
		var inputID = "cover_letter_input_" + jobID;
		var fakeTextId = "cover_letter_" + jobID;
		document.getElementById("cover_letter_error_"+jobID).style.display = "none";
	} else if(type == 'resume') {
		var jobID = idParts[2];
		var inputID = "resume_input_" + jobID;
		var fakeTextId = "resume_" + jobID;
		document.getElementById("resume_error_"+jobID).style.display = "none";
	}
	
	document.getElementById(inputID).value="";
	document.getElementById(fakeTextId).innerHTML = "";
	remove.style.display = "none";
}

function updateCodeSamples(divID) {
	var inputContainer = document.getElementById(divID);
	var inputs = inputContainer.getElementsByTagName("input");
	var idParts = divID.split('_');
	var jobID = idParts[3];
	var html = "";
	var fileListString = "";
	
	//add file to displayed file list
	for(var x=0; x<inputs.length; x++) {
		var input = inputs[x];
		if(isIE8 || isIE9) {
			var fileName = input.value.split('\\').pop();
		} else {
			var fileName = input.files[0].name;
		}
		var comma = "";
		if(x > 0) { comma = ", "; }
		html += '<div id="' + x + '_' + jobID + '_file" class="file_list_entry">' + fileName;
		html += '<div id="' + x + '_' + jobID + '_file_remove" class="remove_file_span" onclick="removeCodeSample(this.id);">Remove</div></div>';
		fileListString += comma + fileName;
	}
	
	//add new input 
	var newInputId = 'code_sample_'+x+'_'+jobID;
	var newInputOnchange = "updateCodeSamples('code_sample_inputs_"+jobID+"');";
	var newInputKVP = {
		'class':'code_sample_input',
		'id':newInputId,
		'type':'file',
		'name':'code_samples[]',
		'onchange':newInputOnchange
	}
	var newInput = ABCmouseUtils.createElement("input",newInputKVP);
	inputContainer.appendChild(newInput);
	newInput.style.zIndex = x+3;
	
	//append file list, redefine styles
	var fileListId = "fileList_"+jobID;
	var fakeBoxId = "code_samples_"+jobID;
	document.getElementById(fileListId).innerHTML = html;
	if(x < 6) { document.getElementById(fileListId).style.marginTop = (41-(7*x)) + "px"; }
	else { document.getElementById(fileListId).style.marginTop = "6px"; }
	document.getElementById(fakeBoxId).innerHTML = fileListString;
	document.getElementById("code_samples_error_"+jobID).style.display = "none";
}

function removeCodeSample(fileID) {
	var idParts = fileID.split('_');
	var idNum = idParts[0];
	var jobID = idParts[1];
	var inputContainer = document.getElementById("code_sample_inputs_"+jobID);
	var fileList = document.getElementById("fileList_"+jobID);
	var input = document.getElementById("code_sample_"+idNum+"_"+jobID);
	var file = document.getElementById(idNum+"_"+jobID+"_file");
	var fileListString = "";
	var fakeBoxId = "code_samples_"+jobID;
	
	inputContainer.removeChild(input);
	fileList.removeChild(file);
	
	//cycle through new list of inputs (and corresponding files), rewrite ids so that they are sequential
	var newInputContainer = document.getElementById("code_sample_inputs_"+jobID);
	var newInputs = newInputContainer.getElementsByTagName("input");
	var newFileList = document.getElementById("fileList_"+jobID);
	var newFiles = newFileList.childNodes;
	
	for(var i=0;i<newFiles.length; i++) {
		var newFile = newFiles[i];
		var newFileRemove = newFile.getElementsByTagName("div");
		newFile.id = i+"_"+jobID+"_file";
		newFileRemove[0].id = i+"_"+jobID+"_file_remove";
	}
	
	for(var x=0; x<newInputs.length; x++) {
		var newInput = newInputs[x];
		newInput.id = "code_sample_"+x+"_"+jobID;
		newInput.style.zIndex = x+3;
	}
	
	//rewrite text in fake text box
	var newNewInputContainer = document.getElementById("code_sample_inputs_"+jobID);
	var newNewInputs = newNewInputContainer.getElementsByTagName("input");
	
	if(newNewInputs.length > 1) {
		comma = "";
		for(var c = 0;c<newNewInputs.length;c++) {
			if(c>0) { comma = ", "; }
			var newNewInput = newNewInputs[c];
			if(isIE8 || isIE9) {
				if(newNewInput.value != "") {
					fileListString += comma + newNewInput.value.split('\\').pop();
				}
			} else {
				if(typeof(newNewInput.files[0]) != 'undefined') {
					fileListString += comma + newNewInput.files[0].name;
				}
			}
		}
	} else { var c = 0; }
	document.getElementById(fakeBoxId).innerHTML = fileListString;
	
	var fileListId = "fileList_"+jobID;
	if(c < 7) {document.getElementById(fileListId).style.marginTop = (48-(7*c)) + "px"; }
	else {document.getElementById(fileListId).style.marginTop = "6px"; }
	document.getElementById("code_samples_error_"+jobID).style.display = "none";
}

function validateCareerForm(jobID) {
	// hide previous errors
	jQuery('.error_text').hide();
	// var errorDivs = new Array("name_error_","email_error_","salary_error_","cl_resume_error_","cover_letter_error_","resume_error_","portafolio_error_");
	// for(i=0;i<errorDivs.length;i++) {
	// 	document.getElementById(errorDivs[i]+jobID).style.display = "none";
	// }

	var activeTab = jQuery('#name_input_'+jobID).parents('.job-category').attr('id');//window.location.pathname.split('/')[2];
	var supportedTypes = /(pdf|txt|rtf|doc|docx|html)/i;
	var errors = { 'errors':false };
	var name = document.getElementById("name_input_"+jobID).value;
	if(name == "") {
		errors.errors = true;
		errors.name = 'name_error_'+jobID;
	}
	var email = document.getElementById("email_input_"+jobID).value;
	if(!ABCmouseUtils.validateEmail(email)) {
		errors.errors = true;
		errors.email = 'email_error_'+jobID;
	}
	var salary = document.getElementById("salary_input_"+jobID).value;
	var digit = /\d/;
	if(!digit.test(salary)) {
		errors.errors = true;
		errors.salary = 'salary_error_'+jobID;
	}
	var coverLetterText = document.getElementById("cover_letter_textarea_"+jobID).value;
	if(isIE8 || isIE9) {
		var coverLetterFile = document.getElementById("cover_letter_input_"+jobID).value.split('.').pop();
	} else {
		if(document.getElementById("cover_letter_input_"+jobID).files.length <= 0) { var coverLetterFile = ""; }
		else { var coverLetterFile = document.getElementById("cover_letter_input_"+jobID).files[0].name.split('.').pop(); }
	}
	if(coverLetterText == 'Type here or upload your cover letter below.') { coverLetterText = ""; }
	if(coverLetterFile != "") {
		var fileIsSupported = supportedTypes.test(coverLetterFile);
		if(!fileIsSupported) {
			errors.errors = true;
			errors.cl_resume = 'cl_resume_error_'+jobID;
			errors.coverLetter = "cover_letter_error_"+jobID;
			document.getElementById("cover_letter_error_"+jobID).innerHTML = 'Unsupported file type.';
		}
	} else if(coverLetterFile == "" && coverLetterText == "") {
		errors.errors = true;
		errors.cl_resume = 'cl_resume_error_'+jobID;
		errors.coverLetter = "cover_letter_error_"+jobID;
		document.getElementById("cover_letter_error_"+jobID).innerHTML = 'Please type or upload a cover letter.';
	}
	if(isIE8 || isIE9) {
		var resumeFile = document.getElementById("resume_input_"+jobID).value.split('.').pop();
	} else {
		if(document.getElementById("resume_input_"+jobID).files.length <= 0) { var resumeFile = ""; }
		else { var resumeFile = document.getElementById("resume_input_"+jobID).files[0].name.split('.').pop(); }
	}
	if(resumeFile == "") {
		errors.errors = true;
		errors.cl_resume = 'cl_resume_error_'+jobID;
		errors.resume = "resume_error_"+jobID;
		document.getElementById("resume_error_"+jobID).innerHTML = "Please upload a resumé.";
	} else {
		var fileIsSupported = supportedTypes.test(resumeFile);
		if(!fileIsSupported) {
			errors.errors = true;
			errors.cl_resume = 'cl_resume_error_'+jobID;
			errors.resume = "resume_error_"+jobID;
			document.getElementById("resume_error_"+jobID).innerHTML = 'Unsupported file type.';
		}
	}
	if(activeTab == 'developers') {
		document.getElementById("code_samples_error_"+jobID).style.display = "none";
		var supportedTypes = /(pdf|txt|rtf|doc|docx|html|php|js|inc|css|c|cc|cpp|m)/i;
		var fileTypes = new Array();
		var codeFileContainer = document.getElementById("code_sample_inputs_"+jobID);
		var codeInputs = codeFileContainer.getElementsByTagName("input");
		if(isIE8 || isIE9) {
			for(var i = 0; i < (codeInputs.length - 1); i++) {
				fileTypes.push(codeInputs[i].value.split('.').pop());
			}
		} else {
			for(var i = 0; i < (codeInputs.length - 1); i++) {
				fileTypes.push(codeInputs[i].files[0].name.split('.').pop());
			}
		}
		if(typeof(fileTypes[0]) == "undefined") {
			errors.errors = true;
			errors.code = "code_samples_error_"+jobID;
			document.getElementById("code_samples_error_"+jobID).innerHTML = "Please upload a code sample.";
		} else {
			for(var i=0; i<fileTypes.length; i++) {
				if(!supportedTypes.test(fileTypes[i])) {
					errors.errors = true;
					errors.code = "code_samples_error_"+jobID;
					document.getElementById("code_samples_error_"+jobID).innerHTML = "Unsupported file type.";
					break;
				}
			}
		}
	}
	if(activeTab == 'qa' || activeTab == 'cs') {
		document.getElementById("available_shifts_error_"+jobID).style.display = "none";
		var shiftsDiv = document.getElementById("available_shifts_"+jobID);
		var inputs = shiftsDiv.getElementsByTagName("input");
		var shiftSelected = false;
		for(i=0;i<inputs.length;i++) {
			if(inputs[i].checked) {
				var shiftSelected = true;
				break;
			}
		}
		if(!shiftSelected) {
			errors.errors = true;
			errors.shifts = "available_shifts_error_"+jobID;
		}
	}
	if(activeTab == 'animation' || activeTab == 'illustration' || activeTab == 'gd') {
		var portafolio_link = document.getElementById("portafolio_input_"+jobID).value;
		if(portafolio_link == "") {
			errors.errors = true;
			errors.name = 'portafolio_error_'+jobID;
		}
	}
	if(errors.errors) {
		for(error in errors) {
			if(error != 'errors') {
				document.getElementById(errors[error]).style.display = "block";
			}
		}
		return false;
	}
	return true;
}

function positionSuccessPopup() {
	position = ABCmouseUtils.getPosition(573, 205);
	document.getElementById('success_outer_container').style.top = position.y/2 + "px";
	document.getElementById('success_outer_container').style.left = position.x + "px";
	document.getElementById("success_outer_container").style.display = "block";
}

function closeSuccessPopup() {
	jQuery(this).parent().slideUp(500);
    PopupCover.close();
}