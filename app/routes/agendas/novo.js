import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return {
			nome: 'teste',
			telefone: 'teste'
		};
	},

	actions: {
		salvar(agenda) {
			let a = this.get("store").
				createRecord("agenda", agenda);
			a.save();
			this.transitionTo('agendas');
		}
	}
});
