'use strict';

const fs = require('fs');
//console.log(fs);

fs.readFile('./text.txt', 'utf8',(err, data)=>{
	if(err){
		console.log(err);
		return;
	}
	console.log(data);
})