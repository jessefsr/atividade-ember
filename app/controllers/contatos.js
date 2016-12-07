import Ember from 'ember';


export default Ember.Controller.extend({
 	isFiltered: false,

 	contatosFiltrado: Ember.computed('isFiltered', 
 		function() {
 		let isFiltered = this.get('isFiltered');
 		if(isFiltered) {
 			return this.get('model').filter(
 				function(e) {
 					return e.nome === "joao";
 				});
 		}
 		return this.get('model');
 	}),
 	actions: {

 		toggleFilter() {

 			this.toggleProperty("isFiltered");
 		}
 	}
});