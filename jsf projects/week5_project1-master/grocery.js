$(document).ready(function() {

  var groceries = [
  {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
  {name: "Onions", status: "needed", price: "1.85", quantity: 2},
  {name: "Cilantro", status: "needed", price: "0.95", quantity: 1},
  {name: "Limes", status: "complete", price: "0.33", quantity: 3},
  {name: "Jalapeno", status: "complete", price: "0.15", quantity: 2}
  ];

// Before we start anything, string up the css file, this javascript file, and
// the jQuery CDN to grocery.html file.

//1. Display the existing list of grocery items (from the grocery array)
// in an unordered list in the "list" id that already exists in grocery.html.
// Display each item's name, price, and quantity.
// Ex: Tomatoes (5) @ $3.99
var allItems = function(){
  $("#list").empty();
  for(i=0; i<groceries.length; i++) {
    var item = groceries[i];
    $("#list").append("<li>" + item.name + ": $" + item.price + " each, quantity: " + item.quantity + "</li>");
};
};
allItems();

//2. Use the inputs and add button to add grocery items to the beginning of the list.
// Default status should be "needed". The item should appear above the existing grocery items.
$(".btn-success").on("click", function(){
  var newName = $("#addItem").val();
  var newPrice = $("#addPrice").val();
  var newQuantity = $("#addQuantity").val();
//   var newItem = $("#addItem").val() + ": $" + $("#addPrice").val() + " each, quantity: " + $("#addQuantity").val();
// $("#list").prepend("<li>" + newItem + "</li>");
if (newName == "" || newPrice == "" || newQuantity == "") {
  alert("Please enter information into all fields.")
} else {
  groceries.push({name: newName, status: "needed", price: newPrice, quantity: newQuantity});
  allItems();
  everything();
};
});

//3. Display the total cost of the groceries. Make sure this updates as you add items to the list.
var everything = function(){
var itemTotal = 0;
for(i=0; i<groceries.length; i++) {
  itemTotal += groceries[i].price * groceries[i].quantity;
};
$("h4 span").text("$" + itemTotal.toFixed(2));
};
everything();

//4. Put a check in to make sure users aren't adding items without a name, price, or quantity.

});
