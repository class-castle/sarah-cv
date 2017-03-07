import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',
	classNames: ['toggle-button'],
	classNameBindings: ['classes', 'popoutBoxName:open:closed'],
	
	click() {
		this.toggleProperty('popoutBoxName');
  	},
});
