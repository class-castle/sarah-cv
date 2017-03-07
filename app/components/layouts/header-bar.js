import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'header',
	classNameBindings: ['systemMessage:system-message-active', 'systemMessage.type'],
});
