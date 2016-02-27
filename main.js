// main.js
window.onload = function(){
	var client = new ZeroClipboard( document.getElementById("zeroCopy") );
}
//delete all the blank characters.
String.prototype.mtrim = function(){
	return this.replace(/\s/g,"");
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

function getSourceContent(){
	return document.getElementById("abstract").value.mtrim();
}

function tabularSourceString(source){
	var cols = parseInt(document.getElementById("abstractionSource").value);
	var textIndent = document.getElementById("textIndent").checked;
	if(textIndent){
		//append the source string with additional two blank characters at head;
		source = "  "+source;
	}
	var result = "";
	for(var i=0;i<source.length;i++){
		result += source.charAt(i);
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
