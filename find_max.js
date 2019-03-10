var a = [-31, 7, 0, 312, 7000, 32];
var max = 0;
var min = 0;
for (let i = 0; i < a.length; i++){
  if (a[i] > max){
    max = a[i];
  }
  else if (a[i] < min){
    min = a[i];
  }
}
console.log(min);
console.log(max);
