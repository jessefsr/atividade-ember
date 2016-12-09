import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return {
      nome: ''
    }
  },

  actions: {
    salvar(c) {

      let cliente = this.get("store").createRecord("cliente", c);
      cliente.save();
      this.transitionTo('clientes');
    }

  }
});
