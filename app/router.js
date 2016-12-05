import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contatos', function() {
    this.route('novo');
  });
  this.route('agendas');
});

export default Router;
