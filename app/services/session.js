import Ember from 'ember';

export default Ember.Service.extend({
	navToggled: true,
	
	workExperienceItems: [
		{
			index: 0,
			metaTitle: 'freelance-photographer',
			contentPath: 'recurring-content/work-experience/',
			title: 'Freelance Photographer | 2010 - Present',
			relatedSkills: [0, 5, 6, 7, 8, 10],
		},
		{
			index: 1,
			metaTitle: 'digitisation-assistant',
			contentPath: 'recurring-content/work-experience/',
			title: 'Digitisation assistant, Google Cultural Institute: South African Textiles project | 2016',
			relatedSkills: [1, 5, 7, 9],
		},
		{
			index: 2,
			metaTitle: 'research-assistant-uct',
			contentPath: 'recurring-content/work-experience/',
			title: 'Research Assistant, UCT | 2015',
		},
		{
			index: 3,
			metaTitle: 'freelance-editor-writer',
			contentPath: 'recurring-content/work-experience/',
			title: 'Freelance editor and copywriter | 2014 - 2016',
		},
		{
			index: 4,
			metaTitle: 'gender-health-journalist',
			contentPath: 'recurring-content/work-experience/',
			title: 'Gender and Health Journalist | 2014 - 2015',
		},
		{
			index: 5,
			metaTitle: 'fierce-sheep',
			contentPath: 'recurring-content/work-experience/',
			title: 'Creative Director, Fierce Sheep Collective | 2015 - Present',
			relatedSkills: [10],
		},
		{
			index: 6,
			metaTitle: 'cue-newspaper',
			contentPath: 'recurring-content/work-experience/',
			title: 'Pictures editor, Cue Newspaper | 2013 - Present',
		},
		{
			index: 7,
			metaTitle: 'iziko-photographic-archiver',
			contentPath: 'recurring-content/work-experience/',
			title: 'Photographic Archiver, Iziko National Gallery | 2010',
		},
		{
			index: 8,
			metaTitle: 'student-journalist',
			contentPath: 'recurring-content/work-experience/',
			title: 'Student journalist | 2006 - 2009',
		},
		{
			index: 9,
			metaTitle: 'assistant-lexicographer',
			contentPath: 'recurring-content/work-experience/',
			title: 'Assistant lexicographer | 2008 - 2009',
		},
		{
			index: 10,
			metaTitle: 'social-worker',
			contentPath: 'recurring-content/work-experience/',
			title: 'Social Worker | 2005',
		},
	],

	skillsTags: [
		{
			index: 0,
			metaTitle: 'ability-to-work-independently',
			title: 'The ability to work independently',
		},
		{
			index: 1,
			metaTitle: 'working-in-a-cultural-context',
			title: 'Working in a cultural context',
		},
		{
			index: 2,
			metaTitle: 'research-and-english-writing',
			title: 'Excellent research and English writing skills',
		},
		{
			index: 3,
			metaTitle: 'ability-to-contruct-a-clear-narrative',
			title: 'Ability to construct a clear narrative',
		},
		{
			index: 4,
			metaTitle: 'find-and-transcribe-information', 
			title: 'Ability to find information and effectively transcribe it into written, visual and audio texts',
		},
		{
			index: 5,
			metaTitle: 'work-well-and-communicate-with-others',
			title: 'Ability to work well with others and communicate effectively with internal and external stakeholders at all levels',
		},
		{
			index: 6,
			metaTitle: 'taylor-written-communications',
			title: 'Ability to tailor oral and written communication to specific audiences',
		},
	 	{
			index: 7,
			metaTitle: 'admin-and-coordination', 
			title: 'Strong administration and coordination skills, with a methodical approach and attention to detail',
		},
		{
			index: 8,
			metaTitle: 'deliver-work-in-agreed-timeframes', 
			title: 'Ability to work independently and deliver work within the agreed timeframes',
		},
		{
			index: 9,
			metaTitle: 'effective-problem-solving-skills',  
			title: 'Effective problem solving skills',
		},	
		{
			index: 10,
			metaTitle: 'computer-skills',  
			title: 'Strong computer skills, and a willingness to learn new computer skills',
		},
		{
			index: 11,
			metaTitle: 'passionate-and-knowledgeable-about-african-culture', 
			title: 'Passionate and knowledgeable about contemporary culture from Africa and its Diaspora',
		},
	],
});
