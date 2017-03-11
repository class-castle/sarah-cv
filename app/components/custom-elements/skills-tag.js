import Ember from 'ember';

export default Ember.Component.extend({
	metadata: Ember.inject.service(),
	tagName: 'div',
	classNames: ['skills-tag'],
	
	tagTitle: function() {
		if (this.get('relatedSkillIndex') || this.get('relatedSkillIndex') === 0) {
			var thisSkill = this.get('metadata.skillsTags')[this.get('relatedSkillIndex')];
			var displayTitle = thisSkill.shortTitle ? thisSkill.shortTitle : thisSkill.title;
			return displayTitle;
		}
	}.property('relatedSkillIndex'),

	tagMetaTitle: function() {
		if (this.get('relatedSkillIndex') || this.get('relatedSkillIndex') === 0) {
			return this.get('metadata.skillsTags')[this.get('relatedSkillIndex')].metaTitle;
		}
	}.property('relatedSkillIndex'),

});
