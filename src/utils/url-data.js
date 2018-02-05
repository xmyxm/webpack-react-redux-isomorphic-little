export const paramToStr = data =>{
	let paramArr = []; 
	let paramStr = ''; 
	for (let attr in data) {
		paramArr.push(attr + '=' + data[attr]);
	}
	paramStr = paramArr.join('&');
	return paramStr
}




