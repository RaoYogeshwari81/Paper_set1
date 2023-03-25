function array() {
var a = [10,20,30,40, "a"];
var new_a = a.map((_,i,_a)=> _a.slice(i).reduce((x,y)=>x+y));
console.log({a,new_a});
return new_a;
}
  
array();