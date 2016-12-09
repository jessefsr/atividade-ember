import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    let id = params.id;
    return this.get("store").findRecord('cliente', id);
  },

  actions: {

    excluirCliente(cliente) {

      this.send('excluir', cliente);
      this.transitionTo('clientes');
    }
  }
});
