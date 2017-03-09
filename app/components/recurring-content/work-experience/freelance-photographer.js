import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	index: 0,

	relatedSkills: function() {
		return this.get('session.workExperienceItems').findBy('index', 0).relatedSkills;
	}.property('index'),
});
