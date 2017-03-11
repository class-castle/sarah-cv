import Ember from 'ember';

export default Ember.Component.extend({
	metadata: Ember.inject.service(),
	index: 0,

	relatedSkills: function() {
		return this.get('metadata.workExperienceItems').findBy('index', 0).relatedSkills;
	}.property('index'),
});
