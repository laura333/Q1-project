var array = [1,7,22,9];

var newArray = array.map(convertToString);

function convertToString(e) {
  return e.toString();
}

console.log(array);
console.log(newArray);

var array2 = ['cassie','mat','MATT','jason','THOMAS','anna','TeDDi'];

var camelCaseArray = array2.map(camelCase);

function camelCase(str) {
  return str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase();
}

console.log(array2);
console.log(camelCaseArray)
