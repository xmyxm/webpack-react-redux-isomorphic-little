export default {
	ChangeDateFormat:cellval => {  
	    var date = new Date(parseInt(cellval.replace("/Date(", "").replace(")/", ""), 10));  
	    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;  
	    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();  
	    return date.getFullYear() + "-" + month + "-" + currentDate;  
	},
	ConvertDate:jsondate => { 
		var date = new Date(parseInt(jsondate.replace("/Date(", "").replace(")/", ""), 10)); 
		return date;
	},
	Format:(time,rule) => {
		//console.log(date.Format("yyyy年MM月dd日 hh:mm:ss.S")); //输出: 2016年04月01日 10:41:08.133
		//console.log(date.Format("yyyy-MM-dd hh:mm:ss")); //输出: 2016-04-01 10:41:08
		//console.log(date.Format("yy-MM-dd hh:mm:ss")); //输出: 16-04-01 10:41:08
		//console.log(date.Format("yy-M-d hh:mm:ss")); //输出: 16-4-1 10:41:08
		let date = new Date(parseInt(time.replace("/Date(", "").replace(")/", ""), 10)); 
		let o = {
			"y+": date.getFullYear(),
			"M+": date.getMonth() + 1,                 //月份
			"d+": date.getDate(),                    //日
			"h+": date.getHours(),                   //小时
			"m+": date.getMinutes(),                 //分
			"s+": date.getSeconds(),                 //秒
			"q+": Math.floor((date.getMonth() + 3) / 3), //季度
			"S+": date.getMilliseconds()             //毫秒
		};
		for (var k in o) {
		if (new RegExp("(" + k + ")").test(rule)){
				if(k == "y+"){
					rule = rule.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
				}
				else if(k=="S+"){
					var lens = RegExp.$1.length;
					lens = lens==1?3:lens;
					rule = rule.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1,lens));
				}
				else{
					rule = rule.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
				}
			}
		}
		return rule;
	}
}