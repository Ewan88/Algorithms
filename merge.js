var merge = function(array, p, q, r) {
    var a=[],b=[],c=p,d,e;for(d=0;c<=q;d++,c++){a[d]=array[c];}for(e=0;c<=r;e++,c++){b[e]=array[c];}c=p;for(e=d=0;d<a.length&&e<b.length;){if(a[d]<b[e]){array[c]=a[d];d++;} else {array[c]=b[e]; e++;}c++; }for(;d<a.length;){array[c]=a[d];d++;c++;}for(;e<b.length;){array[c]=b[e];e++;c++;}
};


var mergeSort = function(array, p, r) {
    if (p < r) {
        let q = Math.floor((p+r)/2);
        mergeSort(array, p, q);
        mergeSort(array, q+1, r);
        merge(array, p, q, r);
    }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
console.log("Array before sorting: " + array);
mergeSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);
