module.exports = {
	info:(info)=>{
		console.log('\x1B[32m%s\x1B[39m',info);
		
	},

	warn:(warn)=>{
		console.log('\x1B[33m%s\x1b[0m:',warn);
	},

	error:(error)=>{
		console.log('\x1B[31m%s\x1B[39m',error);
	},
}



