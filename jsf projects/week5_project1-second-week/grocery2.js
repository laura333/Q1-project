$(document).ready(function() {

  var groceries = [
    {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
    {name: "Onions", status: "needed", price: "1.85", quantity: 2},
    {name: "Cilantro", status: "needed", price: ".95", quantity: 1},
    {name: "Limes", status: "complete", price: ".33", quantity: 3},
    {name: "Jalapeno", status: "complete", price: ".15", quantity: 2}
  ];
  var allItems = function(){
    $("#list").empty();
    $("#purchased").empty();
    for(i=0; i<groceries.length; i++) {
      var item = groceries[i];
      if (groceries [i].status === "needed") {
        $("#list").append("<li>" + item.name + ": $" + item.price + " each, quantity: " + item.quantity + "</li>");
      } else {
        $("#purchased").append("<li>" + item.name + ": $" + item.price + " each, quantity: " + item.quantity + "</li>");
      }
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

  // 5. Add the CDN for jQuery UI script to grocery.html
  // You can find the snippet here: https://developers.google.com/speed/libraries/#jquery-ui

  // 6. Add a remove button at the bottom below the total. When clicked, it should remove
  // the last item and update the total.
  $(".btn-danger").on("click", function() {
      groceries.pop();
      allItems();
      everything();
    });

  // 7. Make each grocery item (each li element) draggable using .sortable().
  // Use the example here https://johnny.github.io/jquery-sortable/ to figure out how to implement this.
  // The three steps under 'Getting Started' should get you there. You do not NEED the css provided.
  $(function() {
    $("#list").sortable();
    $("#purchased").sortable();
  });
  // 8. In the HTML document, add a list below "#list" called "purchased". All of the items that are status complete
  // should go in the purchased list.
// Changed above a top - created if/else

  // 9. When one of the grocery items in "#list" is double-clicked the status for that item
  // should change to "complete" and populate in the complete list.
  $("#list li").on("dblclick", function(){
    $("#purchased").append(this);
  });
  var groceries = [
    {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
    {name: "Onions", status: "needed", price: "1.85", quantity: 2},
    {name: "Cilantro", status: "needed", price: ".95", quantity: 1},
    {name: "Limes", status: "complete", price: ".33", quantity: 3},
    {name: "Jalapeno", status: "complete", price: ".15", quantity: 2}
  ];

});
