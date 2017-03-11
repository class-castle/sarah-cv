import Ember from 'ember';

export default Ember.Component.extend({
	content: function() {
		return this.get('item.contentPath') + this.get('item.metaTitle');
	}.property('item'),
});
