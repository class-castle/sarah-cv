import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	tagName: 'div',
	classNames: ['skills-tag'],
	
	tagTitle: function() {
		if (this.get('relatedSkillIndex') || this.get('relatedSkillIndex') === 0) {
			return this.get('session.skillsTags')[this.get('relatedSkillIndex')].title;
		}
	}.property('relatedSkillIndex'),

	tagMetaTitle: function() {
		if (this.get('relatedSkillIndex') || this.get('relatedSkillIndex') === 0) {
			return this.get('session.skillsTags')[this.get('relatedSkillIndex')].metaTitle;
		}
	}.property('relatedSkillIndex'),

});
