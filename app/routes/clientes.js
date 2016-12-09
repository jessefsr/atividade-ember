import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.get("store").findAll("cliente");
  },

  actions: {

    confirmar(cliente) {
      cliente.save();
    },

    cancelar(cliente) {
      cliente.rollbackAttributes();
    },

    excluir(cliente) {
        this.get("store").deleteRecord(cliente);
        cliente.save();
    }
  }
});
