/**
 * LtgStudy.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		      study_id : {
			          type: 'integer',
			          required : true,
 						primaryKey : true
		      },
		study_alias : {
			          type: 'string'
		      },
		gov_study_url : {
			          type: 'string'
		      }
		,
		medical_condition : {
			          type: 'string'
		      }
		,
		study_title : {
			          type: 'string'
		      }
		,
		study_purpose : {
			          type: 'string'
		      }
		,
		study_phase : {
			          type: 'string'
		      }
		,
		study_enroll_status : {
			          type: 'string'
		      }
		,
		qualifying_gender : {
			          type: 'string'
		      }
		,
		qualifying_age : {
			          type: 'integer'
		      },
		time_commitment : {
			          type: 'string'
		      },
		inclusion_criteria : {
			          type: 'string'
		      },
		enrollment_goal : {
			          type: 'string'
		      },
		microsite_link : {
			          type: 'string'
		      },
		study_dates : {
			          type: 'string'
		      },
		study_interventions : {
			          type: 'string'
		      },
		placebo_arm_group_type : {
			          type: 'string'
		      },
		planned_sites_count : {
			          type: 'integer'
		      },
		active_sites_count : {
			          type: 'integer'
		      },
		created_by : {
			          type: 'string'
		      },
		updated_by : {
			          type: 'string'
		      },
		// Add a reference to LtgSite
		sites :{
			collection: 'site',
			via: 'study'	
		}
	  }
};

