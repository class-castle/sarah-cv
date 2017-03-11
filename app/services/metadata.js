import Ember from 'ember';

export default Ember.Service.extend({
	workExperienceItems: [
		{
			// index: 0,
			metaTitle: 'freelance-photographer',
			contentPath: 'content/work-experience/',
			title: 'Photographer | 2010 - Present',
			relatedSkills: [0, 1, 5, 7, 8, 9, 10, 11],
		},
		{
			// index: 1,
			metaTitle: 'digitisation-assistant',
			contentPath: 'content/work-experience/',
			title: 'Digitisation Assistant, Google Cultural Institute | 2016',
			relatedSkills: [0, 1, 3, 5, 7, 8, 9, 10, 11],
		},
			{
			
			metaTitle: 'cue-newspaper',
			contentPath: 'content/work-experience/',
			title: 'Pictures editor, Cue Newspaper | 2013 - Present',
			relatedSkills: [1, 2, 5, 7, 8, 9, 10, 11],
		},
		{
			
			metaTitle: 'freelance-editor-writer',
			contentPath: 'content/work-experience/',
			title: 'Editor and Copywriter | 2014 - 2016',
			relatedSkills: [0, 2, 3, 4, 7, 8, 10],
		},
		{
			
			metaTitle: 'gender-health-journalist',
			contentPath: 'content/work-experience/',
			title: 'Gender and Health Journalist | 2014 - 2015',
			relatedSkills: [0, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
		
			metaTitle: 'fierce-sheep',
			contentPath: 'content/work-experience/',
			title: 'Creative Director, Fierce Sheep Collective | 2015 - Present',
			relatedSkills: [1, 2, 3, 5, 7, 8, 10],
		},
		{
			
			metaTitle: 'research-assistant-uct',
			contentPath: 'content/work-experience/',
			title: 'Researcher, UCT | 2015',
			relatedSkills: [2, 4, 5, 8, 10],
		},

		{
			
			metaTitle: 'iziko-photographic-archiver',
			contentPath: 'content/work-experience/',
			title: 'Photographic Archiver, Iziko National Gallery | 2010',
			relatedSkills: [1, 5, 9, 11],
		},
		{
			
			metaTitle: 'special-projects',
			contentPath: 'content/work-experience/',
			title: 'Special Projects | 2017',
			relatedSkills: [1, 5, 9],
		},
		// {
		
		// 	metaTitle: 'student-journalist',
		// 	contentPath: 'content/work-experience/',
		// 	title: 'Student journalist | 2006 - 2009',
		// 	relatedSkills: [],
		// },
		// {
		// 	index: 9,
		// 	metaTitle: 'assistant-lexicographer',
		// 	contentPath: 'content/work-experience/',
		// 	title: 'Assistant lexicographer | 2008 - 2009',
		// 	relatedSkills: [],
		// },
		// {
		// 	index: 10,
		// 	metaTitle: 'social-worker',
		// 	contentPath: 'content/work-experience/',
		// 	title: 'Social Worker | 2005',
		// 	relatedSkills: [],
		// },
	],

	skillsTags: [
		{
			index: 0,
			metaTitle: 'ability-to-work-independently',
			title: 'The ability to work independently',
			shortTitle: 'The ability to work independently'
		},
		{
			index: 1,
			metaTitle: 'working-in-a-cultural-context',
			title: 'Working in a cultural context',
			shortTitle: 'Working in a cultural context'
		},
		{
			index: 2,
			metaTitle: 'research-and-english-writing',
			title: 'Excellent research and English writing skills',
			shortTitle: 'Excellent research and English writing skills'
		},
		{
			index: 3,
			metaTitle: 'ability-to-contruct-a-clear-narrative',
			title: 'Ability to construct a clear narrative',
			shortTitle: 'Ability to construct a clear narrative'
		},
		{
			index: 4,
			metaTitle: 'find-and-transcribe-information', 
			title: 'Ability to find information and effectively transcribe it into written, visual and audio texts',
			shortTitle: 'Effectively transcribe information'
		},
		{
			index: 5,
			metaTitle: 'work-well-and-communicate-with-others',
			title: 'Ability to work well with others and communicate effectively with internal and external stakeholders at all levels',
			shortTitle: 'Work well with others and communicate with stakeholders'
		},
		{
			index: 6,
			metaTitle: 'taylor-written-communications',
			title: 'Ability to tailor oral and written communication to specific audiences',
			shortTitle: 'Ability to tailor communication for specific audiences'
		},
	 	{
			index: 7,
			metaTitle: 'admin-and-coordination', 
			title: 'Strong administration and coordination skills, with a methodical approach and attention to detail',
			shortTitle: 'Strong administration and coordination skills'
		},
		{
			index: 8,
			metaTitle: 'deliver-work-in-agreed-timeframes', 
			title: 'Ability to work independently and deliver work within the agreed timeframes',
			shortTitle: 'Deliver work within timeframes'
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
			shortTitle: 'Strong computer skills'
		},
		{
			index: 11,
			metaTitle: 'passionate-and-knowledgeable-about-african-culture', 
			title: 'Passionate and knowledgeable about contemporary culture from Africa and its Diaspora',
			shortTitle: 'Passionate and knowledgeable about contemporary African culture'
		},
	],
});
