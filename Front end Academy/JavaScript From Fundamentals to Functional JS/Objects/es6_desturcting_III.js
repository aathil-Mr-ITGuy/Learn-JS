//Omit certain values
var[a, ,b] = [1,2,3];
console.log(a,b);
// -> 1 3

//Combine with rese
var[a,...b] = [1,2,3];
console.log(a,b);
// -> 1 [2,3]

//swap variables easily
var a=1, b=2;
[b,a] = [a,b];
console.log(a,b);
// -> 1,2

//deep arrays
var [a,[b,[c,d]]] = [1,[2,[[[3,4],5],6]]];
console.log("a:",a,"b:",b,"c:",c,"d",d)
// -> a=1, b=[2], c=[3,4,5], d=6