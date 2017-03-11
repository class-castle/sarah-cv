import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
  	tagName: 'div',
	classNames: ['wrapper', 'interface', 'text-column'],
	classNameBindings: ['classes', 'session.navCollapsed:nav-collapsed',  'session.navToggled:nav-toggled'],
});
