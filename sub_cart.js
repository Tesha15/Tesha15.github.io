"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Latesha Campbell
   Date:   11/11/23

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

window.addEventListener("load", setupCart);

function setupCart() {
    var addButtons = document.getElementById("addButtons");
	for (var i = 0; i < addButtons.length; i++) {
		addButtons[i].onclick = addItem();
	}
}
	

	var cart = document.getElementById("cart");
    var foodID = foodItem.getAttribute("foodID").value;
    var foodDescription = foodItem.cloneNode(true);
	
   
function additem(); {
	var foodItem = e.target.nextElementSibling;
	var foodID = foodItem.getAttribute("id").value;
	var foodDescription = foodItem.cloneNode(true);
	var cartBox = document.getElementById("cart");
	var duplicateOrder = false;
	
	// Add duplicate items to cart
	for (var i = 0; i < cartBox.childNodes.length; i++) {
		if (cartBox.childNodes[i].id === foodID.id) {
			cartBox.firstElementChild.value + 1;
			break; //stop loop
		}
	}
	
	// Add new items to cart
	if (duplicateOrder === false) {
		var orderCount = document.createElement("span");
		orderCount.textContent = 1;
		foodDescription.appendChild(orderCount);
		cartBox.appendChild(foodDescription);
	}
}