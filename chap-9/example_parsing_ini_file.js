var iniConfig = ";comments are preceded by a semicolon...\n; each section concerns an individual enemy\n[larry]\nfullname=Larry Doe\ntype=kindergarten bully\nwebsite=http://www.geocities.com/CapeCanaveral/11451\n\n[gargamel]\nfullname=Gargamel\ntype=evil sorcerer\noutputdir=/home/marijn/enemies/gargamel ";
function parseIni(file){
	var current = {name: null, fields: []};
  	var data = [];
  	// \r for some os which adds carriage return in addition to \n for newline
  	file.split(/\r?\n/).forEach(function(line){

      var match;
      // for comments or whitespaces
      if (/^\s*(;.*)?$/.test(line)) {
        	return;
        }
      // for fetching name
      else if (match = line.match(/^\[(.*)\]$/)) {
      	// match[1] will be the parenthesis part i.e., name part
        current = {name: match[1], fields: []};
        data.push(current);
      }
      // for fields
      else if (match = line.match(/^(\w+)=(.*)$/)) {
      	current.fields.push({name: match[1], value: match[2] });
      }
      // for non-formatted data
      else {
      	throw new Error("Line '" + line + "' is invalid.");
      }

    });
  return data;
}
console.log("Fetched data from INI file is ", parseIni(iniConfig));
