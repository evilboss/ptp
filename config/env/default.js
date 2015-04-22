'use strict';


module.exports = {
	app: {
		title: 'pass the paragraph',
		description: 'Game for Writters',
		keywords: 'Game,Story,Tales,Mates,Paragraph,Pass',
		googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions'
};
