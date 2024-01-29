	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.00
	},
	{
		name: "rice",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.49
	},
	{
		name: "ground-beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 14.99
	},
	{
		name: "onion",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.00
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.50
	},
	{
		name: "cereal",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 6.00
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.50
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 11.99
	},
	{
		name: "mushroom",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.75
	},
	{
		name: "Spinach",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 11.99
	},
	{
		name: "kale",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 11.99
	},
	{
		name: "grapes",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 11.99
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	prods.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
	
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name+" $"+ prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name+" $"+ prods[i].price);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name+" $"+ prods[i].price);
		}
		else if ((restriction == "VegetarianAndGlutenFree") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) ){
            product_names.push(prods[i].name+" $"+ prods[i].price);
        }
		else if ((restriction == "VegetarianAndOrganic") && (prods[i].organic == true) && (prods[i].vegetarian == true) ){
            product_names.push(prods[i].name+" $"+ prods[i].price);
        }

		else if ((restriction == "GlutenFreeAndOrganic") && (prods[i].organic == true) && (prods[i].glutenFree == true) ){
            product_names.push(prods[i].name+" $"+ prods[i].price);
        }

		else if ((restriction == "AllRestrictions") && (prods[i].organic == true) && (prods[i].glutenFree == true) && prods[i].vegetarian == true ){
            product_names.push(prods[i].name+" $"+ prods[i].price);
        }

		else if (restriction == "None"){
			product_names.push(prods[i].name+" $"+ prods[i].price);
		}
	}
	return product_names;
}



// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i=0; i<products.length; i+=1) {
        if (chosenProducts.indexOf(products[i].name+" $"+ products[i].price) > -1){
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}


