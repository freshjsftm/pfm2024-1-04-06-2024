'use strict';

const fs = require('fs/promises');
//console.log(fs);

fs.readFile('./text.txt', 'utf-8')
.then((data)=>{
	console.log(data)
})
.catch((err)=>{
	console.log(err)
})