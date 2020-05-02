var myObj = { name: "John", age: 31, city: "New York" };
var myJSON = JSON.stringify(myObj);
//console.log(myJSON); //Output: {"name":"John","age":31,"city":"New York"}

var myJSON2 = '{"name":"John", "age":31, "city":"New York"}';
var myObj2 = JSON.parse(myJSON2);
//console.log(myObj2); //Output: { name: 'John', age: 31, city: 'New York' }

var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
//console.log(obj); //Output- { name: 'John', birth: 1986-12-14T00:00:00.000Z, city: 'New York' } 

//or

obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

var text = '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
var obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");
//console.log(obj); //Output - { name: 'John', age: [Function (anonymous)], city: 'New York' }


var arr = ["John", "Peter", "Sally", "Jane"];
myJSON = JSON.stringify(arr);
//console.log(myJSON); //Output - ["John","Peter","Sally","Jane"]


obj = { name: "John", today: new Date(), city: "New York" };
myJSON = JSON.stringify(obj);
//console.log(myJSON); //Output- {"name":"John","today":"2020-04-30T08:39:18.611Z","city":"New York"}

obj = { name: "John", age: function () { return 30; }, city: "New York" };
myJSON = JSON.stringify(obj);
console.log(myJSON); //Output - {"name":"John","city":"New York"}
