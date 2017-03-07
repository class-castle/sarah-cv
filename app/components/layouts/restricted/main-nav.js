import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	tagName: 'div',
	classNames: ['nav-sidebar'],
	classNameBindings: ['session.navCollapsed:nav-collapsed', 'session.navToggled:nav-toggled'],

	actions: {
      toggleFullNav:function() {
        this.toggleProperty('session.navCollapsed');
      },
  	}  
});
