import Ember from 'ember';

export function skillsTag(params/*, hash*/) {
	var skillsTags = ['ability-to-work-independently', 'working-in-a-cultural-context', 'research-and-english-writing', 'ability-to-contruct-a-lear-narrative', 'find-and-transcrivbe-information', 'work-well-and-communicate-with-others', 'admin-and-coordination', 'deliver-work-in-agreed-timeframes', 'computer-skills', 'passionate-and-knowledgable-about-african-culture'];
  return skillsTags[params];
}

export default Ember.Helper.helper(skillsTag);
