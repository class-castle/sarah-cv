import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['accordion-item'],
	classNameBindings: ['classes', 'open:open'],

	didInsertElement: function() {
		Ember.run.once(this, function() {
			if (this.get('index') === 0) {
			this.set('open', true);
			}
		});
	},

	actions: {
		toggleAccordion: function() {
			var self = this;
			if (self.get('open')) {
				self.$('.accordion-item-content').slideUp( 300, function() {
			    	self.toggleProperty('open');
			  });
			} else {
				self.$('.accordion-item-content').slideDown( 300, function() {
					var scrollBarPosition = self.$('.accordion-item-header').offset().top - 85;
		        	Ember.$('html,body').animate({scrollTop: scrollBarPosition}, 200);
					self.toggleProperty('open');
			  	});
			}
		},
	}
});
