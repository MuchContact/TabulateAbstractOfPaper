// main.js
window.onload = function(){
	var client = new ZeroClipboard( document.getElementById("zeroCopy") );
}

//格式化
function format(){
	var str=getSourceContent();
	if(str==""){
		return ;
	}
	var result = tabularSourceString(str);
	setResultContent(result);
}

function splitByWord(source) {
	var words = [];
	var word="";
	var index = 0;
	for(var i=0;i<source.length;i++){
		if(!isStopCharacter(source[i])){
			word += source[i];
			continue;
		} else {
			if(word != "") {
				words[index++] = word;
				word = "";
			}
			if(source[i] != ' ') {
				words[index++] = source[i];
				word = "";
			}
		}
	}
	if(word != ""){
		words[index] = word;
	}
	return words;
}

function isStopCharacter(ch) {
	var patt1 = new RegExp("^[a-zA-Z']$");
	return !patt1.test(ch);
}

function getSourceContent(){
	return document.getElementById("abstract").value.trim();
}

function tabularSourceString(source){
	var cols = parseInt(document.getElementById("abstractionSource").value);
	var textIndent = document.getElementById("textIndent").checked;
	if(textIndent){
		//append the source string with additional two blank characters at head;
		source = "  "+source;
	}
	var result = "";
	var words = splitByWord(source);
	for(var i=0;i<words.length;i++){
		result += words[i];
		if((i+1)%cols==0){
			result += "\r\n";
		}else{
			result += "\t";
		}
	}
	return result;
}

function setResultContent(content){
	document.getElementById("result").value = content;
}
