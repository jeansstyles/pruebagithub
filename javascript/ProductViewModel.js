define(['knockout', 'Product'], function(ko, Product){

	function ProductViewModel(){

		var self = this;

		//the product that we want to edit/view...
		self.selectedProduct = ko.observable();

		self.productCollection = ko.observableArray([]);

		//Product List view selected item
		self.listViewSelectedItem = ko.observable(null);

		self.listViewSelectedItem.subscribe(function(product){
			if(product){
				self.selectedProduct(product);
			}
		});

		self.addNewProduct = function(){
			var p = new Product.Product();

			self.selectedProduct(p);	
		};

		self.doneEditingProduct = function(){
			var p = self.selectedProduct();

			if(!p){
				return;
			}

			if(self.productCollection.indexOf(p) > -1){
				return;
			}

			//Add the product to the collection...
			self.productCollection.push(p);

			//clear out the selected product...
			self.selectedProduct(null);
		};

		self.removeProduct = function(){
			var p = self.selectedProduct(p);

			if(!p){
				return;
			}

			self.selectedProduct(null);

			return self.productCollection.remove(p);
		}


		

	};

	return {ProductViewModel: ProductViewModel};	
}) 