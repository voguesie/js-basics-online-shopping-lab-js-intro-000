var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) { // Adds an object representing an item added to the cart.
                           // The object contains two key:value pairs, one for the item's name, the other for it's price.
 // write your code here
 var price = Math.floor(Math.random()*100+1); // Randomly sets "price" of item.
 //var newItem = {itemName: item, itemPrice: price}; // Sets newItem.
 return cart.push({itemName: item, itemPrice: price}), `${item} has been added to your cart.`
}

function viewCart() { // Function that returns a sentence of the contents in the cart.
  // write your code here
  var cartStatement = ""; // Variable to build the sentence.
  if (cart.length = 0) {
    cartStatement = "Your shopping cart is empty.";
  }
  else if (cart.length = 1) {
    cartStatement = `In your cart, you have ${cart.itemName} at $${cart.itemPrice}.`;
  }
  else {
    cartStatement = "In your cart, you have";
    for (var i = 0; i < cart.length - 1; i++) {
      var nextItem = cart[i];
      cartStatement = `${cartStatement} ${nextItem.itemName} at $${nextItem.itemPrice},`;
    }
    var lastItem = cart[cart.length-1];
    cartStatement = `${cartStatement} and ${lastItem.itemName} at $${lastItem.itemPrice}.`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
