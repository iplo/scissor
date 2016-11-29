var reader = new FileReader();
reader.onload = function(event) {
    var contents = event.target.result;
    console.log("File contents: " + contents);
};

reader.onerror = function(event) {
    console.error("File could not be read! Code " + event.target.error.code);
};

var libs, pkgs, filejson;

function getlibs(){
	readjson("scissor.json", "libs");
	
	// libs
	addlib("jquery");

}

function getpkgs(){
	readjson("scissor.json", "pkgs");
	
	// pkgs
	addpkg("");
}


function readjson(file, fdata){
	filejson = reader.readAsText(file);

	if(fdata == "libs"){
		libs = json.parse(filejson);
		libs = libs.libs;
	} else { if(fdata == "pkgs"){
		pkgs = json.parse(filejson);
		pkgs = pkgs.pkgs;
	}};
}

function addpkg(pkg){
	if(pkgs[pkg] == "javascript"){
		document.querySelector("head").appendChild("<script src=\"./pkgs"+pkg+"\"</script>");
	} else {if(pkgs[pkg] == "css"){
		document.querySelector("head").appendChild("<link rel=\"stylesheet\" type=\"text/css\" href=\"./pkgs"+pkg+"\"</script>");
	}};
}

function addlib(lib){
	document.querySelector("head").appendChild("<script src=\""+libs[lib]+"\"</script>");
}
