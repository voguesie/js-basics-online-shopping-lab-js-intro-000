var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) { // Adds an object representing an item added to the card.
                           // The object contains two key:value pairs, one for the item's name, the other for it's price.
 // write your code here
 var price = Math.floor(Math.random()*100+1);
 var newItem = {itemName: item, itemPrice: price};
}

function viewCart() {
  // write your code here
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
