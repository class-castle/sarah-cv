import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
  	tagName: 'div',
	classNames: ['wrapper', 'interface'],
	classNameBindings: ['classes', 'session.navCollapsed:nav-collapsed',  'session.navToggled:nav-toggled', 'session.placeholdersSupported:placeholders', 'interfaceTopBar:top-bar-present', 'session.userUiState.freezeNavigation:nav-frozen', 'session.hideContent:hide-content:show-content'],
});
