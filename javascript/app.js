require.config({
	paths: {
		knockout: 'knockout-2.3.0'
	},

	shim: {
		'knockout' : {
			exports: 'ko'
		},

		'Product': ['knockout'],

		'ProductViewModel':['knockout', 'Product']
		
	}
});

require(['knockout', 'Product', 'ProductViewModel'], function(ko, Product, ProductViewModel){
	
	var viewproduct = new ProductViewModel.ProductViewModel();

	ko.applyBindings(viewproduct);
});