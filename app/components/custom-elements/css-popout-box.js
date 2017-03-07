import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['pop-up-box'],
	classNameBindings: ['customClasses', 'popoutBoxName:open:closed', 'colorScheme', 'boxArrow:box-arrow', 'boxArrowDirection'],

	actions: {
		closePopoutBox: function() {
			this.set('popoutBoxName', false);
		},
	}
});