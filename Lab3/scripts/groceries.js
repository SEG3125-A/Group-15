	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products 		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		imageName: "./styles/brocoli.jpg",
		category: "vegetable"

	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		imageName: "./styles/bread.jpg",
		category: "carb"
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.99,
		imageName: "./styles/salmon.jpg",
		category: "protein"
	},
	{
		name: "Pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.99,
		imageName: "./styles/pasta.jpg",
		category: "carb"
	},
	{
		name: "Rice",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.49,
		imageName: "./styles/rice.jpg",
		category: "carb"
	},
	{
		name: "Ground-beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 14.99,
		imageName: "./styles/beef.jpg",
		category: "protein"
	},
	{
		name: "Onion",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		imageName: "./styles/onion.jpg",
		category: "vegetable"
	},
	{
		name: "Apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.50,
		imageName: "./styles/apple.jpg",
		category: "fruit"
	},
	{
		name: "Cereal",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 6.99,
		imageName: "./styles/cereal.jpg",
		category: "cereal"
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.50,
		imageName: "./styles/milk.jpg",
		category: "dairy"
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 11.99,
		imageName: "./styles/chicken.jpg",
		category: "protein"
	},
	{
		name: "Mushroom",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.75,
		imageName: "./styles/mushroom.jpg",
		category: "vegetable"
	},
	{
		name: "Spinach",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 11.99,
		imageName: "./styles/Spinach.jpg",
		category: "vegetable"
	},
	{
		name: "kale",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 11.99,
		imageName: "./styles/kale.jpg",
		category: "vegetable"
	},
	{
		name: "Grapes",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 11.99,
		imageName: "./styles/grapes.jpg",
		category: "fruit"
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction,category) {
	prods.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
	//console.log(prods, category,restriction);
	let product_names = [];
	let filteredProducts =[];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "VegetarianAndGlutenFree") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) ){
            product_names.push(prods[i]);
        }
		else if ((restriction == "VegetarianAndOrganic") && (prods[i].organic == true) && (prods[i].vegetarian == true) ){
            product_names.push(prods[i]);
        }
		else if ((restriction == "GlutenFreeAndOrganic") && (prods[i].organic == true) && (prods[i].glutenFree == true) ){
            product_names.push(prods[i]);
        }

		else if ((restriction == "AllRestrictions") && (prods[i].organic == true) && (prods[i].glutenFree == true) && prods[i].vegetarian == true ){
            product_names.push(prods[i]);
        }
		else if (restriction == "None"){
			product_names.push(prods[i]);
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


function filterListProducts(prods, category) {
	prods.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
	
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((category == "Carbohydrate") && (prods[i].category == 'carb')){
			product_names.push(prods[i]);
		}
		else if ((category == "Protein") && (prods[i].category == 'protein')){
			product_names.push(prods[i]);
		}
		else if ((category == "Fruit") && (prods[i].category == 'fruit')){
			product_names.push(prods[i]);
		}
		else if ((category == "Vegetable") && (prods[i].category == 'vegetable')){
            product_names.push(prods[i]);
        }
		else if ((category == "Cereal")&& (prods[i].category == 'cereal') ){
            product_names.push(prods[i]);
        }
		else if ((category == "Dairy")&& (prods[i].category == 'dairy') ){
            product_names.push(prods[i]);
        }
		else if (category == "All"){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}