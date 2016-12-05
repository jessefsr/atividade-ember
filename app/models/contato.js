import DS from 'ember-data';

export default DS.Model.extend({

	nome: DS.attr('string'),
	telefone: DS.attr('string'),
	ativo: DS.attr('boolean')
});
