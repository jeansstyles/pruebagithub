define(['knockout'], function(ko){

	function Product(){
		var self = this;
		
		//"SKU" property...
		self.sku = ko.observable("Beer");

		//"Description" property...
		self.description = ko.observable("Cerveza");

		//"Price" property...
		self.price = ko.observable(0.00);

		//"Cost" property...
		self.cost = ko.observable(0.00);

		//"Quantity" property...
		self.quantity = ko.observable(0);

		//Simply combines the Sku and Description properties...
		self.skuAndDescription = ko.computed(function(){
			var sku = self.sku();
			var description = self.description();
			return sku + " : " + description;
		});
	}

	return {Product: Product};
	  	
});
