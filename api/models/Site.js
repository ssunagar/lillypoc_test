/**
 * LtgSite.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

 	attributes: {
 		      sl_no : {
 			          type: 'integer',
 			          required : true,
 						primaryKey : true
 		      },
 		site_id : {
 			          type: 'integer'
 		      },
 		site_recruitment_status : {
 			          type: 'string'
 		      }
 		,
 		site_name : {
 			          type: 'string'
 		      }
 		,
 		site_city : {
 			          type: 'string'
 		      }
 		,
 		site_state : {
 			          type: 'string'
 		      }
 		,
 		site_country : {
 			          type: 'string'
 		      }
 		,
 		site_address : {
 			          type: 'string'
 		      }
 		,
 		postal_code : {
 			          type: 'string'
 		      }
 		,
 		site_pi_full_name : {
 			          type: 'string'
 		      },
 		site_pi_contact_number : {
 			          type: 'string'
 		      },
 		created_by : {
 			          type: 'string'
 		      },
 		updated_by : {
 			          type: 'string'
 		      },
 		
 		 // Add a reference to LtgStudy
 		 study: {
 		 	model: 'Study',
 		 	columnName : 'study_id'
 		 }
 	  }
 };

