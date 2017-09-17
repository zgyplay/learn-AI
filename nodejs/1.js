var fs = require("fs"); //read internal module - file system
//async read file
fs.readFile("./1.txt",function(err,data){
	console.log(data.toString());
});

var sum = 0;
for (var i = 0; i <= 100; i++) {
	sum += i;
}
console.log(sum);
