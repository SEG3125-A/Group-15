
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp 

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);
	console.log('s1.val',s1.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName.name + " $"+ productName.price;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName.name + " $"+ productName.price;
		label.appendChild(document.createTextNode(productName.name + " $"+ productName.price));
		s2.appendChild(label);

		var image = document.createElement("img");
        image.src = productName.imageName;
        image.alt = productName.name;
        image.style.width = "100px";
		image.style.height = "100px"; // Adjust the width as needed
        s2.appendChild(image);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	//var ele = document.getElementsByName("product");
	var ele = document.querySelectorAll(".product-component")
	var chosenProducts = [];
	console.log('here');
	console.log(ele.values);
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("The Total Price of your Cart is $" + getTotalPrice(chosenProducts).toFixed(2)));
	
}


// This function is for the filtering of products based on the category
function populateFilteredList(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on category
    var optionArray = filterListProducts(products, s1.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
		console.log(optionArray);
		optionArray.forEach(product => {
			const component = document.createElement('div');
			component.className = 'product-component';
			component.id= 'product-component'

			
			component.innerHTML = `
			<input type="checkbox" id="product-${product.id}" class="product-checkbox">
			  <img src="${product.imageName}" alt="${product.name}" class="product-image">
			  <div class="product-info">
				<div class="product-label">${product.name}</div>
				<div class="product-price">$${product.price}</div>
			  </div>
			`;
		
			s2.appendChild(component);
		  });
		
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	
}
function calculateTotal(p){
	total = 0
	for (i = 0; i < p.length; i++) { 
		var price = parseFloat(p[i].price.replace('$', ''));
		total = total + price
	}
	return total;
}

function cartItem() {
	var c = document.getElementById('displayCart');
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
  	para.appendChild(document.createElement("br"));
	const selectedProducts = []; // Array to hold the selected products
	
	// Get all product components
	const productComponents = document.querySelectorAll('.product-component');
	
	productComponents.forEach(component => {
	  const checkbox = component.querySelector('.product-checkbox');
	  
	  // Check if the checkbox is checked
	  if (checkbox.checked) {
		// Get the label and price from the component
		
		const label = component.querySelector('.product-label').textContent;
		const price = component.querySelector('.product-price').textContent;
		console.log(price);
		para.appendChild(document.createTextNode(label));
		para.appendChild(document.createElement("br"));
		
		// Add the product info to the selectedProducts array
		selectedProducts.push({ label, price });
	  }
	});

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("The Total Price of your Cart is $" + calculateTotal(selectedProducts)));

	
	// Do something with the selected products
	console.log(selectedProducts); // For example, log them to the console
	//return selectedProducts; // Optionally return the array for further processing
}
  
  
  