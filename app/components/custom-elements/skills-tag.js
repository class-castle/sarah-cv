import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	
	tagTitle: function() {
		if (this.get('relatedSkillIndex')) {
			return this.get('session.skillsTags')[this.get('relatedSkillIndex')].title;
		}
	}.property('relatedSkillIndex'),

	tagMetaTitle: function() {
		if (this.get('relatedSkillIndex')) {
			return this.get('session.skillsTags')[this.get('relatedSkillIndex')].metaTitle;
		}
	}.property('relatedSkillIndex'),

});
