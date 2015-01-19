/**
 * New node file
 */
 
 
 // 1.Reversing String
 
var str="Brahmananada";

str=str.split("").reverse().join("");

console.log(str);


//2. Getting alphabet values

var ss="Brahma123nana2231da";
var _forEach =Array.prototype.forEach;
var _map =Array.prototype.map;
var _filter =Array.prototype.filter;
//console.log(_forEach);
var kk=_filter.call(ss,function(ele){
	return !isNaN(ele);	
});
var mm=kk.join("");
console.log(mm);

//3. call back in replace

function replacer(match, p1, p2, p3, offset, string){
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);
  
//4.Sort string value by sort method
var ss={name:'lipu'}
var xx={name2:'lipu2'}

var mm=Object(ss,xx);

console.log(mm.length);

//the array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// temporary holder of position and sort-value
var map = list.map(function(e, i) {
  return { index: i, value: e.toLowerCase() };
})

// sorting the map containing the reduced values
map.sort(function(a, b) {
  return a.value > b.value ? 1 : -1;
});
var result = map.map(function(e){
  return list[e.index];
});

console.log(result);




