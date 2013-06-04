module.exports = bisectLow;
module.exports.high = bisectHigh
module.exports.low = bisectLow

function bisectHigh (arr, x) {
	var low = 0;
	var high = arr.length - 1;
	var mid, val;

	while (low < high) {
		mid = Math.floor((low + high) / 2)
		val = arr[mid]
	
		if (val < x) {
			low = mid + 1
		} else if (val == x){
			return mid
		} else {
			high = mid
		}
	}

	return low
}


function bisectLow (arr, x) {
	var low = 0;
	var high = arr.length - 1;
	var mid, val;

	while (low < high) {
		mid = Math.ceil((low + high) / 2)
		val = arr[mid]

		if (val < x) {
			low = mid
		} else if (val == x){
			return mid
		} else {
			high = mid - 1
		}
	}

	return low
}