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
  if (cart.length === 0) { // If cart is empty.
    cartStatement = "Your shopping cart is empty.";
  }
  else if (cart.length === 1) { // If there's only one item in the cart.
    cartStatement = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else {
    cartStatement = "In your cart, you have";
    for (var i = 0; i < cart.length - 1; i++) { // If there's more than one item in the cart. We stop the loop short so that we can add the last part of the sentence.
      cartStatement = `${cartStatement} ${cart[i].itemName} at $${cart[i].itemPrice},`;
    }
    cartStatement = `${cartStatement} and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
  return cartStatement
}

function total() {
  // write your code here
  var cartTotal = 0;
  if (cart.length >= 1) { // Automatically returns $0.
    for (var i = 0; i < cart.length; i++) { // Loop over items of cart, and add price.
      cartTotal = cartTotal + cart[i].itemPrice;
    }
  }
  return cartTotal
}


function placeOrder(cardNumber) { // Accepts cardNumber, gives total price, and empties cart.
  // write your code here
  if (isNaN(cardNumber)) { // Checks if a number was entered, and returns default statement if not.
  return "Sorry, we don't have a credit card on file for you."
} else {
  var totalCost = total();
  var emptyCart = cart.splice(0, cart.length);
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`, emptyCart
}
}
