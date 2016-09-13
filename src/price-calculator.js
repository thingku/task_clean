// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product
var calculatePrice = function (userType, productType, price, publishedDate) {
	var pDateFlag,	pDiscountFlag = 0, pTypePriceFlag = 0;
	//check if the product is new, then set the value to 10 (highest possible value of rebate)
	pDateFlag = ( publishedDate.toDateString() === new Date().toDateString() ? 10 : 0 ); 
	// check if company user
	if ( userType === 1 ) { 
		// if product is new and the user is a company user, +5 discount would be added to the acquired pDateFlag value, else the discount will be 5 regardless if the user is a company user 
		pDiscountFlag = ( productType === 0 ? pDateFlag += 5 : pDateFlag -= 5 ); 
	} else {
		// if product is new and the user is not a company user, +0 discount would be added to the acquired pDateFlag value, else he will not have any discount
		pDiscountFlag = ( productType === 0 ? pDateFlag += 0 : pDateFlag -= pDateFlag ); 
	}
	// check if the product is new or not
	pTypePriceFlag = ( productType === 0 ? 25 : 35 ); 
	// return and calculate the output
	return price + parseInt( pTypePriceFlag ) - pDiscountFlag;
}