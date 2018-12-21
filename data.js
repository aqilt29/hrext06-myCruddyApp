//chart data;

var data = [];



var countCategories = function () {
	countObj = {};
	for (var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		var valueArr = JSON.parse(localStorage[key]);
		if(!countObj[valueArr[1]]){
			countObj[valueArr[1]] = parseFloat(valueArr[2]);
		} else {
			countObj[valueArr[1]] += parseFloat(valueArr[2]);
		}
	}
	console.log(countObj);
	
	for (var key in countObj){
		var tuple = [key, countObj[key]]
		data.push(tuple);
	}
	console.log(data);

}();




//["2018-12-24","Food","30",1003]
