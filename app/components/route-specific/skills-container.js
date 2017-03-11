import Ember from 'ember';

export default Ember.Component.extend({
	metadata: Ember.inject.service(),
	tagName: '',
	relevantWorkExperienceItems: function() {
		var activeTag = this.get('activeTag');
		if (activeTag) {
			var selectedSkillIndex = this.get('metadata.skillsTags').findBy('metaTitle', activeTag).index;
			var relevantWorkExperienceItems = [];
			this.get('metadata.workExperienceItems').forEach(function(item) {
				if (item.relatedSkills) {
					if (item.relatedSkills.indexOf(selectedSkillIndex) > -1) {
						var item = {
							'content': item.contentPath + item.metaTitle,
							'title': item.title,
						}
						relevantWorkExperienceItems.pushObject(item);
					}
				}
			});
			return relevantWorkExperienceItems;
		}
		
	}.property('activeTag'),

	currentTitle: function() {
		var activeTag = this.get('activeTag');
		if (activeTag) {
			return this.get('metadata.skillsTags').findBy('metaTitle', activeTag).title;
		}
	}.property('activeTag'),


});