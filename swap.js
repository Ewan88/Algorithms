var swap = function(array, firstIndex, secondIndex) {
	var temp = array[secondIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = array[firstIndex];
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

console.log(testArray);

//Program.assertEqual(testArray, [9, 7, 4]);
