import Ember from 'ember';

export default Ember.Component.extend({
	content: function() {
		console.log(this.get('item.index'));
		return 'recurring-content/work-experience/' + this.get('item.metaTitle');
	}.property('item'),
});
