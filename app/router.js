import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	this.route('index', {path: '/'});
 	this.route('introduction');
  	this.route('work-experience');
  	this.route('skills');
  	this.route('references');
});

export default Router;
